<template>
  <div>
    <el-select
      v-if="
        item.options &&
        item.options.length &&
        item.inputInfo &&
        item.inputInfo.inputCategory === 'select'
      "
      v-model="scopeRow[item.prop]"
      clearable
      placeholder="请选择"
    >
      <el-option
        v-for="(option, optionIndex) in item.options"
        :key="optionIndex"
        :value="option.optionValue"
        :label="option.optionLabel"
      ></el-option>
    </el-select>
    <div
      v-else-if="item.inputInfo && item.inputInfo.inputCategory === 'text'"
      class="inputCategory-text"
    >
      {{ scopeRow[item.prop] }}
    </div>
    <el-input
      v-else-if="
        item.inputInfo && item.inputInfo.inputCategory === 'inputNumber'
      "
      v-model="scopeRow[item.prop]"
      placeholder="请输入"
      :maxlength="(item.inputInfo && item.inputInfo.maxlength) || 50"
      oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
      @change="item.valueChange && item.valueChange(scopeRow[item.prop], item)"
    ></el-input>
    <el-input
      v-else
      v-model="scopeRow[item.prop]"
      placeholder="请输入"
      :maxlength="(item.inputInfo && item.inputInfo.maxlength) || 50"
      @change="inputChange"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: "MultistageTableItemMini",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    scopeRow: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    inputChange(e) {
      this.$emit("inputChange", e);
    },
  },
};
</script>
