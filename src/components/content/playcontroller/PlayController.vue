<template>
  <div class="footer" v-show="playlist[playCurrentIndex].name">
    <div class="play-controller">
      <div class="left" @click="isShowMusic = !isShowMusic">
        <img :src="playlist[playCurrentIndex].imgUrl" alt="" />
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
import { computed, ref, onUpdated, provide } from "vue";
import { useStore } from "vuex";

import PlayMusic from "../playmusic/PlayMusic.vue";
import PlayList from "../playlist/PlayList.vue";

export default {
  components: { PlayMusic, PlayList },
  setup() {
    /**
     * 获取当前歌曲的歌词和总时长
     */
    const store = useStore();
    let playlist = computed(() => store.state.playlist);
    let playCurrentIndex = computed(() => store.state.playCurrentIndex);
    const setLyric = (x) => store.commit("setLyric", x);
    const setTotalTime = (x) => store.commit("setTotalTime", x);
    onUpdated(() => {
      if (playlist.value[playCurrentIndex.value].id) {
        getLyric(playlist.value[playCurrentIndex.value].id).then((res) => {
          setLyric(res.lrc.lyric);
          setTotalTime(audio.value.duration);
        });
        // TODO:检查音频是否能播放
        // let xhr = new XMLHttpRequest();
        // xhr.open(
        //   "get",
        //   `https://music.163.com/song/media/outer/url?id=${
        //     playlist.value[playCurrentIndex.value].id
        //   }.mp3`,
        //   true
        // );
        // xhr.send();
        // console.log("", xhr.getResponseHeader("Location"));
        // xhr.onreadystatechange = function () {
        //   console.log("", xhr);
        //   if (xhr.readyState === 4) {
        //     console.log("", xhr.status);
        //   }
        // };
      }
    });

    /**
     * 歌曲的播放与暂停
     */
    const audio = ref(null);
    let isPaused = ref(true);

    function play() {
      if (audio.value.paused) {
        audio.value.play();
        isPaused.value = false;
        updateTime();
      } else {
        audio.value.pause();
        isPaused.value = true;
      }
    }

    /**
     * 更新歌曲的时间
     */
    const setCurrentTime = (x) => store.commit("setCurrentTime", x);
    function updateTime() {
      setInterval(() => {
        setCurrentTime(audio.value.currentTime);
      }, 1000);
    }

    // 是否显示歌词页面
    let isShowMusic = ref(false);
    // 是否显示歌词列表
    let isShowList = ref(false);
    // 注入audio
    provide("audio", audio);
    return {
      audio,
      isPaused,
      isShowMusic,
      isShowList,
      playlist,
      playCurrentIndex,
      play,
      updateTime,
    };
  },
};
</script>
<style lang="less" scoped>
.footer {
  height: 0.85rem;
}
.play-controller {
  width: 100%;
  position: fixed;
  bottom: 1rem;
  left: 0;

  height: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  .left {
    width: 80vw;
    img {
      float: left;
      margin-left: 0.08rem;
      width: 0.68rem;
      height: 0.68rem;
      border-radius: 50%;
      vertical-align: middle;
    }
    .song {
      float: left;
      margin-left: 0.2rem;
      .name {
        width: 4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.08rem;
        margin-bottom: 0.02rem;
        color: #000;
        font-size: 0.25rem;
        font-weight: 700;
      }
      .tip {
        font-size: 0.16rem;
      }
    }
  }
  .right {
    width: 20vw;
    .more {
      margin-left: 0.18rem;
      margin-right: 0.18rem;
    }
    .iconfont {
      font-size: 0.45rem;
    }
  }
}
</style>
