<template>
  <div class="head">
    <nav-bar class="music-nav">
      <template v-slot:left>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao2"></use>
        </svg>
      </template>
      <template v-slot:center>
        <div class="center">
          <span
            :class="{ active: '/me' == $route.path }"
            @click="$router.push('/me')"
            >我的</span
          >
          <span
            :class="{ active: '/home' == $route.path }"
            @click="$router.push('/home')"
            >发现</span
          >
          <span>云村</span>
          <span>视频</span>
        </div>
      </template>
      <template v-slot:right>
        <svg
          class="icon"
          aria-hidden="true"
          @click="$router.push({ path: '/search' })"
        >
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "MusicNavBar",
  components: {
    NavBar,
  },
  setup() {},
};
</script>
<style lang="less" scoped>
.head {
  height: 0.7rem;
}
.music-nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  color: #676b6f;
  .icon {
    width: 1.5em;
    height: 1.5em;
  }
  span {
    padding: 0.3rem;
  }
  .active {
    color: #000;
    font-weight: bolder;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
