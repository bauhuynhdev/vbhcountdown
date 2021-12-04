<template>
  <div>
    <Background/>
    <Logo/>
    <Timer/>
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
  components: {RequireScreen, FullScreen, Timer, Background, Logo}
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
