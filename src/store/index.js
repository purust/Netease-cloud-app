import { createStore } from "vuex";

export default createStore({
  state: {
    playlist: [{ al: {}, ar: [{ name: null }] }],
    playCurrentIndex: 0,
    lyric: "",
    currentTime: 0,
    totalTime: 0,
  },
  // 类似store的计算属性,
  getters: {
    // 对lyric操作，将字符串划分为数组对象
    lyricList(state) {
      let arr = state.lyric.split(/\n/).map((item) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));

        let mill;
        let lyric;
        // 毫秒有两位数或三位数 需要判断 即时间格式有两种[xx:xx:xx] 和[xx:xx:xxx]

        // 判断是否为三位数
        if (item.slice(10, 11) === "]") {
          mill = parseInt(item.slice(7, 10));
          lyric = item.slice(11, item.length);
        } else {
          mill = parseInt(item.slice(7, 9));
          lyric = item.slice(10, item.length);
        }

        return {
          min,
          sec,
          mill,
          lyric,
          item,
          time: mill + sec * 1000 + min * 1000 * 60,
        };
      });

      // 为arr添加preTime属性，即前一句歌词的时间
      arr.forEach((item, index) => {
        if (index === arr.length - 1) item.nextTime = arr[index].time;
        else {
          item.nextTime = arr[index + 1].time;
        }
      });
      return arr;
    },
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value;
    },
    setPlayIndex(state, value) {
      let index = value;
      // 当第一首歌向后时，索引值会变成负数，退到最后一首
      if (index < 0) {
        index = state.playlist.length - 1;
      } // 当最后一首歌向前时，索引值会等于列表长度，前进到第一首
      if (index == state.playlist.length) {
        index = 0;
      }
      state.playCurrentIndex = index;
    },
    setLyric(state, value) {
      state.lyric = value;
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
    },
    setTotalTime(state, value) {
      state.totalTime = value;
    },
    addPlaySong(state, value) {
      state.playlist.splice(state.playCurrentIndex, 0, value);
    },
    removeSong(state, value) {
      state.playlist.splice(value, 1);
    },
  },
  actions: {},
  modules: {},
});
