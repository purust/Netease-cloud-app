<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicList-list">
      <router-link
        :to="{ path: '/list', query: { id: item.id } }"
        class="item"
        v-for="(item, index) in musicList"
        :key="index"
      >
        <div class="item-img">
          <img :src="item.picUrl" alt="" />
        </div>
        <div class="item-count">
          <i class="iconfont icon-24gl-play"></i>
          {{ numberFormat(item.playCount) }}
        </div>
        <div class="item-name">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "MusicList",
  props: {
    musicList: {
      type: Array,
      default() {
        return [];
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
.musicList {
  margin-top: 20px;
  .musicList-top {
    height: 30px;
    margin-bottom: 5px;
    .title {
      color: #000;
      float: left;
      font-size: 18px;
      font-weight: 700;
    }
    .more {
      float: right;
      width: 65px;
      height: 25px;

      border: 1px solid #b5b5b5;
      border-radius: 12px;

      font-size: 13px;
      line-height: 25px;
      text-align: center;
    }
  }
  .musicList-list {
    display: flex;
    overflow-x: auto;
    .item {
      position: relative;
      padding-right: 10px;
      flex-shrink: 0;
      font-size: 12px;
      img {
        border-radius: 10px;
        width: 110px;
        height: 110px;
      }
      .item-name {
        width: 110px;
      }
      .item-count {
        position: absolute;
        right: 10px;
        top: 5px;

        width: 55px;
        height: 18px;
        line-height: 18px;
        border-radius: 5px;

        font-size: 6px;
        text-align: center;
        background-color: rgba(181, 181, 181, 0.4);
        color: #fff;
        .iconfont {
          font-size: 6px;
        }
      }
    }
  }
}
</style>
