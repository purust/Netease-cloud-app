<template>
  <div class="IconList">
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-icon_xinyong_xianxing_jijin-133"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon_xinyong_xianxing_jijin-133"></use>
        </svg> -->
      </div>
      <div class="IconText">每日推荐</div>
    </div>
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-luyinjishouyinjidiantai"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-luyinjishouyinjidiantai"></use>
        </svg> -->
      </div>
      <div class="IconText">私人FM</div>
    </div>
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-paihang"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg> -->
      </div>
      <div class="IconText">歌单</div>
    </div>
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-zhibo"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhibo"></use>
        </svg> -->
      </div>
      <div class="IconText">排行榜</div>
    </div>
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-zhibo"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhibo"></use>
        </svg> -->
      </div>
      <div class="IconText">排行榜</div>
    </div>
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-zhibo"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhibo"></use>
        </svg> -->
      </div>
      <div class="IconText">排行榜</div>
    </div>
    <div class="IconItem">
      <div class="IconImage">
        <i class="iconfont icon-zhibo"></i>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhibo"></use>
        </svg> -->
      </div>
      <div class="IconText">排行榜</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IconList",
  setup () { },
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
    // justify-content: center;
    text-align: center;
    .IconImage {
      width: 40px;
      height: 40px;
      margin: auto;

      background-color: red;
      color: #fff;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      .iconfont {
        font-size: 20px;
      }
    }
    .IconText {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
// .icon {
//   width: 1.8em;
//   height: 1.8em;
//   vertical-align: -0.15em;
//   fill: #fff;
//   overflow: hidden;
//   margin: auto;
// }
</style>
