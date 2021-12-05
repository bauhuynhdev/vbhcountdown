<template>
  <div>
    <Background v-if="!$isDevelopment"/>
    <Logo/>
    <Timer :country="country" @endTimeEvent="endTimeEvent"/>
    <FullScreen/>
    <RequireScreen/>
  </div>
</template>

<script>

import Logo from "@/components/Logo";
import Background from "@/components/Background";
import Timer from "@/components/Timer";
import FullScreen from "@/components/FullScreen";
import RequireScreen from "@/components/RequireScreen";

export default {
  name: 'App',
  components: {RequireScreen, FullScreen, Timer, Background, Logo},
  data() {
    return {
      index: 0,
      countries: [
        {name: 'New Zealand', timeZone: 13 - this.$timeZone},
        {name: 'Sydney', timeZone: 11 - this.$timeZone},
        {name: 'Brisbane', timeZone: 10 - this.$timeZone},
        {name: 'Seoul', timeZone: 9 - this.$timeZone},
        {name: 'Hongkong / Singapore', timeZone: 8 - this.$timeZone},
        {name: 'Vietnam', timeZone: 7 - this.$timeZone},
      ]
    };
  },
  methods: {
    endTimeEvent() {
      this.index++;
    }
  },
  computed: {
    country() {
      if (this.countries[this.index] === undefined) {
        this.index = this.countries.length - 1;
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
</style>
