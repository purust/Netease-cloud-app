<template>
  <div class="head">
    <nav-bar class="bar">
      <template v-slot:left>
        <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      </template>
      <template v-slot:center>
        <div class="center">
          <div class="name">歌单</div>
          <div class="search" @click="$router.push({ path: '/search' })">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <i class="iconfont icon-gengduo-shuxiang"></i>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "ListNavBar",
  components: {
    NavBar,
  },
};
</script>
<style lang="less" scoped>
.head {
  height: 44px;
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
.iconfont {
  font-size: 25px;
}
.center {
  .name {
    float: left;
    margin-left: 8px;
    font-size: 18px;
  }
  .search {
    float: right;
    margin-right: 10px;
  }
}
</style>
