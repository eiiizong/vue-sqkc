<template>
  <div class="bottom">
    <ul class="nav clearfix">
      <li class="active">
        <router-link to="/">
          <i class="icon icon-bottom-nav-one"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/task">
          <i class="icon icon-bottom-nav-two"></i>
          <span>社群任务</span>
        </router-link>
      </li>
      <li>
        <router-link to="/my">
          <i class="icon icon-bottom-nav-three"></i>
          <span>个人中心</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bottomNav",
  props: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../assets/less/variable.less);
.bottom {
  .nav {
    display: block;
    width: 100%;
    height: @90px;
    font-weight: bold;
    font-size: @20px;
    text-align: center;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2001;
    border-top: 1px solid #f4f4f4;
    li {
      width: 33.3333%;
      height: 100%;
      float: left;
      text-align: center;
      padding-top: @22px;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #b2b2b2;
        line-height: 1;
        position: relative;
        span {
          width: 100%;
          display: block;
          position: absolute;
          bottom: @2px;
          left: 0;
          padding-top: @16px;
          font-weight: bold;
        }
        .icon-bottom-nav-one {
          width: @36px;
          height: @30px;
          .image("index");
        }
        .icon-bottom-nav-two {
          width: @34px;
          height: @30px;
          .image("task");
        }
        .icon-bottom-nav-three {
          width: @32px;
          height: @32px;
          .image("my");
        }
      }
      &.active {
        a {
          span {
            color: #356aff;
          }
          .icon-bottom-nav-one {
            .image("index-active");
          }
          .icon-bottom-nav-two {
            .image("task-active");
          }
          .icon-bottom-nav-three {
            .image("my-active");
          }
        }
      }
    }
  }
}
</style>
