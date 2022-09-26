<template>
  <div class="box">
    <div class="nav-bar">
      <div
        class="item"
        :class="{ active: '/home' == $route.path }"
        @click="$router.push('/home')"
      >
        <div>
          <i class="iconfont icon-faxian"></i>
        </div>
        <span>发现</span>
      </div>
      <div
        class="item"
        :class="{ active: '/me' == $route.path }"
        @click="$router.push({ path: '/me' })"
      >
        <div><i class="iconfont icon-yinle"></i></div>
        <span>我的</span>
      </div>
      <div class="item">
        <div><i class="iconfont icon-guanzhu"></i></div>
        <span>关注</span>
      </div>
      <div class="item">
        <div>
          <i class="iconfont icon-shipin"></i>
        </div>
        <span>视频</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicNavBar",
  setup() {},
};
</script>
<style lang="less" scoped>
.box {
  height: 1rem;
}
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: #676b6f;
  .item {
    .iconfont {
      font-size: 0.48rem;
    }
    span {
      font-size: 0.2rem;
    }
  }
  .active {
    color: var(--color-high-text);
  }
}
</style>
