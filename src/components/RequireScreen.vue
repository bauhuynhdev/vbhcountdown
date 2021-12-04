<template>
  <div id="require-screen">
    <p>This website only works on screens larger than 1024</p>
  </div>
</template>

<script>
export default {
  name: "RequireScreen"
};
</script>

<style lang="scss" scoped>
#require-screen {
  position: fixed;
  background-color: #ffffff;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (min-width: 1024px) {
  #require-screen {
    display: none;
  }
}
</style>