<template>
  <div>
    <Logo/>
  </div>
</template>

<script>

import Logo from "@/components/Logo";
import Background from "@/components/Background";

export default {
  name: 'App',
  components: {Background, Logo}
};
</script>

<style lang="scss">
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
}
</style>
