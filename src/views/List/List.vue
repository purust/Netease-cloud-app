<template>
  <div class="list">
    <div class="box">
      <div class="nav-bar">
        <div class="left">
          <i class="iconfont icon-fanhui" @click="$router.back()"></i>
        </div>
        <div class="center">
          <div class="name">歌单</div>
          <div class="search" @click="$router.push({ path: '/search' })">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
        <div class="right">
          <i class="iconfont icon-gengduo-shuxiang"></i>
        </div>
      </div>
    </div>
    <div class="whole">
      <list-info :playlist="state.playlist" />
      <list-deatil :listdetail="state.listdetail" />
    </div>
  </div>
</template>
<script>
import ListInfo from "./childComps/ListInfo.vue";
import ListDeatil from "./childComps/ListDeatil.vue";

import { getList } from "network/list.js";
import { playlist, listdetail } from "network/list.js";

import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  components: {
    ListInfo,
    ListDeatil,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    let state = reactive({ playlist: {}, listdetail: {} });
    onMounted(() => {
      let id = route.query.id;
      // 根据ID获取歌单数据
      getList(id).then((res) => {
        state.listdetail = new listdetail(res.playlist);
        state.playlist = new playlist(res.playlist);
        // 设置vuex播放列表，将当前歌单变为播放列表
        store.commit("setPlaylist", res.playlist.tracks);
      });
    });
    return {
      state,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 0.7rem;
}
.nav-bar {
  display: flex;
  line-height: 0.7rem;
  width: 100%;
  height: 0.7rem;
  text-align: center;
  color: #fff;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  .iconfont {
    font-size: 0.4rem;
  }
  .left,
  .right {
    width: 0.6rem;
  }
  .center {
    flex: 1;
    .name {
      float: left;
      margin-left: 0.18rem;
      font-size: 0.3rem;
    }
    .search {
      float: right;
      margin-right: 0.18rem;
    }
  }
}
.whole {
  height: calc(100vh - 0.7rem - 0.85rem);
  overflow: scroll;
}
</style>
