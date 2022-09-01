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
        class="play-content"
        v-show="!isShowLyric"
        @click="isShowLyric = !isShowLyric"
      >
        <img
          class="needle"
          :class="{ active: !isPaused }"
          src="~@/assets/img/needle-ab.png"
          alt=""
        />
        <img class="circle" src="~@/assets/img/black-circle.png" alt="" />
        <img class="musicImg" :src="musicDetail.al.picUrl" alt="" />
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
              currentTime * 1000 > item.time &&
              currentTime * 1000 <= item.nextTime,
          }"
          v-for="(item, index) in this.$store.getters.lyricList"
          :key="index"
        >
          {{ item.lyric }}
        </p>
      </div>

      <div class="progress"></div>
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
export default {
  name: "PlayMusic",
  components: {},
  props: ["musicDetail", "isPaused", "play"],
  emits: ["updateShowMusic", "updateShowList"],
  computed: {
    ...mapGetters["lyricList"],
    ...mapState(["playlist", "playCurrentIndex", "currentTime"]),
  },
  watch: {
    currentTime() {
      // 监听，更改高度
      let p = document.querySelector("p.active");
      if (p) {
        this.$refs.lyric.scrollTop = p.offsetTop - 220;
        // console.log("当前歌词的p的值", p.offsetTop);
        // console.log("列表的值", this.$refs.lyric.scrollTop);
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
      console.log("刷新歌词位置");
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
    // 是否绑定p的style

    return {
      isShowLyric,
    };
  },
};
</script>
<style lang="less" scoped>
.play-music {
  width: 100%;

  background-color: #ffffe0;
  .bgImg {
    img {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: auto 100%;
      background-position: center;
      filter: blur(15px);
      filter: contrast(6%);
      // -webkit-filter: blur(15px);
      // 图片周围泛白，放大图像
      transform: scale(1.2);
    }
  }
  .whole {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    color: #ffffe0;
    .play-top {
      width: 100%;
      height: 44px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .back {
        margin-left: 10px;
      }
      .share {
        margin-right: 15px;
      }
      .title {
        .name {
          width: 240px;
          overflow: hidden;
        }
      }
      .iconfont {
        font-size: 25px;
      }
    }
    .play-content {
      height: 50%;
      text-align: center;
      // white-space: nowrap;

      .needle {
        // 防止被下面的musicImg挡着
        position: relative;
        z-index: 10;

        width: 110px;
        height: auto;
        margin-left: 55px;
        transform-origin: 10px 10px;
        transform: rotate(-20deg);
        transition: all 1s;
        position: relative;
        z-index: 10;
      }
      .needle.active {
        position: relative;
        z-index: 10;

        transform-origin: 10px 10px;
        transform: rotate(10deg);
        transition: all 1s;
      }
      .circle {
        margin-top: -60px;
        width: 300px;
        height: auto;
      }
      .musicImg {
        position: absolute;
        top: 229px;
        left: 86px;
        width: 200px;
        height: auto;
        border-radius: 50%;
        // margin-top: -100px;
      }
      .iconlist {
        width: 100%;
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
        .iconfont {
          font-size: 30px;
        }
      }
    }
    .lyric {
      position: relative;
      height: 440px;
      margin-top: 50px;
      text-align: center;
      overflow: scroll;
      padding-top: 220px;
      padding-bottom: 220px;
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
      height: 55px;
      line-height: 55px;
      display: flex;
      justify-content: space-around;
      .iconfont {
        font-size: 30px;
      }
      .play {
        font-size: 45px;
      }
    }
  }
}
</style>
