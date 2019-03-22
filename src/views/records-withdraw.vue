<template>
  <div class="records-withdraw">
    records-withdraw
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";

export default {
  name: "task",
  data() {
    return {
      isPassword: true,
      isSendCode: false,
      timeNumber: 60
    };
  },
  created() {},
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

.records-withdraw {
}
</style>
