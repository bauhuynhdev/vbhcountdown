<template>
  <div>
    <transition name="fade">
      <Background v-if="!$store.state.isCountDownTimer"/>
    </transition>
    <Logo/>
    <Timer :country="country" @endTimeEvent="endTimeEvent"/>
    <FullScreen/>
    <transition name="fade">
      <HappyNewYear v-if="$store.state.isHappyNewYear"/>
    </transition>
    <RequireScreen/>
  </div>
</template>

<script>

import Logo from "@/components/Logo";
import Background from "@/components/Background";
import Timer from "@/components/Timer";
import FullScreen from "@/components/FullScreen";
import RequireScreen from "@/components/RequireScreen";
import HappyNewYear from "@/components/HappyNewYear";
import moment from "moment";

export default {
  name: 'App',
  components: {HappyNewYear, RequireScreen, FullScreen, Timer, Background, Logo},
  data() {
    return {
      index: 0,
      countries: [
        {name: 'New Zealand', timeZone: 13 - this.$timeZone, flag: 'nz'},
        {name: 'Sydney', timeZone: 11 - this.$timeZone, flag: 'as'},
        {name: 'Brisbane', timeZone: 10 - this.$timeZone, flag: 'as'},
        {name: 'Seoul', timeZone: 9 - this.$timeZone, flag: 'ks'},
        {name: 'Hongkong / Singapore', timeZone: 8 - this.$timeZone, flag: ['ch', 'sn']},
        {name: 'Vietnam', timeZone: 7 - this.$timeZone, flag: 'vm'},
      ],
      isFirstTime: true
    };
  },
  methods: {
    unixTargetNewYear() {
      const day = moment().format('DD');
      const dateTimeText = day + '/12/2021 23:59:59';
      return moment(dateTimeText, 'DD/MM/YYYY HH:mm:ss').unix();
    },
    unixNowNewYear(timeZone) {
      return moment().add(timeZone, 'hour').unix();
    },
    endTimeEvent() {
      setTimeout(() => {
        this.index++;
        this.$store.state.isHappyNewYear = false;
      }, 30000);
    },
    scanCurrentIndex() {
      for (let i = 0; i < this.totalCountry; i++) {
        const country = this.countries[i];
        const target = this.unixTargetNewYear();
        const now = this.unixNowNewYear(country.timeZone);
        if (target > now) {
          return i;
        }
      }

      return this.totalCountry;
    }
  },
  computed: {
    totalCountry() {
      return this.countries.length;
    },
    country() {
      if (this.isFirstTime) {
        this.isFirstTime = false;
        this.index = this.scanCurrentIndex();
      }
      if (this.countries[this.index] === undefined) {
        return {name: '', timeZone: 0, flag: ''};
      }
      return this.countries[this.index];
    }
  }
};
</script>

<style lang="scss">
@import "./plugins/normalize.css";

@font-face {
  font-family: "Vbh";
  src: url("./fonts/Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Vbh";
  src: url("./fonts/Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}

body {
  font-family: 'Vbh', sans-serif;
  background: #ffffff;
}

:not(:root):fullscreen::backdrop {
  background: #ffffff;
}

.hide {
  opacity: 0;
  transition: all .25s ease-in-out;
}

.show {
  opacity: 1;
  transition: all .25s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
