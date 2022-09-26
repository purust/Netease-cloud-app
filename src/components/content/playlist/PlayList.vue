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
            <span class="singer">{{ item.singer }}</span>
          </div>
          <div class="right" @click="removeSong(index)">
            <i class="iconfont icon-guanbi"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { nextTick, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "PlayList",
  props: ["playlist", "playCurrentIndex", "isShowList", "play"],
  emits: ["updateShowList"],
  updated() {
    // if (this.isShowList) {
    //   this.$nextTick(() => {
    //     // 显示歌单列表时，body设置为隐藏，不能滚动滚动条
    //     const bodyStyle = document.body.style;
    //     bodyStyle.overflow = "hidden";
    //   });
    // } else {
    //   // 隐藏歌单列表时，body设置为自动
    //   const bodyStyle = document.body.style;
    //   bodyStyle.overflow = "auto";
    // }
  },
  setup(props) {
    /**
     * 移除歌曲
     */
    const store = useStore();
    const removeSong = (index) => store.commit("removeSong", index);

    /**
     * 点击某一首音乐播放
     */
    const setPlayIndex = (index) => store.commit("setPlayIndex", index);
    function playmusic(index) {
      setPlayIndex(index);
      props.play();
    }

    // onMounted(async () => {
    //   await nextTick();
    //   if (props.isShowList) {
    //     // 显示歌单列表时，body设置为隐藏，不能滚动滚动条
    //     const bodyStyle = document.body.style;
    //     bodyStyle.overflow = "hidden";
    //   } else {
    //     // 隐藏歌单列表时，body设置为自动
    //     const bodyStyle = document.body.style;
    //     bodyStyle.overflow = "auto";
    //   }
    // });
    return {
      removeSong,
      playmusic,
    };
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
  bottom: 0.1rem;
  left: 0;
  z-index: 999;

  width: calc(100vw - 0.36rem);
  height: 460px;
  margin: 0.18rem 0.18rem;
  padding: 0.3rem 0.3rem 0;
  border-radius: 0.22rem;
  overflow: scroll;
  background-color: #fff;

  .top {
    .text {
      color: #000;
      font-size: 0.3rem;
      font-weight: 600;
    }
  }
  .list {
    margin-top: 0.2rem;
    .item {
      display: flex;
      justify-content: space-between;
      .left {
        width: calc(100vw - 1rem);
        height: 0.6rem;
        line-height: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .name {
          color: #000;
        }
        .singer {
          font-size: 0.2rem;
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
          font-size: 0.25rem;
        }
      }
    }
  }
}
</style>
