<template>
  <div class="course-detail">
    <div class="img-warpper">
      <img src="../assets/img/course-detail.jpg" alt="" />
      <i class="icon" @click="goBack"></i>
    </div>
    <div class="price">
      <h3>充值高级VIP订单</h3>
      <div>
        <span class="new-price">589.00</span>
        <span class="old-price">898.00</span>
      </div>
    </div>
    <div class="detail">
      <h4>购买详情</h4>
      <p>
        1.在充分认识原信息系统的基础上，通过问题识可行性分析、详细调查、系统化分析，最终完成新系统的逻辑方案设计，或称逻辑模型设计。
      </p>
      <p>
        2.逻辑方案不同于物理方案，前者解决“做什么”问题，是系统分析的任务；后者解决“怎么做”的问题是系统设计的任务。
      </p>
      <p>
        3.没有系统分析的内容，只有系统化分析的主要容。可能不太一样，系统化分析是系统分析的一个步骤呢。
      </p>
      <p>
        4.没有系统分析的内容，只有系统化分析的主要容。可能不太一样，系统化分析是系统分析的一个步骤呢。
      </p>
    </div>
    <div class="btn-warpper">
      <Btn to="/payWay" value="立即购买" className="fs34 fw700 h100 br0"></Btn>
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
  methods: {
    goBack() {
      this.$router.go(-1);
    }
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
  background-color: #fff;
  padding-bottom: @100px;
  .img-warpper {
    position: relative;
    img {
      width: 100%;
    }
    .icon {
      position: absolute;
      top: @54px;
      left: @10px;
      width: @44px;
      height: @44px;
      .image("icon-goback");
    }
  }
  .price {
    padding: 0 @padding-LR;
    > div {
      font-size: 0;
      padding-bottom: @36px;
    }
    h3 {
      font-size: @34px;
      color: #000;
      padding: @32px 0 @20px;
      line-height: 1;
    }
    .new-price {
      display: inline-block;
      font-size: @36px;
      font-weight: normal;
      color: #ff3253;
      margin-right: @10px;
      line-height: 1;
      &::before {
        content: "¥";
        font-size: @30px;
      }
    }
    .old-price {
      display: inline-block;
      font-size: @22px;
      color: #a8a8a8;
      line-height: 1;
      text-decoration: line-through;
      &::before {
        content: "¥";
      }
    }
  }
  .detail {
    border-top: @20px solid #f0f0f0;
    padding: 0 @padding-LR;
    padding-bottom: @24px;
    h4 {
      font-size: @30px;
      font-weight: normal;
      color: #000;
      line-height: 1;
      padding: @24px 0;
    }
  }
  .btn-warpper {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  p {
    font-size: @30px;
    font-weight: 500;
    line-height: @38px;
    color: #696969;
    text-indent: 2em;
  }
}
</style>
