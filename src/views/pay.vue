<template>
  <div class="pay">
    <NavCommon></NavCommon>
  </div>
</template>

<script>
// import TopNav from "../components/top-nav/top-nav.vue";
import NavCommon from "../components/nav-common/nav-common.vue";
export default {
  name: "pay",
  data() {
    return {};
  },
  components: {
    NavCommon
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.pay {
  width: 100%;
}
</style>
