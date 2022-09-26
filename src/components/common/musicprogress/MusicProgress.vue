<template>
  <div class="music-progress">
    <span class="current-time">{{ formatTime(currentTime) }}</span>
    <a class="progress" ref="progress" @click="clickProgress">
      <span class="pro-played" ref="played"></span>
      <span class="pro-drag" ref="drag"></span>
    </a>
    <span class="total-time">{{ formatTime(totalTime) }}</span>
  </div>
</template>
<script>
import { onMounted, ref, watch, inject, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MusicProgress",
  props: ["currentTime", "totalTime"],
  setup(props) {
    // 公共的数据
    const store = useStore();
    const playIndex = computed(() => store.state.playCurrentIndex);
    const setPlayIndex = (x) => store.commit("setPlayIndex", x);
    const setCurrentTime = (x) => store.commit("setCurrentTime", x);
    // 注入的audio值，父组件注到孙组件
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
      // 监听播放时间
      watch(
        () => props.currentTime,
        (newVal) => {
          let tTime = props.totalTime;
          // 1.播放完毕，自动跳转
          if (newVal == tTime) {
            setPlayIndex(playIndex.value + 1);
            setCurrentTime(0);
          }
          // 2.正在播放中
          //2.1显示进度条
          let pre = (newVal / tTime) * 100 + "%";
          played.value.style.width = pre;
          // 2.2 圆角前进
          let dragWidth = drag.value.offsetWidth;
          let progressWidth = progress.value.offsetWidth;
          drag.value.style.left =
            (progressWidth - dragWidth) * (newVal / tTime) + "px";
        }
      );
    });

    /**
     * 点击进度条更新歌曲的时间
     */
    function clickProgress(e) {
      let newTime =
        (e.offsetX / progress.value.offsetWidth) * audio.value.duration;
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
  padding: 0 1vw;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  .current-time,
  .total-time {
    font-size: 0.2rem;
  }
  .progress {
    display: inline-block;
    width: 78vw;
    height: 0.08rem;
    margin: 0 0.1rem;
    background-color: #fff;
    position: relative;
    .pro-played {
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--color-tint);
      height: 100%;
      // width: 0px;
    }
    .pro-drag {
      position: absolute;
      top: 0;
      left: 0;
      height: 0.2rem;
      width: 0.2rem;
      border-radius: 100%;
      background-color: #fff;
      top: -0.05rem;
      margin-left: 0%;
    }
  }
}
</style>
