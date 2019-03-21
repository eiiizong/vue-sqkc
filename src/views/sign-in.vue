<template>
  <div class="login-sign">
    <h1>注册</h1>
    <form action class="form">
      <div class="input-warpper">
        <label for="tel">
          <i class="icon icon-tel"></i>
        </label>
        <input class="input" type="number" id="tel" placeholder="请输入手机号" />
      </div>
      <div class="input-warpper get-code">
        <label for="verificationCode">
          <i class="icon icon-verification-code"></i>
        </label>
        <input class="input" type="number" id="verificationCode" placeholder="请输入验证码" />
        <div class="btn-warpper send-code">
          <button type="button" class="btn" :disabled="isSendCode" @click="sendCode">
            <span v-if="!isSendCode">发送验证码</span>
            <span v-else>已发送({{ timeNumber }}s)</span>
          </button>
        </div>
      </div>
      <div class="input-warpper">
        <label for="password">
          <i class="icon icon-password"></i>
        </label>
        <input class="input" :type="isPassword ? 'password' : 'text'" id="password" placeholder="请输入密码" />
        <i class="icon icon-see-password" :class="isPassword ? '' : 'active'" @click="seePassword"></i>
      </div>
      <div class="input-warpper">
        <label for="passwordAgain">
          <i class="icon icon-password"></i>
        </label>
        <input class="input" :type="isPassword ? 'password' : 'text'" id="passwordAgain" placeholder="请再次输入密码" />
      </div>
      <div class="input-warpper">
        <label for="inviteCode">
          <i class="icon icon-invite-code"></i>
        </label>
        <input class="input" type="text" id="inviteCode" placeholder="请输入邀请码" />
      </div>
      <div class="btn-warpper">
        <button type="button" class="btn">注册</button>
      </div>
      <div class="link clearfix">
        <router-link to="/" class="right">
          <span>已有账号，去登录</span>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "sign-in",
  data() {
    return {
      isPassword: true,
      isSendCode: false,
      timeNumber: 60
    };
  },
  methods: {
    seePassword() {
      this.isPassword = !this.isPassword;
    },
    sendCode() {
      this.isSendCode = !this.isSendCode;
      let timer;
      let num = this.num;
      timer = setInterval(() => {
        this.timeNumber--;
        if (this.timeNumber === -1) {
          clearInterval(timer);
          this.isSendCode = !this.isSendCode;
          this.timeNumber = 60;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less">
@import url(../assets/less/variable.less);

.login-sign {
  .get-code {
    padding-right: @220px;
  }
  .icon-verification-code {
    width: @40px;
    height: @40px;
    .image("code");
  }
  .icon-invite-code {
    width: @40px;
    height: @40px;
    .image("invitation-code");
  }
}
</style>
