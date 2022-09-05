<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <music-nav-bar />
    <home-swiper :banners="banners">{{banners}}</home-swiper>
    <icon-list />
    <rec-list :recList="data.recList" />
    <rec-song :recSong="data.recSong"/>
  </div>
</template>

<script>
import MusicNavBar from "components/content/MusicNavBar/MusicNavBar.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import IconList from "./childComps/IconList.vue";
import RecList from "./childComps/RecList.vue";
import RecSong from "./childComps/RecSong.vue";
import {
  getSwiperImage,
  getRecList,
  getHome,
  recSongItem,
} from "network/home.js";

import { reactive } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    MusicNavBar,
    HomeSwiper,
    IconList,
    RecList,
    RecSong,
  },
  setup() {
    //1. 轮播图组件
    let banners = reactive([]);
    getSwiperImage(1).then((res) => {
      banners.push(...res.banners);
    });
    //2.推荐歌单
    let data = reactive({});
    getRecList().then((res) => {
      data.recList = res.result;
    });
    // 推荐歌曲
    getHome().then((res) => {
      // 一个长度为4的数组
      let list = res.data.blocks[1].creatives;
      data.recSong = new Array();
      for (let i = 0; i < list.length; i++) {
        let temp = [];
        for (let j = 0; j < list[i].resources.length; j++) {
          temp.push(new recSongItem(list[i].resources[j]));
        }
        data.recSong.push(temp);
      }
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
