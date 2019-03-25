<template>
  <div class="top-nav">
    <div
      class="content"
      :style="{ backgroundColor: props.bgc, color: props.color }"
    >
      <div class="btn-goback" v-if="props.hasGoBack" @click="goBack">
        <i class="icon-go-back" :style="{ color: props.color }"></i>
      </div>
      <div class="text-warrper">
        <span>{{ props.title }}</span>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
  props: {
    props: Object
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);
@import url(./icon.css);
@fs: @34px;
@bgc: #356aff;
@color: #fff;
.top-nav {
  background-color: transparent;
  .content {
    display: block;
    width: 100%;
    height: @top-nav-height;
    font-weight: bold;
    font-size: @fs;
    line-height: 1;
    text-align: center;
    background-color: @bgc;
    color: @color;
    letter-spacing: 2px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2001;
  }
  .btn-goback {
    position: absolute;
    bottom: @22px;
    left: @20px;
    .icon-go-back {
      color: #fff;
    }
  }
  .text-warrper {
    padding-top: @56px;
    span {
      display: block;
      line-height: 1;
      padding: 0 @50px;
    }
  }
  .right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}
</style>
