<template>
  <div class="task">
    <nav>
      <ul class="clearfix">
        <li>
          <router-link to="/task">
            <span>代领取</span>
          </router-link>
        </li>
        <li>
          <router-link to="/1">
            <span>代领取</span>
          </router-link>
        </li>
        <li>
          <router-link to="/2">
            <span>代领取</span>
          </router-link>
        </li>
        <li>
          <router-link to="/3">
            <span>代领取</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import TopNav from "../components/top-nav/top-nav.vue";
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
      &.router-link-active {
        span {
          font-size: @36px;
          color: #000;
          opacity: 1;
        }
      }
    }
    span {
      display: inline-block;
      font-size: @28px;
      color: #a8a8a8;
      line-height: @96px;
      font-weight: 700;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: @40px;
        height: @6px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #356aff;
        border-radius: 20px;
        bottom: @14px;
        opacity: 0;
      }
    }
  }
}
</style>
