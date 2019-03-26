<template>
  <div class="course-detail">
    <div class="btn-warpper">
      <Btn to="/" value="立即购买" className="fs34 fw700 h100 br0"></Btn>
    </div>
  </div>
</template>

<script>
// import TopNav from "../components/top-nav/top-nav.vue";
import Btn from "../components/btn/btn.vue";
export default {
  name: "courseDetail",
  data() {
    return {};
  },
  components: {
    Btn
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.course-detail {
  width: 100%;
  .btn-warpper {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
