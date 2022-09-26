<template>
  <div class="hot-search">
    <div class="top">
      <div class="name">热搜榜</div>
      <div class="play">
        <i class="iconfont icon-24gf-play"></i>
        <span class="title">播放</span>
      </div>
    </div>

    <div :class="isShowHot ? 'detail' : ' default'">
      <div class="hotlist">
        <div
          class="list-item"
          v-for="(item, index) in state.hotlist"
          :key="index"
        >
          <span class="index">{{ index + 1 }}</span>
          <span class="word">{{ item.searchWord }}</span>
          <span class="icon" v-show="item.iconUrl">
            <img :src="item.iconUrl" alt="" />
          </span>
        </div>
      </div>
    </div>
    <div
      :class="isShowHot ? 'hint-more' : ' hint-fold'"
      @click="isShowHot = !isShowHot"
    >
      {{ words }}
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { getHotSearch } from "network/search";
export default {
  name: "HotSearch",
  data() {
    return {};
  },
  computed: {
    words() {
      if (this.isShowHot === false) {
        return "展开更多热搜";
      } else {
        return "折叠热搜";
      }
    },
  },
  methods: {},
  setup() {
    let isShowHot = ref(false);
    let state = reactive({ hotlist: [] });
    onMounted(() => {
      getHotSearch().then((res) => {
        state.hotlist = res.data;
      });
    });

    return {
      state,
      isShowHot,
    };
  },
};
</script>
<style lang="less" scoped>
.top {
  height: 0.8rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-bottom: 1px solid #cfcfcf;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
    color: #000;
    font-size: 0.3rem;
    font-weight: 800;
  }
  .play {
    height: 0.4rem;
    line-height: 0.4rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    border: 0.5px solid #b5b5b5;
    border-radius: 0.2rem;
    color: #000;
    .title {
      margin-left: 0.2rem;
    }
  }
}
.default {
  height: calc(3.5vh * 5);
  overflow-y: hidden;
}
.detail {
  overflow: visible;
}
.hotlist {
  margin-left: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  div:nth-child(-n + 3) {
    .index {
      color: red;
    }
    .word {
      color: #000;
      font-weight: 600;
    }
  }
  .list-item {
    width: 48vw;
    height: 3.5vh;
    line-height: 3vh;
    .index {
      display: inline-block;
      width: 12vw;
      font-weight: 600;
    }
    img {
      width: 0.33rem;
      height: auto;
      margin-left: 0.08rem;
    }
  }
}
.hot-search {
  position: relative;
}
.hint-fold {
  position: absolute;
  top: 26.5vh;
  left: 50vw;
}
.hint-more {
  position: absolute;
  top: 44vh;
  left: 50vw;
}
</style>
