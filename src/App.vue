<template>
  <div>
    <router-view></router-view>
    <play-controller v-if="!$route.meta.showControl" />
    <music-nav-bar v-if="!$route.meta.showNav" />
  </div>
</template>
<script>
import PlayController from "components/content/playcontroller/PlayController.vue";
import MusicNavBar from "./components/content/MusicNavBar/MusicNavBar.vue";
export default {
  components: {
    PlayController,
    MusicNavBar,
  },
};
</script>
<style lang="less" scoped>
@import "assets/css/base.css";
</style>
