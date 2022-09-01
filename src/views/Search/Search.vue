<template>
  <div class="search">
    <search-top-bar />
    <hot-search />
  </div>
</template>

<script>
import SearchTopBar from "./childComps/SearchTopBar.vue";
import HotSearch from "./childComps/HotSearch.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  components: {
    SearchTopBar,
    HotSearch,
  },
};
</script>

<style lang="less" scoped></style>
