<template>
  <div class="vercode">
    <div class="top">
      <div class="cancel" @click="$router.back()">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <div class="title">手机号登录</div>
    </div>
    <div class="tips">
      <div>请输入验证码</div>
      <div>已发送至{{ $route.query.phone }}</div>
    </div>
    <validate-box @completeInput="completeInput" />
  </div>
</template>
<script>
import ValidateBox from "components/common/validatebox/ValidateBox.vue";
import { verifyAuthCode } from "network/login.js";
export default {
  components: { ValidateBox },
  name: "VerCode",
  methods: {
    // 输入后进行验证
    completeInput(value) {
      let code = value.join("") * 1;
      verifyAuthCode(this.$route.query.phone, code).then((res) => {
        if (res.data.code === 200) {
          this.$router.push("/me");
        }
      });
    },
  },
  setup() {},
};
</script>
<style lang="less" scoped>
.vercode {
  padding: 0 10px;
}
.top {
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;

  color: #000;
  font-size: 18px;
  font-weight: 530;
  div {
    display: inline-block;
  }
  .cancel {
    margin-left: -10px;
    width: 10%;
    .iconfont {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .title {
    width: 90%;
  }
}
.tips {
  margin-top: 20px;
  margin-bottom: 20px;
  div:first-child {
    margin-bottom: 10px;
    color: #000;
    font-size: 18px;
  }
}
</style>
