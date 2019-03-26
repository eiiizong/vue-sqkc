<template>
  <div class="buy-course">
    <div class="top">
      <TopNav :props="topNavData"></TopNav>
    </div>
    <div class="content">
      <CardBuyCourse
        v-for="(item, index) in cardDatas"
        :key="index"
        :props="item"
      ></CardBuyCourse>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import CardBuyCourse from "../components/card-buy-course/card-buy-course.vue";

export default {
  name: "buyCourse",
  data() {
    return {
      topNavData: {
        title: "购买课程",
        hasGoBack: true,
        bgc: "#fff",
        color: "#000"
      },
      cardDatas: [
        {
          imgURL: "",
          id: 0,
          path: "/courseDetail",
          title: "教员课程",
          getMoney: "8.00",
          newPrice: "389",
          oldPrice: "589"
        },
        {
          imgURL: "",
          id: 0,
          path: "/courseDetail",
          title: "教员课程",
          getMoney: "8.00",
          newPrice: "389",
          oldPrice: "589"
        },
        {
          imgURL: "",
          id: 0,
          path: "/courseDetail",
          title: "教员课程",
          getMoney: "8.00",
          newPrice: "389",
          oldPrice: "589"
        },
        {
          imgURL: "",
          id: 0,
          path: "/courseDetail",
          title: "教员课程",
          getMoney: "8.00",
          newPrice: "389",
          oldPrice: "589"
        },
        {
          imgURL: "",
          id: 0,
          path: "/courseDetail",
          title: "教员课程",
          getMoney: "8.00",
          newPrice: "389",
          oldPrice: "589"
        }
      ]
    };
  },
  components: {
    CardBuyCourse,
    TopNav
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
@padding-TB: @40px;
.buy-course {
  width: 100%;
  padding-top: @top-nav-height;
  .content {
    padding: @padding-TB @padding-LR;
  }
}
</style>
