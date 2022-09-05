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
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  .title {
    color: #000;
    float: left;
    font-size: 18px;
    font-weight: 700;
  }
  .more {
    float: right;
    width: 65px;
    height: 25px;
    border: 1px solid #b5b5b5;
    border-radius: 12px;
    font-size: 13px;
    line-height: 25px;
    text-align: center;
  }
}
</style>
