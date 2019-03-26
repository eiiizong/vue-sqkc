<template>
  <div class="pay">
    <TopNav :props="topNavData"></TopNav>
    <div class="QR-wrapper">
      <div class="QR-bg">
        <div class="pay-to">
          <span>你将付款给支付宝<br />渠道01 <span>(<b>拥挤</b>)</span></span>
        </div>
        <div class="img-box">
          <img src="../assets/img/QR.jpg" alt="" />
        </div>
        <div class="price">
          <span>¥598.00</span>
        </div>
        <div class="btn-box">
          <button class="btn" type="button">保存图片</button>
          <button class="btn" type="button">点击支付</button>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="hint">
      <h3>如果不能启用支付宝,请按以下流程付款：</h3>
      <p>1.保存图片到本地</p>
      <p>2.打开支付宝，扫一扫本地图片</p>
    </div>
    <div class="bottom">
      <p class="orange">付款即时到账，未到账请联系我们：13809290920</p>
      <p>订单编号：823749384729486</p>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import NavCommon from "../components/nav-common/nav-common.vue";
export default {
  name: "pay",
  data() {
    return {
      topNavData: {
        title: "确认支付",
        hasGoBack: true
      }
    };
  },
  components: {
    TopNav
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.pay {
  width: 100%;
  padding-top: @top-nav-height;
  background-color: #365aff;
  padding-bottom: @288px;
  .QR-wrapper {
    display: block;
    width: 100%;
    padding: @10px @padding-LR;
    .QR-bg {
      background-color: #fff;
      border-radius: @10px;
      text-align: center;
      padding-top: @80px;
      .pay-to {
        font-size: @28px;
        color: #070707;
        line-height: 1.4;
        b {
          font-weight: 500;
          color: #f00;
        }
      }
      .img-box {
        padding: @48px 0;
        img {
          display: block;
          width: @326px;
          margin: 0 auto;
        }
      }
      .price {
        padding-bottom: @10px;
        span {
          display: block;
          font-size: @72px;
          color: #f00;
          line-height: 1;
          font-weight: bold;
        }
      }
      .btn-box {
        overflow: hidden;
        padding: @74px @182px;
        position: relative;
        .btn {
          float: left;
          width: 50%;
          background-color: transparent;
          color: #356aff;
          line-height: 1;
          font-size: @28px;
          height: @28px;
          text-align: left;
          outline: 0;
          &:last-of-type {
            text-align: right;
          }
        }
        .line {
          position: absolute;
          top: 50%;
          left: 50%;
          height: @28px;
          width: 1px;
          transform: translate(-50%, -50%);
          background-color: #d9d9d9;
        }
      }
    }
  }
  .hint {
    color: #fff;
    padding: 0 @60px;
    p,
    h3 {
      font-size: @26px;
      font-weight: 500;
      line-height: 1.4;
    }
  }
  .bottom {
    font-size: @26px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    padding-top: @190px;
    padding-bottom: @36px;
    p {
      line-height: 1;
    }
    .orange {
      color: #efbb00;
      padding-bottom: @10px;
    }
  }
}
</style>
