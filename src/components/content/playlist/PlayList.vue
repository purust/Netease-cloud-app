<template>
  <div>
    <div class="mask" ref="mask" @click="this.$emit('updateShowList')"></div>
    <div class="info">
      <div class="top">
        <span class="text">当前播放</span>
        <span class="length">({{ playlist.length }})</span>
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) of playlist" :key="index">
          <div
            class="left"
            :class="{ red: index === playCurrentIndex }"
            @click="playmusic(index)"
          >
            <span class="name">{{ item.name }}</span
            >-
            <span class="singer">{{ item.ar[0].name }}</span>
          </div>
          <div class="right"><i class="iconfont icon-guanbi"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "PlayList",
  props: ["playlist", "playCurrentIndex", "isShowList", "play"],
  emits: ["updateShowList"],
  computed: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setPlayIndex"]),
    // 点击，播放音乐
    playmusic(index) {
      this.setPlayIndex(index);
      this.play();
    },
  },
  updated() {
    if (this.isShowList) {
      this.$nextTick(() => {
        // 显示歌单列表时，body设置为隐藏，不能滚动滚动条
        const bodyStyle = document.body.style;
        bodyStyle.overflow = "hidden";
      });
    } else {
      // 隐藏歌单列表时，body设置为自动
      const bodyStyle = document.body.style;
      bodyStyle.overflow = "auto";
    }
    // this.$refs.mask.addEventListener("wheel", (e) => {
    //   e.preventDefault();
    // });
    // // 禁止mask的滚动事件
    // this.$refs.mask.addEventListener("touchstart", (e) => {
    //   e.preventDefault();
    // });
  },
};
</script>
<style lang="less" scoped>
.mask {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 990;
  background-color: rgba(207, 207, 207, 0.6);
}
.info {
  position: fixed;
  bottom: 10px;
  left: 0;
  z-index: 999;

  width: calc(100% - 20px);
  height: 460px;
  margin: 10px 10px;
  padding: 20px 20px 0;
  border-radius: 15px;
  overflow: scroll;
  background-color: #fff;

  .top {
    // margin-top: 10px;
    .text {
      color: #000;
      font-size: 17px;
      font-weight: 600;
    }
  }
  .list {
    .item {
      display: flex;
      justify-content: space-between;
      .left {
        width: calc(100% - 30px);
        height: 35px;
        line-height: 35px;
        white-space: nowrap; /*文本段落不换行*/
        overflow: hidden; /*超出范围的隐藏*/
        text-overflow: ellipsis; /*对文本溢出进行省略号处理*/
        .name {
          color: #000;
        }
        .singer {
          font-size: 13px;
        }
      }
      .red {
        color: red;
        .name {
          color: red;
        }
      }
      .right {
        .iconfont {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
