<template>
  <div class="pay-result">
    <TopNav :props="topNavData"></TopNav>
    <div class="pay-info">
      <i class="icon icon-apply-ok" v-if="isPaySuccess"></i>
      <i class="icon icon-apply-error" v-else></i>
      <p v-if="isPaySuccess">支付成功</p>
      <p v-else>支付失败</p>
      <span v-if="isPaySuccess"
        >您已成功购买课程，请及时通过微信联系负责人发放任务。</span
      >
      <span v-else>您的支付失败，请微信联系以下负责人进行处理</span>
    </div>
    <div class="img-warrper">
      <img src="../assets/img/QR.jpg" alt="" />
      <Btn className="no" value="保存图片"></Btn>
    </div>
    <!-- 失败隐藏下面的标签 -->
    <div class="bottom">
      <span>订单编号：823749384729486</span>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import Btn from "../components/btn/btn.vue";
export default {
  name: "payResult",
  data() {
    return {
      isPaySuccess: true,
      topNavData: {
        title: "支付结果",
        hasGoBack: true,
        bgc: "#356aff"
      }
    };
  },
  components: {
    TopNav,
    Btn
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.pay-result {
  width: 100%;
  background-color: #365aff;
  padding: @212px @88px 0;
  text-align: center;
  color: #fff;
  .pay-info {
    .icon {
      width: @110px;
      height: @110px;
      margin: 0 auto;
    }
    .icon-apply-ok {
      .image("apply-ok");
    }
    .icon-apply-error {
      .image("apply-error");
    }
    p {
      font-size: @34px;
      font-weight: 700;
      line-height: 1;
      padding: @32px 0;
    }
    span {
      display: block;
      font-size: @26px;
      line-height: @34px;
      text-align: left;
      margin-bottom: @68px;
      &.error {
        text-align: center;
      }
    }
  }

  .img-warrper {
    padding: @84px @104px @124px;
    background-color: #fff;
    border-radius: @20px;
    position: relative;
    img {
      width: 100%;
    }
    .btn {
      position: absolute;
      left: 50%;
      bottom: @40px;
      transform: translateX(-50%);
    }
  }

  .bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-bottom: @38px;
    span {
      display: block;
      font-size: @26px;
      line-height: 1;
      text-align: center;
    }
  }
}
</style>
