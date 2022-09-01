<template>
  <div class="me">
    <music-nav-bar />
    <div class="info">
      <img src="@/assets/img/user.png" alt="" />
      <div class="nickname">昵称</div>
      <div class="infos">
        <span>8 关注 </span><span> 2 粉丝 </span><span> Lv.6</span>
      </div>
    </div>
    <div class="iconlist">
      <div class="item">
        <i class="iconfont icon-bofang1"></i>
        <div>最近播放</div>
      </div>
      <div class="item">
        <i class="iconfont icon-xiazai-wenjianxiazai-12"></i>
        <div>本地/下载</div>
      </div>
      <div class="item">
        <i class="iconfont icon-yunpan"></i>
        <div>云盘</div>
      </div>
      <div class="item">
        <i class="iconfont icon-gaiicon-"></i>
        <div>已购</div>
      </div>
      <div class="item">
        <i class="iconfont icon-wodehaoyou"></i>
        <div>我的好友</div>
      </div>
      <div class="item">
        <i class="iconfont icon-shoucang"></i>
        <div>收藏</div>
      </div>
      <div class="item">
        <i class="iconfont icon-diantai"></i>
        <div>电台</div>
      </div>
      <div class="item">
        <i class="iconfont icon-xihuan"></i>
        <div>我喜欢</div>
      </div>
    </div>
  </div>
</template>
<script>
import MusicNavBar from "components/content/MusicNavBar/MusicNavBar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Me",
  components: {
    MusicNavBar,
  },
};
</script>
<style lang="less" scoped>
.me {
  padding: 0 10px;
}
.info {
  position: relative;
  width: 100%;
  height: 100px;
  margin: 40px auto 10px;
  padding-top: 45px;
  border-radius: 10px;
  // border: 1px solid #000;
  text-align: center;
  background-color: #f7f7f7;
  img {
    position: absolute;
    top: -32px;
    left: calc(50% - 32px);
    width: 64px;
    height: auto;
    border-radius: 50%;
  }
  .nickname {
    height: 20px;
    color: #000;
    margin: 0 auto 5px;
  }
}
.iconlist {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  .item {
    // flex-basis: 25%;
    // width: 25%;
    margin-bottom: 20px;
    flex: 1 0 25%;
    text-align: center;
    div {
      margin-top: 5px;
    }
    .iconfont {
      font-size: 26px;
      color: #ec4141;
    }
  }
}
</style>
