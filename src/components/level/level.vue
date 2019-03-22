<template>
  <span class="level">
    <span :class="className">{{ props }}</span>
  </span>
</template>

<script>
export default {
  name: "level",
  props: {
    props: String,
    className: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);

@bgc-one: #ff3253;
@bgc-two: #efbb00;
@bgc-three: #356aff;
.level {
  display: inline-block;
  font-size: 0;
  > span {
    display: inline-block;
    background-color: @bgc-one;
    font-size: @22px;
    font-weight: 500;
    color: #fefefe;
    line-height: 1;
    padding: @4px @8px;
    border-radius: @4px;
    &.two {
      background-color: @bgc-two;
    }
    &.one {
      background-color: @bgc-one;
    }
    &.three {
      background-color: @bgc-three;
    }
  }
}
</style>
