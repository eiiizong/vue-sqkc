<template>
  <div class="my">
    <div class="banner">
      <div class="img-warrper">
        <img src="../assets/img/home-bg-01.jpg" alt="">
      </div>
      <div class="card-warpper">
        <div class="card">
          <div class="text-warpper">
            <div class="title clearfix">
              <span class="left">我的学习收益</span>
              <i class="icon left icon-broken-line"></i>
            </div>
            <div class="total">58.00</div>
            <div class="other">
              剩余会员日：28天，
              <router-link to="">立即升级</router-link>
            </div>
          </div>
          <div class="user-info">
            <div class="img-warpper">
              <img src="../assets/img/user-img.png" alt="">
            </div>
            <div class="user-name text-one-ellipsis">Eiiizong</div>
            <Level props="学员一级" className="one"></Level>
          </div>
        </div>
      </div>

    </div>
    <nav>
      <ul class="clearfix">
        <li>
          <router-link to="/withdraw">
            <i class="icon icon-withraw"></i>
            <span>学币提现</span>
          </router-link>
        </li>
        <li>
          <router-link to="/accountRecords">
            <i class="icon icon-account-records"></i>
            <span>账户记录</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import TopNav from "../components/top-nav/top-nav.vue";
import Level from "../components/level/level.vue";
export default {
  name: "My",
  data() {
    return {};
  },
  components: {
    Level
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.my {
  .banner {
    position: relative;
  }
  .card-warpper {
    position: absolute;
    top: @76px;
    left: 0;
    width: 100%;
    padding: 0 @30px;
  }
  .card {
    border-radius: @20px;
    background-color: #fff;
    padding: 0 @30px;
    position: relative;
  }
  .text-warpper {
    font-size: @28px;
    font-weight: 700;
    line-height: 30px;
    color: #2a2a2a;
    line-height: 1;
    .title {
      padding: @44px 0;
    }
    .total {
      font-size: @54px;
      font-weight: 700;
      color: #ff3253;
      padding-bottom: @60px;
      &::before {
        content: "¥";
        font-size: @30px;
        margin-right: 2px;
        position: relative;
        top: -1px;
      }
    }
    .other {
      font-size: @24px;
      line-height: 1;
      color: #888;
      padding-bottom: @46px;
    }
  }
  .user-info {
    width: @120px;
    position: absolute;
    top: @44px;
    right: @30px;
    text-align: center;
    img {
      width: @120px;
      height: @120px;
      border-radius: 50%;
    }
    .user-name {
      width: 100%;
      font-size: @28px;
      font-weight: 700;
      line-height: 1;
      color: #2a2a2a;
      padding: @12px 0;
    }
    .level {
      display: block;
    }
  }
  nav {
    padding-top: @80px;
    li {
      text-align: center;
      width: 50%;
      float: left;
      span {
        display: inline-block;
        font-size: @26px;
        line-height: 1;
        color: #2a2a2a;
        margin-top: @8px;
      }
    }
  }
}
</style>
