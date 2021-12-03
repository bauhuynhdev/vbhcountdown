<template>
  <div id="logo">
    <div class="image">
      <img src="@/assets/logo.png">
    </div>
    <div class="title">
      <h1>VIETNAM BACKPACKER HOSTELS<br/>NEW YEAR COUNT DOWN</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
};
</script>

<style lang="scss" scoped>
#logo {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  .title {
    margin-left: 20px;

    h1 {
      text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
    }
  }
}
</style>