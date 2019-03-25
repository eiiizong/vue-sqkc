<template>
  <div class="his-team-members">
    <div class="top">
      <TopNav :props="topNavData"></TopNav>
    </div>
    <div class="content">
      <div class="warpper">
        <CellTeamNumber
          v-for="(item, index) in numbers"
          :key="index"
          :props="item"
        ></CellTeamNumber>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import CellTeamNumber from "../components/cell-team-number/cell-team-number.vue";

let teamNumbers = 0;

export default {
  name: "hisTeamMembers",
  data() {
    return {
      topNavData: {
        title: `他的组员`,
        hasGoBack: true,
        color: "#050505",
        bgc: "#fff"
      },
      numbers: [
        {
          name: "eiizong",
          levelClassName: "one",
          levelProps: "学员一级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "two",
          levelProps: "学员二级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "three",
          levelProps: "学员三级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "one",
          levelProps: "学员一级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "two",
          levelProps: "学员二级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "three",
          levelProps: "学员三级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "one",
          levelProps: "学员一级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "two",
          levelProps: "学员二级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "three",
          levelProps: "学员三级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "one",
          levelProps: "学员一级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "two",
          levelProps: "学员二级",
          userImg: ""
        },
        {
          name: "eiizong",
          levelClassName: "three",
          levelProps: "学员三级",
          userImg: ""
        }
      ]
    };
  },
  created() {
    let num = this.numbers.length || 0;
    this.topNavData.title = `他的组员(${num})`;
  },
  components: {
    TopNav,
    CellTeamNumber
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.his-team-members {
  width: 100%;
  height: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .top {
    padding-top: @top-nav-height;
  }
  .content {
    flex: 1;
    width: 100%;
    overflow: hidden;
    .warpper {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 0 @30px;
    }
  }
}
</style>
