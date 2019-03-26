<template>
  <div class="btn-warpper">
    <button class="btn" :class="className" v-if="!to">
      <i class="icon" v-if="iconClassName" :class="iconClassName"></i>
      <span> {{ value }} </span>
    </button>
    <router-link :to="to" class="btn" :class="className" v-else>
      <i class="icon" v-if="iconClassName" :class="iconClassName"></i>
      <span> {{ value }} </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "btn",
  props: {
    to: String,
    value: {
      type: String,
      default: "按钮"
    },
    className: String,
    iconClassName: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);
// 针对当前文件夹下的 img/icon/
@btn-height: @88px;
@btn-height-54: @54px;
@btn-height-100: @100px;
@btn-bgc: #356aff;
@btn-color: #fff;
.btn-warpper {
  width: 100%;
}
.button,
.btn,
.btn-link {
  width: 100%;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @btn-bgc;
  color: @btn-color;
  font-size: @30px;
  font-weight: 500;
  border-radius: 100px;
  text-align: center;
  height: @btn-height;
  &:active {
    background-color: lighten(@btn-bgc, 10%);
  }
  .icon {
    margin-right: @10px;
  }
  span {
    line-height: 1;
  }

  &.h100 {
    height: @btn-height-100;
  }
  &.h54 {
    height: @btn-height-54;
  }
  &.fs34 {
    font-size: @34px;
  }
  &.fw700 {
    font-weight: 700;
  }
  &.br0 {
    border-radius: 0;
  }
}
</style>
