<template>
  <div class="record-nav" v-if="routes">
    <ul>
      <li v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path"> {{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
const prevRouter = "/accountRecords/";
export default {
  name: "recordNav",
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

.top-nav {
}
</style>
