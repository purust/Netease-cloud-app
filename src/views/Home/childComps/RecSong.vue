<template>
  <div class="rec-song">
    <subarea-top :title="'发现好歌曲'" />
  </div>
  <div class="box">
    <div class="song-list">
      <div
        class="three-item"
        v-for="(threeitem, index) in recSong"
        :key="index"
        @touchend="touchEnd($event, index)"
        @touchstart="touchStart"
      >
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
  </div>
</template>
<script>
import SubareaTop from "components/content/subareatop/SubareaTop.vue";
import { onMounted, reactive } from "vue";
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
  setup() {
    let data = reactive({
      totalWidth: 95,
      currentIndex: 0,
      style: {},
      startX: 0,
      endX: 0,
    });
    /**
     * 触摸开始事件
     */
    function touchStart(e) {
      data.startX = e.touches[0].pageX;
    }
    /**
     * 触摸结束事件
     */
    function touchEnd(e, index) {
      data.endX = e.changedTouches[0].pageX;
      let moveX = data.endX - data.startX;
      if (index == 0 && moveX < 0) {
        scrollContent(-(index + 1) * data.totalWidth);
      } else if (index == 3 && moveX > 0) {
        scrollContent(-(index - 1) * data.totalWidth);
      } else if (0 < index && index < 3) {
        moveX < 0
          ? scrollContent(-(index + 1) * data.totalWidth)
          : scrollContent(-(index - 1) * data.totalWidth);
      }
    }
    /**
     *滚动到正确的位置
     */
    function scrollContent(currentPosition) {
      // 1.设置滚动动画
      data.style.transition = "transform " + 300 + "ms";
      // 2.设置滚动位置
      data.style.transform = `translate3d(${currentPosition}vw, 0, 0)`;
      data.style[
        "-webkit-transform"
      ] = `translate3d(${currentPosition}vw), 0, 0`;
      data.style["-ms-transform"] = `translate3d(${currentPosition}vw), 0, 0`;
    }

    onMounted(() => {
      // 获取list的样式
      let songlist = document.querySelector(".song-list");
      if (songlist) {
        data.style = songlist.style;
      }
    });
    return {
      data,
      touchStart,
      touchEnd,
      scrollContent,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  position: relative;
  overflow: hidden;
}
.song-list {
  display: flex;
  .three-item {
    width: 95vw;
    flex-shrink: 0;
    padding-right: 0.3rem;
  }
}
.item {
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 16%;
    img {
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 0.2rem;
    }
  }
  .right {
    width: 80%;
    height: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .des {
      .title {
        width: 4.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .song {
          color: #000;
          font-size: 0.3rem;
        }
      }
      .subtitle {
        width: fit-content;
        padding: 0.05rem 0.08rem;
        margin-top: 0.08rem;
        border-radius: 0.08rem;
        font-size: 0.2rem;
        color: #ffa54f;
        background-color: rgba(#ffa54f, 0.1);
      }
    }
    .play {
      .iconfont {
        font-size: 0.48rem;
      }
    }
  }
}
// 前两个div有底部框线条
.item:nth-child(-n + 2) {
  .right {
    border-bottom: 0.02rem solid #b5b5b5;
  }
}
</style>
