<template>
  <div class="IconList">
    <div class="IconItem" v-for="(item, index) in data.icondata" :key="index">
      <div class="cicle">
        <img :src="item.iconUrl" alt="" />
      </div>

      <div class="IconText">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import { getIconList } from "network/home.js";
import { reactive } from "vue";
export default {
  name: "IconList",
  setup() {
    let data = reactive({});
    getIconList().then((res) => {
      data.icondata = res.data;
    });
    return {
      data,
    };
  },
};
</script>
<style lang="less" scoped>
.IconList {
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  .IconItem {
    flex-shrink: 0;
    padding-right: 35px;
    text-align: center;
    .cicle {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      text-align: center;
      background-color: rgba(#ec4141, 0.2);
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        transform: translateY(-60px);
        filter: drop-shadow(var(--color-tint) 0 60px);
      }
    }

    .IconText {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
