<template>
  <div id="background">
    <iframe src="https://www.youtube.com/embed/videoseries?controls=0&list=PLWz_3WM944uKIqp1XpGCKx8kL1eXB_jMa&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    transform: scale(1.15);
  }
}
</style>