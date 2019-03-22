<template>
  <nav class="record-nav" v-if="routes">
    <ul class="clearfix">
      <li v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path"><span> {{ item.name }} </span></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
const prevRouter = "/accountRecords/";
export default {
  name: "RecordNav",
  props: {},
  data() {
    return {
      routes: [
        {
          path: prevRouter,
          name: "任务获取"
        },
        {
          path: prevRouter + "buyCourse",
          name: "课程购买"
        },
        {
          path: prevRouter + "withdraw",
          name: "提取"
        },
        {
          path: prevRouter + "four",
          name: "记录"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);

.record-nav {
  height: @100px;
  background-color: #fcfcfc;
  ul {
    width: 100%;
    height: 100%;
  }
  li {
    width: 25%;
    float: left;
    height: 100%;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    &.router-link-active.router-link-exact-active {
      span {
        &::after {
          opacity: 1;
          width: @40px;
        }
      }
    }
  }
  span {
    display: block;
    font-size: @32px;
    font-weight: bold;
    color: #000;
    line-height: 1;
    line-height: @100px;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: @16px;
      left: 50%;
      margin-left: -@20px;
      width: 0;
      height: @6px;
      background-color: #356aff;
      border-radius: 20px;
      opacity: 0;
      transition: all 0.3s;
    }
  }
}
</style>
