<template>
  <div class="task">
    <nav>
      <ul class="clearfix">
        <li>
          <router-link to="/task">
            <span>待领取</span>
          </router-link>
        </li>
        <li>
          <router-link to="/task/running">
            <span>执行中</span>
          </router-link>
        </li>
        <li>
          <router-link to="/task/inReview">
            <span>审核中</span>
          </router-link>
        </li>
        <li>
          <router-link to="/task/rule">
            <span>任务规则</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="conntent">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.task {
  padding-top: @96px;
  nav {
    width: 100%;
    position: fixed;
    top: @top-nav-height;
    left: 0;
    z-index: 2001;
    li {
      float: left;
      width: 25%;
      text-align: center;
    }
    a {
      display: block;
      width: 100%;
      &.router-link-active.router-link-exact-active {
        span {
          font-size: @36px;
          color: #000;
          font-weight: 700;
          &::after {
            opacity: 1;
            width: @40px;
          }
        }
      }
    }
    span {
      display: inline-block;
      font-size: @28px;
      color: #a8a8a8;
      line-height: @96px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0px;
        height: @6px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #356aff;
        border-radius: 20px;
        bottom: @14px;
        opacity: 0;
        transition: all 0.3s;
      }
    }
  }
}
</style>
