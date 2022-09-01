<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <music-nav-bar />
    <home-swiper :banners="banners">{{banners}}</home-swiper>
    <icon-list />
    <music-list :musicList="data.musicList" />
  </div>
</template>

<script>
import MusicNavBar from "components/content/MusicNavBar/MusicNavBar.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import IconList from "./childComps/IconList.vue";
import MusicList from "./childComps/MusicList.vue";
// @ is an alias to /src

import { getSwiperImage, getMusicList } from "network/home.js";

import { reactive } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    MusicNavBar,
    HomeSwiper,
    IconList,
    MusicList,
  },
  // eslint-disable-next-line prettier/prettier
  setup () {
    //1. 轮播图组件
    let banners = reactive([]);
    getSwiperImage(1).then((res) => {
      banners.push(...res.banners);
    });
    //2.推荐歌单组件
    let data = reactive({ musicList: [] });
    getMusicList().then((res) => {
      data.musicList = res.result;
    });
    return {
      banners,
      data,
    };
  },
};
</script>
<style type="text/css">
.home {
  width: 100%;
  padding: 5px 10px;
}
</style>
