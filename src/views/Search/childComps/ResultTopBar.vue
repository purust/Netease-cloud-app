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
      state.keywordList = JSON.parse(localStorage.keywordList);
    });
    // 搜索
    function search() {
      //存储当前的关键字
      state.keywordList.push(state.keyword);
      localStorage.keywordList = JSON.stringify(state.keywordList);
      // 发出搜索,push路由
      router.push({
        path: "/searchresult",
        query: { keywords: state.keyword },
      });
    }
    return {
      state,
      search,
    };
  },
};
</script>
<style lang="less" scoped>
.search-top {
  width: 100vw;
  height: 0.8rem;
  display: flex;
  line-height: 0.8rem;
  .back {
    width: 10vw;
    margin-left: 0.2rem;
    .iconfont {
      font-size: 0.4rem;
    }
  }
  .text {
    width: 80vw;
    height: 0.7rem;
    border-bottom: 2px solid #b5b5b5;
    font-size: 0.38rem;
    input::placeholder {
      color: #b5b5b5;
    }
  }
}
</style>
