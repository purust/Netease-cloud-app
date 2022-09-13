<template>
  <div>
    <div class="top">
      <div class="title">{{ title }}</div>
      <div class="more">查看更多</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubareaTop",
  props: ["title"],
};
</script>
<style lang="less" scoped>
.top {
  height: 0.4rem;
  margin-top: 0.2rem;
  margin-bottom: 0.07rem;
  .title {
    color: #000;
    float: left;
    font-size: 0.28rem;
    font-weight: 700;
  }
  .more {
    float: right;
    width: 1.2rem;
    height: 0.4rem;
    border: 1px solid #b5b5b5;
    border-radius: 0.2rem;
    font-size: 0.2rem;
    line-height: 0.4rem;
    text-align: center;
  }
}
</style>
