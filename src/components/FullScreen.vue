<template>
  <div>
    <button type="button" @click="toggle">Zoom</button>
  </div>
</template>

<script>
export default {
  name: "FullScreen",
  data() {
    return {
      is_zoom: false
    };
  },
  methods: {
    toggle() {
      if (this.is_zoom) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        const body = document.body;
        if (body.requestFullscreen) {
          body.requestFullscreen();
        } else if (body.webkitRequestFullscreen) {
          body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) {
          body.msRequestFullscreen();
        }
      }
      this.is_zoom = !this.is_zoom;
    }
  }
};
</script>

<style scoped>

</style>