<template>
  <div>
    <!-- <router-link to="/home">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link> -->
    <router-view></router-view>
    <play-controller />
  </div>
</template>
<script>
import PlayController from "components/content/playcontroller/PlayController.vue";
export default {
  components: {
    PlayController,
  },
};
</script>
<style lang="less" scoped>
@import "assets/css/base.css";
/* 解决页面左右溢出 */
// html,
// body {
//   max-width: 100%;

//   overflow-x: hidden;
// }
</style>
