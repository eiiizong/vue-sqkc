<template>
  <div class="get-cash">
    <TopNav :props="topNavData"></TopNav>
    <!-- <div>{{money}}</div> -->
    <form action="">
      <InputWarpper
        inputType="select"
        label="提现到"
        :selectOptions="selectOptionsData"
      ></InputWarpper>

      <InputWarpper
        type="number"
        placeholder="请输入提现金额"
        labelFor="money"
        v-model="money"
        label="提现金额"
      ></InputWarpper>

      <InputWarpper
        type="text"
        label="持卡人"
        placeholder="请输入持卡人姓名"
        labelFor="cardName"
        v-model="cardName"
      ></InputWarpper>

      <InputWarpper
        inputType="select"
        label="银行名称"
        :selectOptions="selectOptionsBarkData"
      ></InputWarpper>

      <InputWarpper
        type="number"
        label="银行卡号"
        placeholder="请输入银行卡号"
        labelFor="cardNumber"
        v-model="cardNumber"
      ></InputWarpper>
    </form>
  </div>
</template>

<script>
import TopNav from "../components/top-nav/top-nav.vue";
import InputWarpper from "../components/input-warpper/input-warpper.vue";

export default {
  name: "getCash",
  data() {
    return {
      cardName: "",
      cardNumber: 0,
      money: 0,
      selectOptionsData: [
        {
          value: 0,
          name: "支付宝"
        },
        {
          value: 1,
          name: "微信"
        }
      ],
      selectOptionsBarkData: [
        {
          value: 0,
          name: "中国银行"
        },
        {
          value: 1,
          name: "农业银行"
        }
      ],

      topNavData: {
        title: "提现",
        bgc: "#fff",
        color: "#000",
        hasGoBack: true
      },
      inputs: [
        {
          labelBeforeIconClassName: "",
          labelAfterIconClassName: "",
          labelText: "提现金额"
        }
      ]
    };
  },
  methods: {
    input() {
      console.log($event);
    }
  },
  components: {
    InputWarpper,
    TopNav
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.get-cash {
  width: 100%;
  padding-top: @top-nav-height;
  form {
    padding-top: @20px;
  }
}
</style>
