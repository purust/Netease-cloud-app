<template>
  <result-top-bar />
  <song-list :songlist="state.songs" />
</template>

<script>
import ResultTopBar from "./childComps/ResultTopBar.vue";
import SongList from "./childComps/SongList.vue";

import { getSearchSongs } from "network/search.js";
import { onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "SearchResult",
  components: {
    ResultTopBar,
    SongList,
  },
  setup() {
    let route = useRoute();
    let state = reactive({
      songs: [],
    });
    onBeforeMount(() => {
      getSearchSongs(route.query.keywords).then((res) => {
        state.songs = res.result.songs;
        // console.log("搜索的歌曲", state.songs);
      });
    });
    return {
      state,
    };
  },
};
</script>
<style lang="less" scoped></style>
