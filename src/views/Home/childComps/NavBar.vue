<template>
  <div class="head">
    <div class="home-nav-bar">
      <div class="left">
        <i class="iconfont icon-liebiao2"></i>
      </div>
      <div class="center" @click="$router.push({ path: '/search' })">
        <span class="search"><i class="iconfont icon-sousuo"></i></span>
        <span>{{ state.keyword }}</span>
      </div>
      <div class="right">
        <i class="iconfont icon-tinggeshiqu"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getDefaultKeyWord } from "network/search.js";
import { onMounted, reactive } from "vue";
export default {
  name: "HomeNavBar",
  setup() {
    let state = reactive({
      keyword: "",
    });
    onMounted(() => {
      // 获取默认搜索关键字
      getDefaultKeyWord().then((res) => {
        state.keyword = res.data.realkeyword;
      });
    });
    return {
      state,
    };
  },
};
</script>
<style lang="less" scoped>
.head {
  height: 0.7rem;
}
.home-nav-bar {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 0.8rem;
  padding: 0 0.2rem;
  background-color: #fff;
  z-index: 999;
  color: #676b6f;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  .iconfont {
    font-size: 0.45rem;
  }
  .left,
  .right {
    width: 0.6rem;
  }
  .center {
    width: 75vw;
    height: 0.58rem;
    line-height: 0.58rem;
    background-color: rgba(207, 207, 207, 0.2);
    border-radius: 0.35rem;
    .search {
      vertical-align: middle;
    }
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
