<template>
  <nav class="bottom-nav">
    <ul class="clearfix" v-if="nav">
      <li v-for="item in nav" :key="item.index">
        <router-link :to="item.path">
          <i class="icon" :class="item.className"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
const prev = "icon-bottom-nav-";
export default {
  name: "bottomNav",
  data() {
    return {
      nav: [
        {
          index: 0,
          path: "/",
          name: "首页",
          className: prev + "one"
        },
        {
          index: 1,
          path: "/task",
          name: "社群任务",
          className: prev + "two"
        },
        {
          index: 2,
          path: "/realTime",
          name: "实时播报",
          className: prev + "three"
        },
        {
          index: 3,
          path: "/my",
          name: "个人中心",
          className: prev + "four"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);
// 针对当前文件夹下的 img/icon/
@img-base-url2: "./img/icon/";
.image2(@name) when (isstring(@name)) {
  background-image: url("@{img-base-url2}@{name}.png");
  @media (-webkit-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background-image: url("@{img-base-url2}@{name}@2x.png");
  }
}
.bottom-nav {
  ul {
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
  }
  li {
    width: 25%;
    height: 100%;
    float: left;
    text-align: center;
    padding-top: @22px;
  }
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
      .image2("index");
    }
    .icon-bottom-nav-two {
      width: @34px;
      height: @30px;
      .image2("task");
    }
    .icon-bottom-nav-three {
      width: @32px;
      height: @32px;
      .image2("my");
    }
    .icon-bottom-nav-four {
      width: @32px;
      height: @32px;
      .image2("my");
    }
    &.router-link-active.router-link-exact-active {
      span {
        color: #356aff;
      }
      .icon-bottom-nav-one {
        .image2("index-active");
      }
      .icon-bottom-nav-two {
        .image2("task-active");
      }
      .icon-bottom-nav-three {
        .image2("my-active");
      }
      .icon-bottom-nav-four {
        .image2("my-active");
      }
    }
  }
}
</style>
