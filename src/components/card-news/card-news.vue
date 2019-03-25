<template>
  <div class="card-news" v-if="props">
    <h4 class="text-one-ellipsis">{{ props.title }}</h4>
    <p class="text-two-ellipsis">{{ props.content }}</p>
    <div class="time clearfix">
      <span class="left" v-if="props.time">发布于 {{ props.time }}</span>
      <div class="right">
        <router-link :to="props.path">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* 
  props 参数示例：

  {
    id: 723,
    title: "成都某工地发现UFO22",
    content: "这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新111",
    time: "2019.03.02",
    path: "/news"
  }

*/
export default {
  name: "cardNews",
  props: {
    props: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);

.card-news {
  display: block;
  width: 100%;
  background-color: #fff;
  border-radius: @20px;
  padding: 0 @28px;
  margin-bottom: @20px;
  &:last-child {
    margin-bottom: 0;
  }
  h4 {
    font-size: @32px;
    color: #000;
    line-height: 1;
    font-weight: 700;
    padding-top: @36px;
    padding-bottom: @12px;
  }
  p {
    font-size: @26px;
    font-weight: 500;
    line-height: @34px;
    max-height: @68px;
    color: #888;
    margin-bottom: @30px;
  }
  .time {
    font-size: @26px;
    font-weight: 500;
    line-height: 1;
    color: #b2b2b2;
    padding-bottom: @32px;
    a {
      display: inline-block;
      color: #b2b2b2;
    }
  }
}
</style>
