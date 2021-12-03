<template>
  <div id="timer">
    <div>{{ d }}<span>Days</span></div>
    <div>{{ h }}<span>Hours</span></div>
    <div>{{ m }}<span>Minutes</span></div>
    <div>{{ s }}<span>Seconds</span></div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0
    };
  },
  methods: {
    setTimer() {
      const target = Date.parse('Dec 31, 2021 23:59:59');
      const now = new Date;
      const diff = target - now;
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor(diff / (1000 * 60));
      const s = Math.floor(diff / 1000);

      this.d = d;
      this.h = h - d * 24;
      this.m = m - h * 60;
      this.s = s - m * 60;
    },
    runTimer() {
      this.setTimer();
      setInterval(() => {
        this.setTimer();
      }, 1000);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  font-weight: 100;
  color: #ffffff;
  width: 700px;
  text-align: center;

  & > div {
    display: inline-block;
    min-width: 90px;
    padding: 10px;
    background: rgba(2, 11, 67, .9);
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
</style>