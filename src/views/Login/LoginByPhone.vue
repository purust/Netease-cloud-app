<template>
  <div class="loginby-phone">
    <div class="top">
      <div class="cancel" @click="$router.back()">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <div class="title">手机号登录</div>
    </div>
    <div class="tips">登录体验更多精彩</div>
    <div class="phone">
      <input type="number" placeholder="输入手机号" v-model="phone" />
    </div>
    <!-- <div class="pass">
      <input type="password" placeholder="输入密码" v-model="logininfo.pass" />
    </div> -->
    <div class="login" @click="sendCode()">下一步</div>
    <!-- <div class="forget">忘记密码 <i class="iconfont icon-gengduo"></i></div> -->
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { sendAuthCode } from "network/login.js";
import { debounce } from "common/const.js";

export default {
  name: "LoginByPhone",
  setup() {
    const router = useRouter();

    // 绑定input的账号信息
    let phone = ref(null);
    // 发送网络请求
    function request() {
      sendAuthCode(phone.value).then((res) => {
        if (res.data.code === 200) {
          router.push({
            path: "/login/sendcode",
            query: { phone: phone.value },
          });
        }
      });
    }
    function sendCode() {
      debounce(request)();
    }
    return {
      phone,
      sendCode,
    };
  },
};
</script>
<style lang="less" scoped>
.loginby-phone {
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
  color: #000;
  font-size: 18px;
}
.phone,
.pass {
  width: 85%;
  height: 44px;
  line-height: 44px;
  margin: 18px auto;
  border-bottom: 1px solid grey;
  input {
    height: 40px;
    font-size: 17px;
  }
}
.login {
  width: 85%;
  height: 44px;
  margin: 30px auto;
  border-radius: 22px;
  line-height: 44px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background-color: #ec4141;
}
.forget {
  height: 20px;
  text-align: center;
  // margin: auto;
}
</style>
