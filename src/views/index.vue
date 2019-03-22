<template>
  <div class="index">
    <TopNav :props="topData"></TopNav>
    <div class="content">
      <router-view/>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import BottomNav from "../components/bottom-nav/bottom-nav.vue";
export default {
  name: "Index",
  data() {
    return {
      topData: {
        title: '首页',
        hasGoBack: false,
        bgc: '',
        color: ''
      }
    };
  },
  created() {
    this.topData.title = this.$route.meta.title;
  },
  components: {
    TopNav,
    BottomNav
  },
  watch: {
    $route: function (to, form) {
      this.topData.title = to.meta.title;
    }
  }
};
</script>

<style lang="less">
@import url(../assets/less/variable.less);
.index {
  padding-top: @top-nav-height;
  padding-bottom: @bottom-nav-height;
}
</style>
