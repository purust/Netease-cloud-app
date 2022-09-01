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
  width: 100%;
  height: 44px;
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
    font-size: 18px;
    input::placeholder {
      color: #b5b5b5;
    }
  }
}
</style>
