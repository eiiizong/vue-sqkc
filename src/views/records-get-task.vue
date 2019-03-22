<template>
  <div class="records-get-task">
    <div class="records" v-if="pageData">
      <Card v-for="(item, index) in pageData" :key="index"></Card>
    </div>
    <div class="no-records" v-else>
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
import Card from "../components/card/card.vue";
export default {
  name: "RecordsGetTask",
  data() {
    return {
      pageData: [
        {
          id: 0,
          title: "下载APP获佣金",
          content: "下载某某APP获得相对佣金，可邀请组员一起...",
          deta: "12:34"
        },
        {},
        {},
        {},
        {},
        {}
      ]
    };
  },
  created() {},
  methods: {},
  components: {
    Card
  }
};
</script>

<style lang="less">
@import url(../assets/less/variable.less);
.records-get-task {
}
</style>
