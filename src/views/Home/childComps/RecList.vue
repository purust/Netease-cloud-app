<template>
  <div class="rec-list">
    <SubareaTop :title="'发现好歌单'" />
    <div class="list">
      <router-link
        :to="{ path: '/list', query: { id: item.id } }"
        class="item"
        v-for="(item, index) in recList"
        :key="index"
      >
        <div class="item-img">
          <img :src="item.picUrl" alt="" />
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
    return {
      numberFormat,
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
    padding-right: 10px;
    flex-shrink: 0;
    font-size: 12px;
    img {
      border-radius: 10px;
      width: 110px;
      height: 110px;
    }
    .item-name {
      width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; //多行在这里修改数字即可
      overflow: hidden;
      /* autoprefixer: ignore next */
      -webkit-box-orient: vertical;
    }
    .item-count {
      position: absolute;
      right: 10px;
      top: 5px;

      width: 55px;
      height: 18px;
      line-height: 18px;
      border-radius: 5px;

      font-size: 6px;
      text-align: center;
      background-color: rgba(181, 181, 181, 0.4);
      color: #fff;
      .iconfont {
        font-size: 6px;
      }
    }
  }
}
</style>
