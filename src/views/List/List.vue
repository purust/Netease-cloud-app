<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <list-info :playlist="state.playlist" />
    <list-deatil :listdetail="state.listdetail" />
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
  components: {
    ListInfo,
    ListDeatil,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    // 存放数据
    let state = reactive({ playlist: {}, listdetail: {} });
    onMounted(() => {
      let id = route.query.id;
      getList(id).then((res) => {
        // console.log("---", res);
        state.listdetail = new listdetail(res.playlist);
        state.playlist = new playlist(res.playlist);
        store.commit("setPlaylist", res.playlist.tracks);
        // console.log("store", store.state);
        // console.log("---", state.playlist);
      });
    });
    return {
      state,
    };
  },
};
</script>
<style lang="less" scoped></style>
