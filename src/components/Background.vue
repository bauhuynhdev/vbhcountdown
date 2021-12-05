<template>
  <div id="background">
    <iframe allow="autoplay" allowfullscreen frameborder="0"
            src="https://dailymotion.com/embed/playlist/x7br8m?autoplay=1&scaleMode=fill&loop=1&ui-start-screen-info=0&ui-logo=0" type="text/html"></iframe>
  </div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style lang="scss" scoped>
#background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>