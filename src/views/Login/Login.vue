<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="" />
    </div>
    <div class="hint">
      上次登录
      <div class="in-corner"></div>
    </div>
    <div class="phonelogin" @click="$router.push('/login/cellphone')">
      手机号登录
    </div>
    <div class="license">
      <input type="checkbox" name="" id="agree" />
      <span class="des">我已阅读并同意</span>
      <span class="policy"
        ><a href="">《服务条款》、</a><a href="">《隐私政策》</a
        ><a href="">《中国联通认证服务协议》</a></span
      >
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.logo {
  width: 100%;
  text-align: center;
  img {
    margin-top: 170px;
    margin-bottom: 170px;
    width: 80px;
    height: auto;
    border-radius: 40px;
  }
}

.hint {
  position: relative;
  width: 65px;
  height: 25px;
  margin: 17px auto;
  line-height: 25px;
  text-align: center;
  border-radius: 12px;
  // border: 1px solid #000;
  font-size: 10px;
  color: #000;
  background-color: #ebebeb;
  .in-corner {
    position: absolute;
    bottom: -4px;
    left: calc(50% - 5px);
    width: 10px;
    height: 10px;
    // border-right: 1px solid #000;
    // border-bottom: 1px solid #000;
    transform: rotate(45deg);
    background-color: #ebebeb;
  }
}
.phonelogin {
  width: 80%;
  height: 44px;
  margin: 0 auto;
  border-radius: 22px;
  line-height: 44px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background-color: #ec4141;
}
.license {
  width: 70%;
  height: 20px;
  margin: 30px auto 0;
  text-align: center;
  font-size: 10px;
  input {
    vertical-align: middle;
  }
  .des {
    color: grey;
    margin-left: 5px;
    margin-right: 4px;
  }
  .policy {
    a {
      color: #104e8b;
      display: inline-block;
    }
    a:last-child {
      margin-top: 5px;
    }
  }
}
</style>
