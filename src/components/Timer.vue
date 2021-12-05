<template>
  <div id="timer">
    <div class="countdown">
      <div>{{ d }}<span>Days</span></div>
      <div>{{ h }}<span>Hours</span></div>
      <div>{{ m }}<span>Minutes</span></div>
      <div>{{ s }}<span>Seconds</span></div>
      <div class="country-name">
        <div v-if="typeof country.flag === 'string'" class="flag"><img :src="flagPath(country.flag)"></div>
        <div v-if="Array.isArray(country.flag) && country.flag[0] !== undefined" class="flag"><img :src="flagPath(country.flag[0])"></div>
        <h2>{{ country.name }}</h2>
        <div v-if="Array.isArray(country.flag) && country.flag[1] !== undefined" class="flag"><img :src="flagPath(country.flag[1])"></div>
      </div>
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
      intervalRunner: undefined
    };
  },
  watch: {
    s() {
      if (this.endTime) {
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
      return this.d < 0;
    }
  },
  methods: {
    flagPath(flag) {
      return require('../assets/flags/' + flag + '-flag.gif');
    },
    setTimer() {
      const day = moment().format('DD');
      const dateTimeText = day + '/12/2021 23:59:59';
      const target = moment(dateTimeText, 'DD/MM/YYYY HH:mm:ss').unix();
      const now = moment().add(this.country.timeZone, 'hour').unix();
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

  & > .countdown {
    position: absolute;
    width: 100%;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    font-weight: 100;
    color: #ffffff;
    text-align: center;

    & > div.country-name {
      display: flex;
      justify-content: center;
      align-items: center;

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

    & > div:not(.country-name) {
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
}

.run-circle-timer {
  --duration: 31;
  --size: 400;
}
</style>