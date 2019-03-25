<template>
  <div class="card-task">
    <div class="title">
      <span>推荐3个好友得佣金</span>
      <level props="学员一级" className="one"></level>
    </div>
    <p>
      这是社群内容这是社群内容这是社群内容社群内容社群内容...
    </p>
    <div class="link clearfix">
      <span class="left">2019.03.03</span>
      <router-link class="right" to="">查看详情</router-link>
    </div>
    <div class="btn-warpper">
      <button type="button" class="btn" disabled>
        已领取
        <!-- <span>领取</span> -->
      </button>
    </div>
  </div>
</template>

<script>
import Level from "../level/level.vue";
export default {
  name: "cardTask",
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Level
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);

.card-task {
  width: 100%;
  background-color: #fff;
  border-radius: @20px;
  margin-bottom: @30px;
  padding: 0 @28px;
  position: relative;
  .title {
    font-size: @32px;
    font-weight: 700;
    color: #000;
    line-height: 1;
    padding-top: @36px;
    margin-bottom: @12px;
    span {
      margin-right: @20px;
    }
  }
  p {
    font-size: @26px;
    color: #888;
    line-height: @34px;
    margin-bottom: @32px;
    padding-right: @190px;
  }
  .link {
    padding-bottom: @32px;
    font-size: @26px;
    line-height: 1;
    color: #b2b2b2;
    a {
      color: #b2b2b2;
    }
  }
  .btn-warpper {
    position: absolute;
    top: @38px;
    right: @28px;
    padding: 0;
    .btn {
      width: @140px;
      height: @54px;
      background-color: #356aff;
      line-height: @54px;
      font-size: @30px;
      &[disabled] {
        color: #fff;
        background-color: #b2b2b2;
      }
    }
  }
}
</style>
