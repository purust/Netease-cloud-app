<template>
  <div class="footer">
    <div class="play-controller" v-show="playlist[playCurrentIndex].al.picUrl">
      <div class="left" @click="isShowMusic = !isShowMusic">
        <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
        <div class="song">
          <div class="name">{{ playlist[playCurrentIndex].name }}</div>
          <div class="tip">横滑可以切换上下首</div>
        </div>
      </div>
      <div class="right">
        <span class="play" @click="play()" v-show="isPaused">
          <i class="iconfont icon-24gl-playCircle play"></i>
        </span>
        <span class="pause" @click="play()" v-show="!isPaused">
          <i class="iconfont icon-24gl-pauseCircle"></i>
        </span>
        <span class="more" @click="isShowList = !isShowList">
          <i class="iconfont icon-24gf-playlist more"></i>
        </span>
      </div>
      <audio
        :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
        ref="audio"
      ></audio>
    </div>
    <play-music
      v-show="isShowMusic"
      :musicDetail="playlist[playCurrentIndex]"
      :isPaused="isPaused"
      :play="play"
      @updateShowMusic="isShowMusic = !isShowMusic"
      @updateShowList="isShowList = !isShowList"
    />
    <play-list
      v-show="isShowList"
      :playlist="playlist"
      :playCurrentIndex="playCurrentIndex"
      @updateShowList="isShowList = !isShowList"
      :play="play"
    />
  </div>
</template>
<script>
import { getLyric } from "network/list";
import { ref } from "vue";
import { mapState } from "vuex";
import PlayMusic from "../playmusic/PlayMusic.vue";
import PlayList from "../playlist/PlayList.vue";
export default {
  components: { PlayMusic, PlayList },
  computed: {
    ...mapState(["playlist", "playCurrentIndex", "lyric", "currentTime"]),
  },
  updated() {
    // 获取歌词
    if (this.playlist[this.playCurrentIndex].id) {
      getLyric(this.playlist[this.playCurrentIndex].id).then((res) => {
        this.$store.commit("setLyric", res.lrc.lyric);
        // console.log("歌词", res.lrc.lyric);
      });
    }
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.isPaused = false;
        this.UpdateTime();
      } else {
        this.$refs.audio.pause();
        this.isPaused = true;
        clearInterval(this.$store.state.id);
      }
      // console.log([this.$refs.audio]);
    },
    UpdateTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit("setCurrentTime", this.$refs.audio.currentTime);
      }, 1000);
    },
  },
  setup() {
    // 获取store值
    // const store = useStore();
    // 播放与暂停音乐
    const audio = ref(null);
    let isPaused = ref(true);

    // function play () {
    //   if (audio.value.paused) {
    //     audio.value.play();
    //     isPaused.value = false;
    //     updateTime();
    //   } else {
    //     audio.value.pause();
    //     isPaused.value = true;
    //     // clearInterval(intervalID);
    //   }
    // }

    // 更新播放时间
    // function updateTime () {
    //   // intervalID =

    //   setInterval(() => {
    //     store.commit("setCurrentTime", audio.value.currentTime);
    //     console.log("当前播放时间", audio.value.currentTime);
    //   }, 1000);
    // }

    // 是否显示歌词页面
    let isShowMusic = ref(false);
    // 是否显示歌词列表
    let isShowList = ref(false);
    return {
      audio,
      isPaused,
      // play,
      isShowMusic,
      isShowList,
      // updateTime,
    };
  },
};
</script>
<style lang="less" scoped>
.footer {
  height: 50px;
}
.play-controller {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;

  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  .left {
    img {
      float: left;
      margin-left: 5px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .song {
      float: right;
      margin-left: 10px;
      .name {
        width: 200px; /*设置段落长度*/
        white-space: nowrap; /*文本段落不换行*/
        overflow: hidden; /*超出范围的隐藏*/
        text-overflow: ellipsis; /*对文本溢出进行省略号处理*/
        margin-top: 3px;
        margin-bottom: 5px;
        color: #000;
        font-size: 15px;
        font-weight: 700;
      }
      .tip {
        font-size: 10px;
      }
    }
  }
  .right {
    .more {
      margin-left: 10px;
      margin-right: 10px;
    }
    .iconfont {
      font-size: 23px;
    }
  }
}
</style>
