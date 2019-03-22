<template>
  <div class="my">
    
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";

export default {
  name: "my",
  data() {
    return {
      isPassword: true,
      isSendCode: false,
      timeNumber: 60
    };
  },
  created() {},
  methods: {
    
  },
  components: {
    TopNav
  }
};
</script>

<style lang="less">
@import url(../assets/less/variable.less);

.index {
  background-color: #f8f8f8;
  padding-bottom: @90px;

}
</style>
