<template>
  <div class="rec-list">
    <SubareaTop :title="'发现好歌单'" />
    <div class="list" @scroll="listScroll">
      <router-link
        :to="{ path: '/list', query: { id: item.id } }"
        class="item"
        v-for="(item, index) in recList"
        :key="index"
      >
        <div class="item-img">
          <img :data-src="item.picUrl" alt="" ref="img" />
        </div>
        <div class="item-count">
          <i class="iconfont icon-24gl-play"></i>
          {{ numberFormat(item.playCount) }}
        </div>
        <div class="item-name">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import SubareaTop from "components/content/subareatop/SubareaTop.vue";
import { ref } from "@vue/reactivity";
import { imageLazyload, throffle } from "common/const.js";
import { onUpdated } from "@vue/runtime-core";
export default {
  name: "RecList",
  props: {
    recList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { SubareaTop },
  setup() {
    // 格式化歌单播放量
    function numberFormat(value) {
      let k = 10000,
        units = ["万", "亿"];
      let i = Math.floor(Math.log(value) / Math.log(k));
      let format_value = Math.floor(value / Math.pow(k, i));
      return `${format_value}${units[i - 1]}`;
    }
    let img = ref();

    onUpdated(() => {
      //在首次进入时加载图片
      imageLazyload(img.value, window.innerWidth);
    });
    // 监听列表滚动，懒加载图片
    function listScroll() {
      throffle(imageLazyload(img.value, window.innerWidth));
    }
    return {
      numberFormat,
      listScroll,
      img,
    };
  },
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  overflow-x: auto;
  .item {
    position: relative;
    padding-right: 0.18rem;
    flex-shrink: 0;
    font-size: 0.2rem;
    img {
      border-radius: 0.18rem;
      width: 2.2rem;
      height: 2.2rem;
    }
    .item-name {
      width: 2.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
    .item-count {
      position: absolute;
      right: 0.18rem;
      top: 0.09rem;

      width: 1.2rem;
      height: 0.3rem;
      line-height: 0.3rem;
      border-radius: 0.1rem;

      font-size: 0.2rem;
      text-align: center;
      background-color: rgba(181, 181, 181, 0.4);
      color: #fff;
      .iconfont {
        font-size: 0.2rem;
      }
    }
  }
}
</style>
