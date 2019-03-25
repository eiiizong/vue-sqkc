<template>
  <div class="task-to-receive">
    <div class="card-warpper">
      <CardTask></CardTask>
      <CardTask></CardTask>
    </div>
  </div>
</template>

<script>
import CardTask from "../components/card-task/card-task.vue";
export default {
  name: "taskToReceive",
  data() {
    return {};
  },
  components: {
    CardTask
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.task-to-receive {
  .card-warpper {
    padding: 0 @60px;
  }
}
</style>
