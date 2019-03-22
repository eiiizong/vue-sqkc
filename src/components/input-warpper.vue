<template>
  <div class="input-warrper">
    <label :for="inputAttr.for">
      <i class="icon" :class="'icon-tel' + inputAttr.for"></i>
    </label>
    <input class="input" :type="inputAttr.type" :id="inputAttr.for" :placeholder="inputAttr.placeholder" />
  </div>
</template>

<script>
export default {
  name: "inputWarrper",
  props: {
    
  },
  data() {
    return {
      inputAttr: {
        type: 'text',
        for: 'tel',
        placeholder: '请输入手机号'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../assets/less/variable.less);
.input-warrper {
  display: block;
  width: 100%;
  position: relative;
  .input {
    display: block;
    width: 100%;
  }
}
</style>
