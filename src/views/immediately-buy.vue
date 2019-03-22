<template>
  <div class="immediately-buy">
    <TopNav :props="topData"></TopNav>
    <form>
      <div class="cell-warrper">
        <div class="left">
          <label for="currentPrice"><span>当前价</span></label>
        </div>
        <div class="right">
          <!-- 输入框 用input 标签 隐藏下面的span标签 -->
          <!-- <input type="text" class="input"> -->
          <!-- 不能输入 用 span 标签 隐藏下面的 input 标签 -->
          <span>1.2</span>
        </div>
      </div>
      <div class="cell-warrper">
        <div class="left">
          <label for="buyPrice"><span>买入价</span></label>
        </div>
        <div class="right">
          <input type="number" class="input" id="buyPrice" placeholder="请输入买入价">
        </div>
      </div>
      <div class="cell-warrper">
        <div class="left">
          <label for="canBuyNum"><span>可买入股数</span></label>
        </div>
        <div class="right">
          <span class="can-buy-num">42</span>
        </div>
      </div>
      <div class="cell-warrper">
        <div class="left">
          <label for="buyNum"><span>买入股数</span></label>
        </div>
        <div class="right">
          <input type="number" class="input" id="buyNum" placeholder="请输入买入股数">
        </div>
      </div>
      <div class="cell-warrper">
        <div class="left">
          <label for="total"><span>总计</span></label>
        </div>
        <div class="right">
          <span class="total">1.2</span>
        </div>
      </div>
    </form>

    <div class="btn-warrper">
      <button type="button" class="btn">立即买入</button>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
export default {
  name: "ImmediatelyBuy",
  data() {
    return {
      topData: {
        title: "立即买入",
        hasGoBack: true,
        bgc: "",
        color: ""
      }
    };
  },
  created() {},
  components: {
    TopNav
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
@cell-height: @88px;
.immediately-buy {
  background-color: #f4f4f4;
  padding-top: @top-nav-height + @20px;
  padding-bottom: @128px;
  .cell-warrper {
    padding: 0 @30px;
    position: relative;
    background-color: #fff;
    height: @cell-height;
    line-height: @cell-height;
    font-size: 15px;
    color: #000;
    margin-bottom: @20px;
    .left {
      position: absolute;
      top: 0;
      left: 0;
      span {
        padding-left: @36px;
      }
    }
    .right {
      padding-left: @200px;
      text-align: right;
      span {
        display: block;
        &::before {
          content: "¥";
          font-size: 12px;
        }
        &.can-buy-num {
          &::before {
            content: "";
          }
        }
        &.total {
          color: #f00;
        }
      }
      .input {
        text-align: right;
        line-height: @40px;
        padding: @24px 0;
        font-size: 15px;
        border: 0;
      }
    }
  }
  .btn-warrper {
    width: 100%;
    padding: 0 @36px;
    position: fixed;
    left: 0;
    bottom: @20px;
    .btn {
      height: @88px;
      border-radius: @10px;
      line-height: @88px;
    }
  }
}
</style>


