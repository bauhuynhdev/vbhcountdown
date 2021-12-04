<template>
  <div>
    <span @click="toggle">
      <img src="@/assets/zoom-button.png">
    </span>
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
      try {
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
      } catch (e) {

      }
      this.is_zoom = !this.is_zoom;
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  position: fixed;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .1;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}
</style>