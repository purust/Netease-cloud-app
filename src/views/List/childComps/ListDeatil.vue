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
              {{ item.singer }}-{{ item.name }}
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
  border-radius: 0.32rem 0.32rem 0 0;
  .list-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.9rem;
    text-align: center;
    .play {
      margin-left: 0.18rem;
      .iconfont {
        font-size: 0.32rem;
      }
      .title {
        margin-left: 0.1rem;
        font-size: 0.28rem;
        font-weight: 800;
        color: #000;
      }
      .count {
        font-size: 0.22rem;
      }
    }
    .subs {
      width: 1.9rem;
      height: 0.6rem;
      margin-right: 0.08rem;
      border-radius: 0.32rem;

      line-height: 0.6rem;
      font-size: 0.17rem;
      color: #fff;
      background-color: #ee2c2c;
      span {
        margin-left: 0.02rem;
      }
    }
  }
  .list {
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.15rem;
      .left {
        text-align: center;
        .number {
          float: left;
          width: 0.82rem;
          height: 0.82rem;
          line-height: 0.82rem;
          margin: 0 auto;
        }
        .des {
          float: left;
          text-align: left;

          .name {
            width: 5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            font-size: 0.25rem;
            font-weight: 600;
            color: #000;
          }
          .info {
            width: 5.3rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 0.1rem;
            font-size: 0.18rem;
            .tag {
              display: inline-block;
              width: fit-content;
              height: fit-content;
              padding: 0.01rem 0.02rem;
              border: 1px solid red;
              border-radius: 0.05rem;
              text-align: center;
              font-size: 0.1rem;
              color: red;
            }
          }
        }
      }
      .right {
        height: 0.82rem;
        line-height: 0.82rem;
        .more {
          margin-left: 0.18rem;
          margin-right: 0.18rem;
        }
        .iconfont {
          font-size: 0.45rem;
        }
      }
    }
  }
}
</style>
