<template>
  <div class="list-info">
    <img class="bg" :src="playlist.imgUrl" />
    <list-nav-bar class="nav-bar" />
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
import ListNavBar from "./ListNavBar.vue";
export default {
  name: "ListInfo",
  components: {
    ListNavBar,
  },
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
  height: 270px;
  color: #ffffe0;

  .bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 300px;
    filter: blur(35px);
  }
  // .nav-bar {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  // }

  .info-top {
    position: relative;
    height: 150px;
    margin-top: 15px;
    .image {
      float: left;
      img {
        width: 125px;
        height: 125px;
        margin-left: 10px;
        border-radius: 8px;
      }
    }
    .count {
      position: absolute;
      left: 80px;
      top: 5px;

      width: 55px;
      height: 18px;
      line-height: 18px;
      border-radius: 10px;
      font-size: 5px;
      text-align: center;
      background-color: rgba(181, 181, 181, 0.4);
      color: #fff;
      .iconfont {
        font-size: 6px;
      }
    }
    .info {
      float: right;
      width: 55%;
      margin-right: 15px;
      .name {
        margin-top: 2px;
        font-size: 20px;
      }
      .author {
        margin-top: 12px;
        margin-bottom: 12px;
        color: #cdcdb4;
        img {
          width: 25px;
          height: 25px;
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

        font-size: 12px;
        color: #cdcdb4;
      }
    }
  }
  .info-bottom {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-around;
    font-size: 13px;
    .iconfont {
      font-size: 20px;
    }
    .item {
      text-align: center;
      div {
        margin-top: 3px;
      }
    }
  }
}
</style>
