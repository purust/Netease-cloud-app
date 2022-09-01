<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="homeswiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item.pic" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default () {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.homeswiper {
  margin-top: 12px;
}
img {
  border-radius: 8px;
  width: 100%;
  height: auto;
}
</style>
