<template>
  <div class="IconList">
    <div class="IconItem" v-for="(item, index) in iconList" :key="index">
      <div class="cicle">
        <img :src="item.iconUrl" alt="" />
      </div>
      <div class="IconText">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IconList",
  props: {
    iconList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="less" scoped>
.IconList {
  display: flex;
  overflow-x: auto;
  margin-top: 0.1rem;
  .IconItem {
    flex-shrink: 0;
    padding-right: 0.6rem;
    text-align: center;
    .cicle {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      text-align: center;
      background-color: rgba(#ec4141, 0.2);
      img {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        color: #fff;
        transform: translateY(-0.8rem);
        filter: drop-shadow(var(--color-tint) 0 0.8rem);
      }
    }

    .IconText {
      margin-top: 0.2rem;
      font-size: 0.22rem;
    }
  }
}
</style>
