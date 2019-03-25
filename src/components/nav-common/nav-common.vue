<template>
  <div class="nav" v-if="props">
    <ul class="clearfix">
      <li
        :class="props.className"
        v-for="(item, index) in props.routes"
        :key="index"
      >
        <router-link :to="item.path">
          <!-- 如果没有传入 iconClassName 将会以 icon-1 的方式增加class -->
          <i
            class="icon"
            :class="
              item.iconClassName ? item.iconClassName : 'icon-' + (index + 1)
            "
          ></i>
          <span> {{ item.name }} </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* 
  props 参数示例：

  {
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
      }
    ]
  }

*/

export default {
  name: "navCommon",
  props: {
    props: Object
  }
};
</script>

<style lang="less" scoped>
@import url(../../assets/less/variable.less);

@img-nav-common-base-url: "./img/";
@nav-common-icon-size: @90px;

.image-nav-common(@name) when (isstring(@name)) {
  background-image: url("@{img-nav-common-base-url}@{name}.png");
  @media (-webkit-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background-image: url("@{img-nav-common-base-url}@{name}@2x.png");
  }
}

.nav {
  display: block;
  width: 100%;
  ul {
    width: 100%;
    overflow: hidden;
    text-align: center;
  }
  li {
    float: left;
    width: 50%;
    padding: @24px 0;
    &.one {
      width: 100%;
    }
    &.two {
      width: 50%;
    }
    &.three {
      width: 33.3333%;
    }
    &.four {
      width: 25%;
    }
  }
  a {
    display: block;
  }
  .icon {
    width: @nav-common-icon-size;
    height: @nav-common-icon-size;
    &.icon-1 {
      .image-nav-common("icon-1");
    }
    &.icon-2 {
      .image-nav-common("icon-2");
    }
    &.icon-3 {
      .image-nav-common("icon-3");
    }
    &.icon-4 {
      .image-nav-common("icon-4");
    }
    &.icon-5 {
      .image-nav-common("icon-5");
    }
    &.icon-6 {
      .image-nav-common("icon-6");
    }
  }
  span {
    display: block;
    font-size: @26px;
    line-height: 1;
    color: #2a2a2a;
    margin-top: @14px;
  }
}
</style>
