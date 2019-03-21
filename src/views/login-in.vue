<template>
  <div class="login-sign">
    <h1>登录</h1>
    <form action class="form">
      <div class="input-warpper">
        <label for="tel">
          <i class="icon icon-tel"></i>
        </label>
        <input class="input" type="number" id="tel" placeholder="请输入手机号">
      </div>
      <div class="input-warpper">
        <label for="password">
          <i class="icon icon-password"></i>
        </label>
        <input
          class="input"
          :type="isPassword? 'password': 'text'"
          id="password"
          placeholder="请输入登录密码"
        >
        <i class="icon icon-see-password" :class="isPassword? '': 'active'" @click="seePassword"></i>
      </div>
      <div class="btn-warpper">
        <button type="button" class="btn">登录</button>
      </div>
      <div class="link clearfix">
        <router-link to="/forgetPassword" class="left">
          <span>忘记密码？</span>
        </router-link>
        <router-link to="/sign" class="right">
          <span>没有账号，去注册？</span>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-in",
  data() {
    return {
      isPassword: true
    };
  },
  methods: {
    seePassword() {
      this.isPassword = !this.isPassword;
      console.log(this);
    }
  }
};
</script>


<style lang="less">
@import url(../assets/less/variable.less);

.login-sign {
  background: url(../assets/img/sign-bg.jpg) no-repeat top left;
  background-size: cover;
  color: #fff;
  padding: 0 @50px;
  h1 {
    font-size: @44px;
    line-height: 1;
    padding: @220px 0 @58px @16px;
  }
  .form {
    display: block;
    width: 100%;
    border-radius: @20px;
    padding: @30px @58px;
    background-color: #fff;
  }
  .input-warpper {
    position: relative;
    padding-left: @48px;
    label {
      position: absolute;
      top: 50%;
      left: -@8px;
      font-size: 0;
      transform: translateY(-50%);
    }
    .input {
      padding-left: @14px;
    }
    .icon-tel {
      width: @40px;
      height: @54px;
      .image("phone");
    }
    .icon-password {
      width: @40px;
      height: @48px;
      .image("password");
    }
    .icon-see-password {
      position: absolute;
      top: 50%;
      right: 0;
      width: @38px;
      height: @26px;
      .image("see-password");
      transform: translateY(-50%);
      &.active {
        .image("see-password-active");
      }
    }
  }
  .link {
    font-size: @28px;
    line-height: 1;
  }
}
</style>

