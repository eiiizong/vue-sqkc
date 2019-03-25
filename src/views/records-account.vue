<template>
  <div class="account-records">
    <div class="top">
      <TopNav :props="topData"></TopNav>
      <div class="banner">
        <ul class="item">
          <li class="img-warrper">
            <img src="../assets/img/record-banner-01.jpg" alt="">
          </li>
        </ul>
      </div>
      <RecordNav></RecordNav>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import RecordNav from "../components/record-nav/record-nav.vue";
export default {
  name: "accountRecords",
  data() {
    return {
      topData: {
        title: "账户记录",
        hasGoBack: true,
        bgc: "#fff",
        color: "#000"
      }
    };
  },
  methods: {},
  components: {
    TopNav,
    RecordNav
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.account-records {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: auto;
  overflow: hidden;
  .top {
    padding-top: @top-nav-height;
    .banner {
      img {
        width: 100%;
      }
    }
  }
  .content {
    width: 100%;
    flex: 1;
    background-color: #fcfcfc;
    overflow: hidden;
    > div {
      overflow: auto;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

