<template>
  <div class="home">
    <div class="banner">
      <div class="img-warrper">
        <img src="../assets/img/home-bg-01.jpg" alt="" />
      </div>
      <div class="ad">
        <div class="bg">
          <h2 class="title">做任务·得佣金</h2>
          <p class="red">做对的投资，赚更多的钱</p>
          <p>邀请新人成为你的组员，她赚你也赚</p>
          <div class="link">
            <router-link to=""><span>了解更多</span></router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航 -->
    <div class="nav-warpper">
      <NavCommon :props="navData"></NavCommon>
    </div>

    <!-- 热点 -->
    <div class="news">
      <h3>今日热点</h3>
      <div class="warpper">
        <CardNews
          v-for="(item, index) in cardNewsData"
          :key="index"
          :props="item"
        ></CardNews>
      </div>
    </div>
  </div>
</template>

<script>
import NavCommon from "../components/nav-common/nav-common.vue";
import CardNews from "../components/card-news/card-news.vue";

export default {
  name: "index",
  data() {
    return {
      navData: {
        className: "three",
        routes: [
          {
            path: "/promoteQRCode",
            name: "推荐学员",
            iconClassName: ""
          },
          {
            path: "/buyCourse",
            name: "课程购买"
          },
          {
            path: "/students",
            name: "学员等级"
          },
          {
            path: "/aboutUs",
            name: "关于我们"
          },
          {
            path: "/communityProducts",
            name: "社群产品"
          },
          {
            path: "/localCommunity",
            name: "各地社群"
          }
        ]
      },
      cardNewsData: [
        {
          id: 723,
          title: "成都某工地发现UFO22",
          content:
            "这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新111",
          time: "2019.03.02",
          path: "/news"
        },
        {
          id: 723,
          title: "成都某工地发现UFO33",
          content:
            "这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新221",
          time: "2019.04.02",
          path: "/news"
        }
      ]
    };
  },
  components: {
    NavCommon,
    CardNews
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.home {
  .banner {
    position: relative;
    .img-warrper {
      img {
        width: 100%;
      }
    }
    .ad {
      width: 100%;
      position: absolute;
      top: @74px;
      left: 0;
      padding: 0 @30px;
      .bg {
        background: url(../assets/img/home-bg-02.png) no-repeat bottom right
          #fff;
        background-size: @194px @244px;
        border-radius: @20px;
        padding-left: @30px;
        background-origin: content-box;
        padding-right: @16px;
        padding-bottom: @40px;
        .title {
          font-size: @52px;
          padding: @54px 0;
          line-height: 1;
          color: #222;
        }
        p {
          font-size: @24px;
          line-height: 1;
          color: #919191;
          margin-bottom: @28px;
          &.red {
            font-size: @34px;
            line-height: 1;
            color: #ff3253;
            margin-bottom: @8px;
          }
        }
        .link {
          margin-bottom: -@12px;
          a {
            display: inline-block;
            span {
              display: block;
              width: @160px;
              height: @48px;
              border: solid 1px #356aff;
              border-radius: 100px;
              font-size: @24px;
              background-color: #fff;
              text-align: center;
              line-height: @46px;
              color: #356aff;
            }
          }
        }
      }
    }
  }
  .nav-warpper {
    padding-top: @140px;
    padding-bottom: @30px;
  }
}

.news {
  padding: 0 @30px;
  h3 {
    line-height: 1;
    font-size: @34px;
    font-weight: bold;
    color: #000;
  }
  .warpper {
    padding: @40px @30px;
  }
}
</style>
