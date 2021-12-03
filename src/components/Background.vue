<template>
  <div id="background">
    <iframe allow="autoplay" frameborder="0"
            src="https://www.youtube.com/embed/videoseries?controls=0&list=PLc3uPjELXRb9TwYUNOUbhNLwAfMm_xosL&autoplay=1&mute=1&loop=1"></iframe>
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
    transform: scale(1.2);
  }
}
</style>