<template>
  <div class="music-progress">
    <a class="progress" ref="progress" @click="clickProgress">
      <span class="pro-played" ref="played"></span>
      <span class="pro-drag" ref="drag"></span>
    </a>
    <div class="show-time">
      <span class="current-time">{{ formatTime(currentTime) }}</span>
      <span class="total-time">{{ formatTime(totalTime) }}</span>
    </div>
  </div>
</template>
<script>
// import { play } from "common/const.js";
import { onMounted, ref, watch, inject, nextTick } from "vue";
import { useStore } from "vuex";
export default {
  name: "MusicProgress",
  props: ["currentTime", "totalTime"],
  setup(props) {
    let audio = inject("audio");
    /**
     * 格式化时间，将总时间转为分秒的格式，即mm:ss
     */
    function formatTime(time) {
      // 计算并补全
      let min = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      let sec = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${min}:${sec}`;
    }
    /**
     * 显示播放进度条
     */
    let progress = ref(null);
    let played = ref(null);
    let drag = ref(null);
    onMounted(() => {
      let tTime = audio.value.duration;
      // 监听
      watch(
        () => props.currentTime,
        (newVal) => {
          nextTick(() => {
            let pre = (newVal / tTime) * 100 + "%";
            //显示进度条
            played.value.style.width = pre;
            // 显示圆角
            let dragWidth = drag.value.offsetWidth;
            let progressWidth = progress.value.offsetWidth;
            drag.value.style.left =
              progressWidth * (newVal / tTime) - dragWidth / 2 + "px";
          });
        }
      );
    });

    /**
     * 点击进度条更新歌曲的时间
     */
    const store = useStore();
    let setCurrentTime = (x) => store.commit("setCurrentTime", x);
    function clickProgress(e) {
      let newTime = (e.offsetX / progress.value.offsetWidth) * props.totalTime;
      setCurrentTime(newTime);
      audio.value.currentTime = newTime;
    }
    return {
      formatTime,
      played,
      drag,
      progress,
      clickProgress,
    };
  },
};
</script>
<style lang="less" scoped>
.music-progress {
  width: 100vw;
  padding: 0 10vw;
  .progress {
    display: inline-block;
    width: 80vw;
    height: 0.08rem;
    background-color: #fff;
    position: relative;
    .pro-played {
      background-color: var(--color-tint);
      height: 100%;
      width: 0%;
      position: absolute;
    }
    .pro-drag {
      height: 0.2rem;
      width: 0.2rem;
      border-radius: 100%;
      background-color: #fff;
      top: -0.05rem;
      position: relative;
      margin-left: 0%;
      position: absolute;
      // display: none;
    }
  }
  .show-time {
    .current-time {
      float: left;
    }
    .total-time {
      float: right;
    }
  }
}
</style>
