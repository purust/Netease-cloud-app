<template>
  <div class="list-info">
    <img class="bg" :src="playlist.imgUrl" />
    <div class="info-top">
      <div class="image">
        <img :src="playlist.imgUrl" alt="" />
      </div>
      <div class="count">
        <i class="iconfont icon-24gl-play"></i>
        {{ numberFormat(playlist.playCount) }}
      </div>
      <div class="info">
        <div class="name">{{ playlist.name }}</div>
        <div class="author">
          <img :src="playlist.authorimg" alt="" />
          {{ playlist.author }}<i class="iconfont icon-gengduo"></i>
        </div>
        <div class="des">{{ playlist.description }}</div>
      </div>
    </div>
    <div class="info-bottom">
      <div class="item">
        <i class="iconfont icon-liuyan1"></i>
        <div>{{ playlist.commentCount }}</div>
      </div>
      <div class="item">
        <i class="iconfont icon-fenxiang"></i>
        <div>{{ playlist.shareCount }}</div>
      </div>
      <div class="item">
        <i class="iconfont icon-xiazai-wenjianxiazai-07"></i>
        <div>下载</div>
      </div>
      <div class="item">
        <i class="iconfont icon--duoxuan"></i>
        <div>多选</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListInfo",
  components: {},
  props: {
    playlist: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    // 格式化歌单播放量
    function numberFormat(value) {
      let k = 10000,
        units = ["万", "亿"];
      let i = Math.floor(Math.log(value) / Math.log(k));
      let format_value = Math.floor(value / Math.pow(k, i));
      return `${format_value}${units[i - 1]}`;
    }
    return {
      numberFormat,
    };
  },
};
</script>
<style lang="less" scoped>
.list-info {
  height: 3.5rem;
  color: #ffffe0;
  overflow: auto;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 4rem;
    // 变得模糊和更暗
    filter: blur(0.6rem) brightness(40%);
  }
  .info-top {
    position: relative;
    height: 2.38rem;
    margin-top: 0.28rem;

    .image {
      float: left;
      img {
        width: 2.2rem;
        height: 2.2rem;
        margin-left: 0.18rem;
        border-radius: 0.16rem;
      }
    }
    .count {
      position: absolute;
      left: 1rem;
      top: 0.16rem;

      width: 1.2rem;
      height: 0.3rem;
      line-height: 0.3rem;
      border-radius: 0.18rem;
      font-size: 0.15rem;
      text-align: center;
      background-color: rgba(181, 181, 181, 0.4);
      color: #fff;
      .iconfont {
        font-size: 6px;
      }
    }
    .info {
      float: right;
      width: 60vw;
      .name {
        margin-top: 0.05rem;
        font-size: 0.32rem;
      }
      .author {
        margin-top: 0.18rem;
        margin-bottom: 0.18rem;
        color: #cdcdb4;
        img {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      .des {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //多行在这里修改数字即可
        overflow: hidden;
        /* autoprefixer: ignore next */
        -webkit-box-orient: vertical;

        font-size: 0.2rem;
        color: #cdcdb4;
      }
    }
  }
  .info-bottom {
    display: flex;
    justify-content: space-around;
    font-size: 0.22rem;
    .iconfont {
      font-size: 0.32rem;
    }
    .item {
      text-align: center;
      div {
        margin-top: 0.05rem;
      }
    }
  }
}
</style>
