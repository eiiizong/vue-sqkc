<template>
  <div class="input-warpper">
    <div class="label">
      <label :for="labelFor">
        <i
          class="icon"
          :class="props.labelBeforeIconClassName"
          v-if="props.labelBeforeIconClassName"
        ></i>
        <span v-if="label"> {{ label }} </span>
        <i
          class="icon"
          :class="props.labelAfterIconClassName"
          v-if="props.labelAfterIconClassName"
        ></i>
      </label>
    </div>
    <div class="input">
      <input
        v-if="inputType === 'input'"
        :type="type"
        :id="labelFor"
        :name="labelFor"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <!-- <div class="get-code" v-if="inputType === 'input'">
        get-code
      </div> -->
      <select v-if="inputType === 'select' && selectOptions.length !== 0">
        <option
          :value="item.id"
          v-for="(item, index) in selectOptions"
          :key="index"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputWarpper",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    labelFor: String,
    label: String,
    inputType: {
      type: String,
      default: "input"
    },
    props: {
      type: Object,
      default: function() {
        return {
          labelBeforeIconClassName: "",
          labelAfterIconClassName: ""
        };
      }
    },
    selectOptions: Array
  },
  data() {
    return {};
  },
  methods: {
    change() {
      // console.log($event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../../assets/less/variable.less);

@input-warpper-height: @88px;
.input-warpper {
  display: flex;
  width: 100%;
  position: relative;
  color: #000;
  min-height: @input-warpper-height;
  align-items: center;
  background-color: #fff;
  padding: 0 @36px;
  margin-bottom: @20px;
  &:last-child {
    margin-bottom: 0;
  }
  .label {
    display: inline-block;
    font-size: @30px;
    line-height: 1;
    margin-right: @10px;
    label {
      display: flex;
    }
  }
  .input {
    flex: 1;
    input {
      display: block;
      width: 100%;
      font-size: @30px;
      line-height: @40px;
      border: 0;
      padding: 0;
      text-align: right;
      color: #000;
    }
    select {
      line-height: @input-warpper-height;
      font-size: @30px;
    }
  }
}
</style>
