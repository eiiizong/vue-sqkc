<template>
  <div class="index">
    <TopNav :topData="topData"></TopNav>
    <div class="content">
      <div class="top">
        <div class="img-warrper">
          <img src="../assets/img/home-bg-01.jpg" alt="">
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
      <div class="center">
        <ul class="nav clearfix" v-if="navData">
          <li v-for="(item, index) in navData" :key="index">
            <router-link :to="item.path">
              <i class="icon" :class="item.iconClassName"></i>
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="news">
        <h3>今日热点</h3>
        <ul>
          <li>
            <h4 class="text-one-ellipsis">成都某工地发现UFO</h4>
            <p class="text-two-ellipsis">这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容...</p>
            <div class="time clearfix">
              <span class="left">发布于2018.09.01</span>
              <div class="right">
                <router-link to="">查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <h4 class="text-one-ellipsis">成都某工地发现UFO</h4>
            <p class="text-two-ellipsis">这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容...</p>
            <div class="time clearfix">
              <span class="left">发布于2018.09.01</span>
              <div class="right">
                <router-link to="">查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <BottomNav :navIndex="0"></BottomNav>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import BottomNav from "../components/bottom-nav.vue";
export default {
  name: "index",
  data() {
    return {
      topData: {
        title: '首页',
        hasGoBack: false,
        bgc: '',
        color: ''
      },
      navData: [
        {
          path: '/recommendedStudents',
          name: '推荐学员',
          iconClassName: 'icon-recommended-students'
        },
        {
          path: '/buyCourse',
          name: '课程购买',
          iconClassName: 'icon-buy-course'
        },
        {
          path: '/studentsGrades',
          name: '学员等级',
          iconClassName: 'icon-students-grades'
        },
        {
          path: '/aboutUs',
          name: '关于我们',
          iconClassName: 'icon-about-us'
        },
        {
          path: '/communityProducts',
          name: '社群产品',
          iconClassName: 'icon-community-products'
        },
        {
          path: '/localCommunity',
          name: '各地社群',
          iconClassName: 'icon-local-community'
        }

      ]
    };
  },
  created() {},
  methods: {
    seePassword() {
      this.isPassword = !this.isPassword;
    },
    sendCode() {
      this.isSendCode = !this.isSendCode;
      let timer;
      let num = this.num;
      timer = setInterval(() => {
        this.timeNumber--;
        if (this.timeNumber === -1) {
          clearInterval(timer);
          this.isSendCode = !this.isSendCode;
          this.timeNumber = 60;
        }
      }, 1000);
    }
  },
  components: {
    TopNav,
    BottomNav
  }
};
</script>

<style lang="less">
@import url(../assets/less/variable.less);

.index {
  padding-bottom: @90px;
  .content {
    .top {
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
    .center {
      padding-top: @108px;
      margin-top: @8px;
      padding-bottom: @54px;
      li {
        width: 33.33333%;
        float: left;
        text-align: center;
        margin-top: @48px;
        a {
          .icon {
            width: @90px;
            height: @90px;
          }
          span {
            font-size: @26px;
            line-height: 1;
            padding-top: @15px;
            display: block;
            color: #2a2a2a;
          }
          .icon-recommended-students {
            .image("recommended-students");
          }
          .icon-buy-course {
            .image("buy-course");
          }
          .icon-students-grades {
            .image("students-grades");
          }
          .icon-about-us {
            .image("about-us");
          }
          .icon-community-products {
            .image("community-products");
          }
          .icon-local-community {
            .image("local-community");
          }
        }
      }
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
    ul {
      padding: @40px @30px;
    }
    li {
      background-color: #fff;
      border-radius: @20px;
      padding: 0 @22px;
      margin-bottom: @20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    h4 {
      font-size: @32px;
      color: #000;
      line-height: 1;
      font-weight: bold;
      padding-top: @36px;
      padding-bottom: @10px;
    }
    p {
      font-size: @26px;
      font-weight: 500;
      line-height: @34px;
      max-height: @68px;
      color: #888;
    }
    .time {
      margin-top: @26px;
      font-size: @26px;
      font-weight: 500;
      line-height: 1;
      color: #b2b2b2;
      padding-bottom: @32px;
      a {
        font-size: @26px;
        color: #b2b2b2;
      }
    }
  }
}
</style>
