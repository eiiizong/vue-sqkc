<template>
  <div class="my">
    <TopNav title="个人中心"></TopNav>
    
    <BottomNav :navIndex="2"></BottomNav>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import BottomNav from "../components/bottom-nav.vue";

export default {
  name: "my",
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

.index {
  background-color: #f8f8f8;
  padding-bottom: @90px;

}
</style>
