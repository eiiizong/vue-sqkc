<template>
  <div class="top">
    <div class="nav">
      <div class="left"></div>
      <div class="center">{{title}}</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
  props: {
    title: String
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../assets/less/variable.less);
.top {
  height: @114px;
  .nav {
    display: block;
    width: 100%;
    height: @114px;
    padding-top: @56px;
    font-weight: bold;
    font-size: @34px;
    line-height: 1;
    text-align: center;
    background-color: #356aff;
    color: #fff;
    letter-spacing: 2px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2001;
    .left {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .right {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
