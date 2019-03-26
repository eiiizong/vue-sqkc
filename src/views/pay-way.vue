<template>
  <div class="pay-way">
    <TopNav :props="topNavData"></TopNav>

    <div class="detail">
      <span>需支付</span>
      <div class="price">598.00</div>
      <span>客户充值高级VIP订单</span>
    </div>

    <div class="pay-away">
      <h3>支付方式</h3>
      <ul>
        <li class="alipay">
          <label class="title clearfix">
            <div class="left">
              <i class="icon icon-alipay-01"></i>
              <span>支付宝支付(<span class="recommend">推荐</span>)</span>
            </div>
            <div class="right">
              <input type="radio" name="paymentAway" />
              <i class="icon icon-ckeckbox-01"></i>
            </div>
          </label>
        </li>

        <li
          class="see-more-pay"
          id="btn_see_more"
          @click="showWecatPay"
          :class="isShowWecatPay ? 'clicked' : ''"
        >
          <span>选择其他支付方式</span>
          <i class="icon icon-link"></i>
        </li>

        <li class="wechat-pay" :class="isShowWecatPay ? 'clicked' : ''">
          <label class="title clearfix">
            <div class="left">
              <i class="icon icon-wechat-pay-01"></i>
              <span>微信支付(手续费1元)</span>
            </div>
            <div class="right">
              <input type="radio" name="paymentAway" />
              <i class="icon icon-ckeckbox-01"></i>
            </div>
          </label>
        </li>
      </ul>
    </div>

    <div class="btn-box">
      <button class="btn" type="button" onclick="window.location.href='/pay';">
        确认支付
      </button>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
export default {
  name: "payWay",
  data() {
    return {
      isShowWecatPay: false,
      topNavData: {
        bgc: "#fff",
        color: "#010101",
        title: "确认支付",
        hasGoBack: true
      }
    };
  },
  methods: {
    showWecatPay() {
      this.isShowWecatPay = !this.isShowWecatPay;
    }
  },
  components: {
    TopNav
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
@cp-step1-top-height: @300px;
.pay-way {
  width: 100%;
  background-color: #fff;
  padding-bottom: @100px;
  padding-top: @top-nav-height;
  .detail {
    text-align: center;
    padding-top: @64px;
    padding-bottom: @80px;
    > span {
      display: block;
      font-size: @22px;
      color: #888;
      line-height: 1;
    }
    .price {
      padding: @30px 0 @28px;
      font-size: @68px;
      line-height: 1;
      color: #f00;
      display: inline-block;
      &:before {
        display: inline-block;
        content: "¥";
        font-size: @48px;
        line-height: 1;
      }
    }
  }
  .pay-away {
    h3 {
      line-height: 1;
      font-size: @30px;
      padding: 0 @padding-LR;
      padding-bottom: @32px;
    }

    li {
      position: relative;
      padding-left: @100px;
      &:last-of-type {
        .title {
          border-bottom: 1px solid #f4f4f4;
          border-top: 0;
          .left {
            span {
              line-height: @116px;
            }
          }
        }
      }
      &.wechat-pay {
        transform: translateX(-100%);
        transition: all 0.3s ease-in-out;
      }
      &.see-more-pay {
        padding: 0;
        text-align: left;
        font-size: @30px;
        line-height: @80px;
        cursor: pointer;
        background-color: #eee;
        padding-left: @padding-LR;
        position: relative;
        .icon-link {
          width: @32px;
          height: @32px;
          .image-svg("link");
          position: absolute;
          right: @36px;
          top: @24px;
          transition: all 0.3s ease-in-out;
        }
      }
      &.clicked {
        &.wechat-pay {
          transform: translateX(0);
        }
        &.see-more-pay {
          .icon-link {
            transform: rotate(90deg);
          }
        }
      }
    }

    .title {
      border-top: 1px solid #f4f4f4;
      height: @120px;
      display: block;
      width: 100%;
      padding-right: @36px;
    }
    .left {
      font-size: 0;
      .icon {
        width: @40px;
        height: @32px;
        position: absolute;
        top: @44px;
        left: @52px;
      }
      .icon-alipay-01 {
        .image("icon-alipay-01");
      }
      .icon-wechat-pay-01 {
        height: @40px;
        .image("icon-wechat-pay-01");
        top: @40px;
      }
      .icon-cash {
        height: @40px;
        .image("icon-cash");
        top: @40px;
      }
      span {
        display: inline-block;
        font-size: @30px;
        line-height: @118px;
        &.recommend {
          color: green;
        }
      }
    }
    .right {
      .icon-ckeckbox-01 {
        width: @40px;
        height: @40px;
        .image-svg("no-checked");
        margin-top: @40px;
      }
      input {
        &:checked ~ .icon-ckeckbox-01 {
          .image-svg("checked");
        }
      }
    }
  }
}
</style>
