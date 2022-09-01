<template>
  <div class="search-top">
    <div class="back" @click="$router.back()">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="text">
      <input
        type="text"
        :placeholder="state.placeholder"
        v-model="state.keyword"
        @keypress.enter="search()"
      />
    </div>
  </div>
  <div class="history">
    <div class="top">
      <div class="title">历史</div>
      <div class="delete">
        <i class="iconfont icon-shanchu" @click="removeList()"></i>
      </div>
    </div>

    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in state.keywordList"
        :key="index"
        @click="historySearch(item, index)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getDefaultKeyWord } from "network/search.js";
import { onBeforeMount, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TopBar",
  setup() {
    let router = useRouter();
    let state = reactive({
      placeholder: "",
      keyword: "",
      keywordList: [],
    });
    onMounted(() => {
      // 获取默认搜索关键字
      getDefaultKeyWord().then((res) => {
        state.placeholder = res.data.realkeyword;
        // state.keyword = state.placeholder;
      });
    });

    onBeforeMount(() => {
      // 解析数据
      if (localStorage.keywordList) {
        state.keywordList = JSON.parse(localStorage.keywordList);
      }
    });
    // 搜索
    function search() {
      //1.存储当前的关键字，将列表去重
      state.keywordList.push(state.keyword);
      localStorage.keywordList = JSON.stringify(
        Array.from(new Set(state.keywordList))
      );
      // 2.发出搜索,push路由
      router.push({
        path: "/searchresult",
        query: { keywords: state.keyword },
      });
    }
    // 历史搜索
    function historySearch(item, index) {
      // 1.不是点击第一个历史记录时，需要将当前关键字放在最前面，
      if (index != 0) {
        [state.keywordList[0], state.keywordList[index]] = [
          state.keywordList[index],
          state.keywordList[0],
        ];
        localStorage.keywordList = JSON.stringify(state.keywordList);
      }
      // 2.发出搜索
      router.push({
        path: "/searchresult",
        query: { keywords: item },
      });
    }

    // 清除所以的历史记录
    function removeList() {
      localStorage.clear();
    }
    return {
      state,
      search,
      historySearch,
      removeList,
    };
  },
};
</script>
<style lang="less" scoped>
.search-top {
  width: 100%;
  height: 44px;
  margin-top: 10px;
  display: flex;
  // justify-content: space-between;
  line-height: 44px;
  .back {
    width: 10%;
    margin-left: 10px;
    // margin-right: 10px;
    .iconfont {
      font-size: 20px;
    }
  }
  .text {
    width: 80%;
    height: 40px;
    border-bottom: 2px solid #b5b5b5;
    font-size: 17px;
    input::placeholder {
      color: #b5b5b5;
    }
  }
}
.history {
  margin-left: 10px;
  margin-bottom: 10px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #000;
      font-size: 17px;
      font-weight: 800;
    }
    .delete {
      margin-right: 10px;
      .iconfont {
        font-size: 20px;
      }
    }
  }

  .list {
    display: flex;
    overflow-x: auto;
    .list-item {
      flex-shrink: 0;
      height: 25px;
      border-radius: 10px;
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 10px;
      line-height: 25px;
      background-color: rgba(207, 207, 207, 0.4);
    }
  }
}
</style>
