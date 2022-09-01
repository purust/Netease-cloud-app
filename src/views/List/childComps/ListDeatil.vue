<template>
  <div class="list-detail">
    <div class="list-top">
      <div class="play">
        <i class="iconfont icon-24gl-playCircle"></i>
        <span class="title"> 播放全部</span>
        <span class="count">(共{{ listdetail.total }}首)</span>
      </div>
      <div class="subs">
        <i class="iconfont icon-jiahao1"></i>
        <span>收藏</span>
        <span>({{ listdetail.subsCount }})</span>
      </div>
    </div>
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in listdetail.tracks"
        :key="index"
      >
        <div class="left" @click="setPlayIndex(index)">
          <div class="number">{{ index + 1 }}</div>
          <div class="des">
            <div class="name">{{ item.name }}</div>
            <div class="info">
              <span class="tag">{{ listdetail.tags[0] }}</span>
              {{ item.ar[0].name }}-{{ item.al.name }}
            </div>
          </div>
        </div>
        <div class="right">
          <span class="play">
            <i class="iconfont icon-caozuo-bofang"></i>
          </span>
          <span class="more">
            <i class="iconfont icon-gengduo-shuxiang"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    listdetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapMutations(["setPlayIndex"]),
  },
};
</script>
<style lang="less" scoped>
.list-detail {
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  .list-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    text-align: center;
    .play {
      margin-left: 10px;
      .iconfont {
        font-size: 20px;
      }
      .title {
        margin-left: 5px;
        font-size: 17px;
        font-weight: 800;
        color: #000;
      }
      .count {
        font-size: 13px;
      }
    }
    .subs {
      width: 120px;
      height: 40px;
      margin-right: 6px;
      border-radius: 20px;

      line-height: 40px;
      font-size: 13px;
      color: #fff;
      background-color: #ee2c2c;
      span {
        margin-left: 3px;
      }
    }
  }
  .list {
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      .left {
        text-align: center;
        .number {
          float: left;
          width: 40px;
          height: 40px;
          line-height: 40px;
          margin: 0 auto;
        }
        .des {
          float: left;
          text-align: left;

          .name {
            width: 260px; /*设置段落长度*/
            white-space: nowrap; /*文本段落不换行*/
            overflow: hidden; /*超出范围的隐藏*/
            text-overflow: ellipsis; /*对文本溢出进行省略号处理*/

            font-size: 15px;
            font-weight: 600;
            color: #000;
          }
          .info {
            width: 260px; /*设置段落长度*/
            white-space: nowrap; /*文本段落不换行*/
            overflow: hidden; /*超出范围的隐藏*/
            text-overflow: ellipsis; /*对文本溢出进行省略号处理*/
            margin-top: 5px;
            font-size: 10px;
            .tag {
              display: inline-block;
              // width: 26px;
              height: 15px;
              border: 1px solid red;
              border-radius: 3px;
              // text-align: center;
              font-size: 7px;
              color: red;
            }
          }
        }
      }
      .right {
        height: 55px;
        line-height: 55px;
        .more {
          margin-left: 10pxd;
          margin-right: 10px;
        }
        .iconfont {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
