<template>
  <div class="cell-team-number">
    <div>
      <img src="../../assets/img/user-img.png" alt="" />
    </div>
    <div class="text-warpper">
      <span> {{ props.name }} </span>
      <Level
        :className="props.levelClassName"
        :props="props.levelProps"
      ></Level>
    </div>
  </div>
</template>

<script>
import Level from "../level/level.vue";
export default {
  name: "cellTeamNumber",
  props: {
    props: Object
  },
  components: {
    Level
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);
// 头像图片大小
@img-size: @100px;
.cell-team-number {
  width: 100%;
  padding: @16px 0;
  border-bottom: 1px solid #ededed;
  font-size: @30px;
  font-weight: 700;
  color: #282828;
  position: relative;
  img {
    width: @img-size;
    height: @img-size;
    border-radius: 50%;
    overflow: hidden;
  }
  .text-warpper {
    position: absolute;
    top: 50%;
    left: @140px;
    transform: translateY(-50%);
    span {
      margin-right: @10px;
    }
  }
}
</style>
