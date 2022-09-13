<template>
  <div class="play-music">
    <div class="bgImg">
      <img :src="musicDetail.al.picUrl" alt="" />
    </div>
    <div class="whole">
      <div class="play-top">
        <div class="back" @click="this.$emit('updateShowMusic')">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="title">
          <div class="name">
            <div class="content">
              <p class="text">{{ musicDetail.name }}</p>
            </div>
          </div>
          <!--   -->
          <div class="singer">{{ musicDetail.ar[0].name }}</div>
        </div>
        <div class="share">
          <i class="iconfont icon-fenxiang"></i>
        </div>
      </div>
      <div
        class="image"
        v-show="!isShowLyric"
        @click="isShowLyric = !isShowLyric"
      >
        <div class="playneedle">
          <img
            class="needle"
            :class="{ active: !isPaused }"
            src="~@/assets/img/needle-ab.png"
            alt=""
          />
        </div>
        <div class="wholecircle">
          <img class="circle" src="~@/assets/img/black-circle.png" alt="" />
          <img class="musicImg" :src="musicDetail.al.picUrl" alt="" />
        </div>
        <div class="iconlist">
          <i class="iconfont icon-xihuan"></i>
          <i class="iconfont icon-46"></i>
          <i class="iconfont icon-changpian"></i>
          <i class="iconfont icon-pinglun"></i>
          <i class="iconfont icon-gengduo-shuxiang"></i>
        </div>
      </div>
      <div
        class="lyric"
        v-show="isShowLyric"
        @click="isShowLyric = !isShowLyric"
        ref="lyric"
      >
        <p
          :class="{
            active:
              currentTime * 1000 >= item.time &&
              currentTime * 1000 <= item.nextTime,
          }"
          v-for="(item, index) in this.$store.getters.lyricList"
          :key="index"
        >
          {{ item.lyric }}
        </p>
      </div>

      <music-progress :currentTime="currentTime" :totalTime="totalTime" />
      <div class="bottom">
        <i class="iconfont icon-caozuo-xunhuan1"></i>
        <i class="iconfont icon-xiangzuo" @click="goplay(-1)"></i>
        <i
          class="iconfont icon-24gl-playCircle play"
          v-show="isPaused"
          @click="play"
        ></i>
        <i
          class="iconfont icon-24gl-pauseCircle play"
          v-show="!isPaused"
          @click="play"
        ></i>
        <i class="iconfont icon-xiangyou" @click="goplay(1)"></i>
        <i
          class="iconfont icon-24gf-playlist"
          @click="this.$emit('updateShowList')"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { mapGetters, mapState } from "vuex";
import MusicProgress from "components/common/musicprogress/MusicProgress";
export default {
  name: "PlayMusic",
  components: { MusicProgress },
  props: ["musicDetail", "isPaused", "play"],
  emits: ["updateShowMusic", "updateShowList"],
  computed: {
    ...mapGetters["lyricList"],
    ...mapState(["playlist", "playCurrentIndex", "currentTime", "totalTime"]),
  },
  watch: {
    currentTime() {
      // 监听，更改高度
      let p = document.querySelector("p.active");
      let firstp = document.querySelector(".lyric>p").offsetTop;
      if (p) {
        this.$refs.lyric.scrollTop = p.offsetTop - firstp;
      }
    },
  },
  methods: {
    goplay(num) {
      let index = this.playCurrentIndex + num;
      // 当第一首歌向后时，索引值会变成负数，退到最后一首
      if (index < 0) {
        index = this.playlist.length - 1;
      }
      // 当最后一首歌向前时，索引值会等于列表长度，前进到第一首
      if (index == this.playlist.length) {
        index = 0;
      }

      this.$store.commit("setPlayIndex", index);
      // 切换歌曲后刷新歌词的位置，刷新选中的标签
      this.$refs.lyric.scrollTop = 0;
      this.isActive = false;
    },
  },
  mounted() {
    // console.log("图片地址", musicDetail.al.picUrl);
    // JS实现跑马灯效果
    // let [box, content, text] = [
    //   document.querySelector(".name"),
    //   document.querySelector(".content"),
    //   document.querySelector(".text"),
    // ];
    // let [textWidth, boxWidth] = [text.offsetWidth, box.offsetWidth];
    // console.log(box.offsetWidth, text.offsetWidth);
    // console.log(box.scrollLeft);
    // content.innerHTML += content.innerHTML;
    // document.querySelector(".text").classList.add("padding");
    // 更新
    // textWidth = document.querySelector(".text").offsetWidth;
    // box.scrollLeft++;
  },
  setup() {
    // 是否显示歌词
    let isShowLyric = ref(false);

    return {
      isShowLyric,
    };
  },
};
</script>
<style lang="less" scoped>
.play-music {
  width: 100vw;

  background-color: #ffffe0;
  .bgImg {
    img {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-size: auto 100%;
      background-position: center;
      filter: contrast(60%) blur(15px);
      transform: scale(1.2);
    }
  }
  .whole {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    color: #ffffe0;
    .play-top {
      width: 100vw;
      height: 0.7rem;
      margin-top: 0.18rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .back {
        margin-left: 0.18rem;
      }
      .share {
        margin-right: 0.18rem;
      }
      .title {
        flex: 1;
        text-align: center;
      }
      .iconfont {
        font-size: 0.5rem;
      }
    }
    .image {
      width: 100vw;
      height: 78vh;
      text-align: center;

      .needle {
        // 防止被下面的圆圈挡着
        z-index: 10;

        width: 1.4rem;
        height: auto;
        margin-left: 0.7rem;
        transform-origin: 0.18rem 0.18rem;
        transform: rotate(-20deg);
        transition: all 1s;
        position: relative;
        z-index: 10;
      }
      .needle.active {
        position: relative;
        z-index: 10;

        transform-origin: 0.18rem 0.18rem;
        transform: rotate(10deg);
        transition: all 1s;
      }
      .playneedle {
        height: 20vh;
      }
      .wholecircle {
        height: 55vh;
        position: relative;
        margin-top: -0.5rem;
        .circle {
          width: 5rem;
          height: auto;
        }
        .musicImg {
          position: absolute;
          top: calc(5rem / 2 - 3rem / 2);
          left: calc(50vw - 3rem / 2);
          width: 3rem;
          height: auto;
          border-radius: 50%;
        }
      }
      .iconlist {
        width: 100vw;
        margin-bottom: 20vh;
        display: flex;
        justify-content: space-around;
        .iconfont {
          font-size: 0.55rem;
        }
      }
    }
    .lyric {
      position: relative;
      height: 73vh;
      margin-top: 5vh;
      text-align: center;
      overflow: scroll;
      padding-top: 36.5vh;
      padding-bottom: 36.5vh;
      p {
        margin-bottom: 5px;
      }
      p.active {
        color: red;
      }
    }

    .bottom {
      position: fixed;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 10vh;
      line-height: 10vh;
      display: flex;
      justify-content: space-around;
      .iconfont {
        font-size: 0.55rem;
      }
      .play {
        font-size: 0.55rem;
      }
    }
  }
}
</style>
