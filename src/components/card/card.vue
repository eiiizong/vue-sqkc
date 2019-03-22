<template>
  <nav class="card" v-if="d">
    <ul>
      <li v-for="(item, index) in d" :key="index">
        <div class="title clearfix">
          <span class="left text-one-ellipsis">下载某某APP</span>
        </div>
        <p class="text-one-ellipsis">下载某某APP获得相对佣金，可邀请组员一起下载某某APP获得相对佣金，可邀请组员一起...</p>
        <div class="clearfix link">
          <div class="left">今天 12:34</div>
          <div class="right">
            <router-link to="/"><span>查看详情</span><i class="icon icon-db-link"></i></router-link>
          </div>
        </div>
        <!-- <router-link :to="item.path"><span> {{ item.name }} </span></router-link> -->
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
      d: [
        {
          title: "2323",
          name: "任务获取"
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

.card {
  padding: 0 @30px;
  li {
    border-bottom: 1px solid #ededed;
    padding-top: @32px;
  }
  .title {
    font-size: @30px;
    font-weight: 700;
    color: #282828;
    line-height: 1;
    margin-bottom: @16px;
  }
  p {
    font-size: @24px;
    line-height: 1;
    color: #282828;
    margin-bottom: @24px;
  }
  .link {
    font-size: @22px;
    line-height: 1;
    color: #9a9a9a;
    padding-bottom: @24px;
  }
  a {
    color: #9a9a9a;
  }
  .icon-db-link {
    width: @22px;
    height: @22px;
    background: url(../../assets/img/svg/see-more.svg) no-repeat;
    background-size: 100%;
    margin-top: 2px;
    margin-left: 2px;
  }
}
</style>
