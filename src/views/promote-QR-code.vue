<template>
  <div class="promote-QR-code">
    <div class="top">
      <TopNav :props="topNavData"></TopNav>
    </div>
    <div class="content">
      <div class="img-warpper">
        <img src="../assets/img/QR.jpg" alt="" />
      </div>
      <div class="hint">
        <img src="../assets/img/invite.png" alt="" />
      </div>
      <div class="code">
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
      <div class="btn-warpper">
        <button class="btn">
          <i class="icon"></i>
          <span>复制链接</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
export default {
  name: "promoteQRCode",
  data() {
    return {
      topNavData: {
        title: "推广二维码",
        hasGoBack: true,
        bgc: "#fff",
        color: "#000"
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
.promote-QR-code {
  width: 100%;
  height: 100%;
  padding-top: @top-nav-height;
  text-align: center;
  .content {
    width: 100%;
    height: 100%;
    background: url(../assets/img/generalize-QR-bg.png) no-repeat top left
      #062b4d;
    background-size: 100%;
  }
  .img-warpper {
    padding: 0;
    padding-top: @408px;
  }
  img {
    display: inline-block;
    width: @326px;
    height: @326px;
  }
  .hint {
    padding-top: @140px;
    padding-bottom: @34px;
    img {
      width: @250px;
      height: @28px;
    }
  }
  .code {
    display: flex;
    margin-bottom: @64px;
    justify-content: center;
    span {
      font-size: @28px;
      font-weight: 700;
      line-height: @50px;
      color: #062b4d;
      width: @50px;
      height: @50px;
      background-color: #ffe1d9;
      border-radius: @6px;
      margin-right: @30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn-warpper {
    padding: 0;
    .icon {
      width: @24px;
      height: @32px;
      .image("icon-create-text-white");
      margin-right: @10px;
      margin-top: @34px;
    }
    .btn {
      display: inline-block;
      width: @340px;
      height: @100px;
      background-color: #f15447;
      border-radius: @10px;
      line-height: @100px;
    }
  }
}
</style>
