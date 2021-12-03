<template>
  <div id="background">
    <img src="../assets/background.jpg">
  </div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style scoped lang="scss">
#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>