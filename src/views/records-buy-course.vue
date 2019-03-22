<template>
  <div class="records-buy-course">
    records-buy-course
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import BottomNav from "../components/bottom-nav.vue";

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
  },
  components: {
    TopNav,
    BottomNav
  }
};
</script>

<style lang="less">
@import url(../assets/less/variable.less);

.records-buy-course {
}
</style>
