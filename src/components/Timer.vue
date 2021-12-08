<template>
  <div id="timer">
    <div v-if="isNewYearComing" class="countdown-circle">
      <div :style="{'--duration': countDownTimer, '--size': 400}" class="timer run-circle-timer">
        <div class="mask"></div>
      </div>
      <div class="seconds">{{ s }}</div>
    </div>
    <div v-if="!isNewYearComing" class="countdown">
      <div>{{ d }}<span>Days</span></div>
      <div>{{ h }}<span>Hours</span></div>
      <div>{{ m }}<span>Minutes</span></div>
      <div>{{ s }}<span>Seconds</span></div>
    </div>
    <div v-if="this.country.name.length && this.country.flag.length" class="country-name">
      <div v-if="typeof country.flag === 'string'" class="flag"><img :src="flagPath(country.flag)"></div>
      <div v-if="Array.isArray(country.flag) && country.flag[0] !== undefined" class="flag"><img
          :src="flagPath(country.flag[0])"></div>
      <h2>{{ country.name }}</h2>
      <div v-if="Array.isArray(country.flag) && country.flag[1] !== undefined" class="flag"><img
          :src="flagPath(country.flag[1])"></div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "Timer",
  props: ['country'],
  data() {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      intervalRunner: undefined,
      countDownTimer: 0
    };
  },
  watch: {
    s() {
      if (this.endTime) {
        this.countDownTimer = 0;
        this.$store.state.isHappyNewYear = true;
        this.$store.state.isCountDownTimer = false;
        clearInterval(this.intervalRunner);
        this.$emit('endTimeEvent', true);
        this.resetTimer();
      }
    },
    country() {
      this.runTimer();
    }
  },
  computed: {
    endTime() {
      return this.d === 0 && this.h === 0 && this.m === 0 && this.s === 0;
    },
    isNewYearComing() {
      if (this.d === 0 && this.h === 0 && this.m === 0 && this.s <= 30) {
        if (this.countDownTimer === 0) {
          this.countDownTimer = this.s;
        }
        if (this.s > 0) {
          this.$store.state.isCountDownTimer = true;
        }
        return true;
      }
      return false;
    }
  },
  methods: {
    flagPath(flag) {
      return require('../assets/flags/' + flag + '-flag.gif');
    },
    setTimer() {
      const target = this.$parent.unixTargetNewYear();
      const now = this.$parent.unixNowNewYear(this.country.timeZone);
      const diff = target - now;
      const d = Math.floor(diff / (60 * 60 * 24));
      const h = Math.floor(diff / (60 * 60));
      const m = Math.floor(diff / 60);
      const s = Math.floor(diff);

      this.d = d;
      this.h = h - d * 24;
      this.m = m - h * 60;
      this.s = s - m * 60;
    },
    runTimer() {
      this.setTimer();
      this.intervalRunner = setInterval(() => {
        this.setTimer();
      }, 1000);
    },
    resetTimer() {
      this.d = 0;
      this.h = 0;
      this.m = 0;
      this.s = 0;
    }
  },
  mounted() {
    this.runTimer();
  }
};
</script>

<style lang="scss" scoped>
#timer {
  position: fixed;
  width: 100%;
  height: 100%;

  & > .countdown-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > .seconds {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 15em;
    }

    .timer {
      background: -webkit-linear-gradient(left, #000 50%, #eee 50%);
      border-radius: 100%;
      height: calc(var(--size) * 1px);
      width: calc(var(--size) * 1px);
      position: relative;
      -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      mask: radial-gradient(transparent 65%, #000 50%);
    }

    .mask {
      border-radius: 100% 0 0 100% / 50% 0 0 50%;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 50%;
      -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;
      -webkit-transform-origin: 100% 50%;
    }

    @-webkit-keyframes time {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes mask {
      0% {
        background: #eee;
        -webkit-transform: rotate(0deg);
      }
      50% {
        background: #eee;
        -webkit-transform: rotate(-180deg);
      }
      50.01% {
        background: #000000;
        -webkit-transform: rotate(0deg);
      }
      100% {
        background: #000000;
        -webkit-transform: rotate(-180deg);
      }
    }
  }

  & > .countdown {
    position: absolute;
    width: 100%;
    top: 72%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    font-weight: 100;
    color: #ffffff;
    text-align: center;

    & > div {
      display: inline-block;
      min-width: 90px;
      padding: 15px 10px;
      background: rgba(2, 11, 67, .6);
      border-radius: 10px;
      border: 2px solid #030d52;
      margin: 15px;
      box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

      & > span {
        color: #ffffff;
        display: block;
        margin-top: 5px;
        font-size: .35em;
        font-weight: 400;
      }
    }
  }

  & > div.country-name {
    position: absolute;
    width: 100%;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    font-weight: 100;
    color: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    & > .flag {
      width: 120px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #000000;
      }
    }

    & > h2 {
      margin: 12px 20px 0;
      text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
      color: #000000;
      text-transform: uppercase;
    }
  }
}
</style>