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
      <div
        :class="isShowHot ? 'hint-more' : ' hint-fold'"
        @click="isShowHot = !isShowHot"
      >
        {{ words }}
      </div>
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
  // width: 100%;
  height: 44px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #cfcfcf;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
    color: #000;
    font-size: 17px;
    font-weight: 800;
  }
  .play {
    height: 25px;
    line-height: 25px;
    padding-left: 10px;
    padding-right: 10px;
    border: 0.5px solid #b5b5b5;
    border-radius: 20px;
    color: #000;
    .title {
      margin-left: 5px;
    }
  }
}
.default {
  height: 150px;
  overflow-y: hidden;
}
.detail {
  overflow: visible;
}
.hotlist {
  margin-left: 10px;
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
    width: 50%;
    height: 30px;
    line-height: 30px;
    .index {
      display: inline-block;
      width: 12%;
      font-weight: 600;
    }
    img {
      width: 30px;
      height: auto;
      margin-left: 5px;
    }
  }
}
.hint-fold {
  position: absolute;
  top: 325px;
  left: 50%;
  margin-left: -45px;
}
.hint-more {
  position: absolute;
  top: 465px;
  left: 50%;
  margin-left: -30px;
}
</style>
