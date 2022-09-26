<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <home-nav-bar/>
    <home-swiper :banners="data.banners">{{banners}}</home-swiper>
    <icon-list :iconList="data.iconList"/>
    <rec-list :recList="data.recList" />
    <rec-song :recSong="data.recSong"/>
  </div>
</template>

<script>
import HomeNavBar from "./childComps/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import IconList from "./childComps/IconList.vue";
import RecList from "./childComps/RecList.vue";
import RecSong from "./childComps/RecSong.vue";
import {
  getSwiperImage,
  getRecList,
  getIconList,
  getHome,
  recSongItem,
} from "network/home.js";
import { reactive } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    IconList,
    RecList,
    RecSong,
  },
  setup() {
    let data = reactive({});
    //1. 轮播图的数据
    getSwiperImage(1).then((res) => {
      data.banners = res.banners;
    });
    // 2.图标列表的数据
    getIconList().then((res) => {
      data.iconList = res.data;
    });
    //3.推荐歌单的数据
    getRecList().then((res) => {
      data.recList = res.result;
    });
    // 4.推荐歌曲的数据
    getHome().then((res) => {
      let list = res.data.blocks[2].creatives;
      data.recSong = new Array();
      // 对取到的数据，使用class格式化，确保传入组件的数据只有一层结构
      for (let i = 0; i < list.length; i++) {
        let temp = [];
        for (let j = 0; j < list[i].resources.length; j++) {
          temp.push(new recSongItem(list[i].resources[j]));
        }
        data.recSong.push(temp);
      }
    });
    return {
      data,
    };
  },
};
</script>
<style type="text/css">
.home {
  width: 100%;
  padding: 0.1rem 0.2rem;
}
</style>
