<template>
  <div class="card-buy-course" v-if="props">
    <div class="img-warpper">
      <img src="../../assets/img/course-buy-01.jpg" alt="" />
    </div>
    <div class="info">
      <div class="title">{{ props.title }}</div>
      <div class="get-money">学币： {{ props.getMoney }} 元</div>
      <div class="price">
        <span class="new-price">{{ props.newPrice }}</span>
        <span class="old-price">{{ props.oldPrice }}</span>
      </div>
      <div class="btn-warpper">
        <router-link :to="props.path" class="btn">购买</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardBuyCourse",
  props: {
    props: Object
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);
@img-size: @210px;
.card-buy-course {
  width: 100%;
  background-color: #fff;
  border-radius: @20px;
  position: relative;
  height: @250px;
  margin-bottom: @24px;
  &.last-child {
    margin-bottom: 0;
  }
  .img-warpper {
    position: absolute;
    top: @20px;
    left: @32px;
    width: @img-size;
    height: @img-size;
    border-radius: @10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    padding: @20px 0 @20px @270px;
  }
  .title {
    font-size: @32px;
    font-weight: 700;
    line-height: 1;
    padding: @8px 0 @14px;
    color: #000;
  }
  .get-money {
    font-size: @26px;
    line-height: 1;
    color: #696969;
  }
  .price {
    position: absolute;
    left: @270px;
    bottom: @20px;
    font-size: @36px;
    font-weight: 700;
    color: #f00;
  }
  .new-price {
    margin-right: @24px;
    &::before {
      content: "¥";
      font-size: @30px;
    }
  }
  .old-price {
    color: #696969;
    font-size: @22px;
    font-weight: normal;
    text-decoration: line-through;
    &::before {
      content: "¥";
    }
  }
  .btn-warpper {
    position: absolute;
    padding: 0;
    right: @32px;
    bottom: @20px;
    .btn {
      width: @140px;
      height: @54px;
      line-height: @54px;
    }
  }
}
</style>
