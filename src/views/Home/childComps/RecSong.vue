<template>
  <div class="rec-song">
    <subarea-top :title="'发现好歌曲'" />
  </div>
  <div class="song-list">
    <div class="three-item" v-for="(threeitem, index) in recSong" :key="index">
      <div class="item" v-for="(item, index) in threeitem" :key="index">
        <div class="left">
          <img :src="item.imageUrl" alt="" />
        </div>
        <div class="right">
          <div class="des">
            <div class="title">
              <span class="song">{{ item.title }}</span>
              -
              <span class="singer">{{ item.singer }}</span>
            </div>
            <div class="subtitle" v-show="item.subtitle">
              <span>{{ item.subtitle }}</span>
            </div>
          </div>
          <div class="play">
            <i class="iconfont icon-caozuo-bofang"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SubareaTop from "components/content/subareatop/SubareaTop.vue";
export default {
  components: { SubareaTop },
  name: "RecSong",
  props: {
    recSong: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="less" scoped>
.song-list {
  display: flex;
  overflow-x: auto;
  .three-item {
    width: 95%;
    flex-shrink: 0;
    padding-right: 18px;
  }
}
.item {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 16%;
    img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }
  }
  .right {
    width: 80%;
    height: 60px;
    // text-align: center;
    // line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .des {
      .title {
        width: 210px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .song {
          color: #000;
          font-size: 16px;
        }
      }
      .subtitle {
        width: fit-content;
        padding: 2px 3px;
        margin-top: 5px;
        border-radius: 5px;
        font-size: 6px;
        color: #ffa54f;
        background-color: rgba(#ffa54f, 0.1);
      }
    }
    .play {
      .iconfont {
        font-size: 20px;
      }
    }
  }
}
// 前两个有底部框线条
.item:nth-child(-n + 2) {
  .right {
    border-bottom: 1px solid #b5b5b5;
  }
}
</style>
