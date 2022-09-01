<template>
  <div class="bg">
    <div class="list">
      <div class="top">
        <div class="info">单曲</div>
        <div class="play">
          <i class="iconfont icon-24gf-play"></i>
          <span class="title">播放</span>
        </div>
      </div>
      <div class="list-item" v-for="(item, index) in songlist" :key="index">
        <div class="des" @click="addSongToList(index)">
          <div class="name">{{ item.name }}</div>
          <div class="info">
            <span class="tag">标签</span>
            {{ item.ar[0].name }}-{{ item.al.name }}
          </div>
        </div>
        <div class="icon">
          <span class="play">
            <i class="iconfont icon-caozuo-bofang"></i>
          </span>
          <span class="more">
            <i class="iconfont icon-gengduo-shuxiang"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "SongList",
  props: ["songlist"],
  computed: {
    ...mapState(["playlist", "playCurrentIndex"]),
  },
  methods: {
    ...mapMutations(["setPlayIndex", "addPlaySong"]),
    addSongToList(index) {
      // console.log("点击成功");
      // 1.将当前歌曲push到vuex的歌曲列表中
      this.setPlayIndex(0);
      this.addPlaySong(this.songlist[index]);
      // console.log(this.playlist);
    },
  },
};
</script>
<style lang="less" scoped>
.bg {
  // 三个值：上 左右 下
  padding: 20px 20px 0;
  background-color: rgba(207, 207, 207, 0.2);
}
.list {
  border-radius: 10px;
  background-color: #fff;
  padding: 0 10px;
  .top {
    height: 50px;
    border-bottom: 0.5px solid #b5b5b5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      color: #000;
      font-size: 17px;
      font-weight: 800;
    }
    .play {
      height: 25px;
      line-height: 25px;
      padding-left: 10px;
      padding-right: 10px;
      border: 0.5px solid #b5b5b5;
      border-radius: 20px;
      color: #000;
      .title {
        margin-left: 5px;
      }
    }
  }

  .list-item {
    border-bottom: 0.5px solid #b5b5b5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    .des {
      float: left;
      text-align: left;

      .name {
        width: 260px; /*设置段落长度*/
        white-space: nowrap; /*文本段落不换行*/
        overflow: hidden; /*超出范围的隐藏*/
        text-overflow: ellipsis; /*对文本溢出进行省略号处理*/

        font-size: 15px;
        font-weight: 600;
        color: #000;
      }
      .info {
        width: 260px; /*设置段落长度*/
        white-space: nowrap; /*文本段落不换行*/
        overflow: hidden; /*超出范围的隐藏*/
        text-overflow: ellipsis; /*对文本溢出进行省略号处理*/
        margin-top: 5px;
        font-size: 10px;
        .tag {
          display: inline-block;
          // width: 26px;
          height: 15px;
          border: 1px solid red;
          border-radius: 3px;
          // text-align: center;
          font-size: 7px;
          color: red;
        }
      }
    }

    .icon {
      width: 15%;
      height: 55px;
      line-height: 55px;
      .iconfont {
        font-size: 25px;
      }
    }
  }
}
</style>
