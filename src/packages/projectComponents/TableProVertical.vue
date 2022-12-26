<template>
  <el-table
    :key="tableId"
    v-loading="loading"
    :class="summaryName"
    :data="tableColumnTitles"
    :span-method="arraySpanMethod"
    :cell-style="tableCellStyle"
    :header-cell-style="tableHeaderCellStyle"
    :row-style="tableRowStyle"
    :height="tableHeight"
    border
    :show-header="false"
    :cell-class-name="tableCellClassName"
  >
    <el-table-column
      :width="widthArr[0] && widthArr[0].width"
      :min-width="widthArr[0] && widthArr[0].minWidth"
      :resizable="resizable"
    >
      <template slot-scope="scope">
        <span :style="{ paddingLeft: scope.row.paddingLeft }">{{
          scope.row.label
        }}</span>
      </template>
    </el-table-column>
    <el-table-column
      v-for="(item, index) in tableDataProp"
      :key="index"
      :width="widthArr[index + 1] && widthArr[index + 1].width"
      :min-width="widthArr[index + 1] && widthArr[index + 1].minWidth"
      :resizable="resizable"
    >
      <template slot-scope="scope">
        <el-select
          v-if="
            scope.row.options &&
            scope.row.options.length &&
            scope.row.inputInfo &&
            scope.row.inputInfo.inputCategory === 'select'
          "
          v-model="item[scope.row.prop]"
          clearable
          :filterable="filterArr.indexOf(scope.$index) !== -1"
          placeholder="请选择"
          @visible-change="
            selectChange($event, scope.$index, scope.row, scope.column)
          "
          @change="optionChange($event, scope.$index, scope.row, scope.column)"
        >
          <template
            v-if="scope.row.optionType && scope.row.optionType === 'various'"
          >
            <el-option
              v-for="(option, optionIndex) in scope.row.options[
                scope.column.index - 1
              ]"
              :key="optionIndex + '-' + option.optionValue"
              :value="option.optionValue"
              :label="option.optionLabel"
            ></el-option>
          </template>
          <template v-else>
            <el-option
              v-for="(option, optionIndex) in scope.row.options"
              :key="optionIndex"
              :value="option.optionValue"
              :label="option.optionLabel"
            ></el-option>
          </template>
        </el-select>
        <div
          v-else-if="
            scope.row.inputInfo && scope.row.inputInfo.inputCategory === 'text'
          "
          class="inputCategory-text"
        >
          {{ item[scope.row.prop] }}
        </div>
        <el-input
          v-else-if="
            scope.row.inputInfo &&
            scope.row.inputInfo.inputCategory === 'inputNumber'
          "
          v-model="item[scope.row.prop]"
          :placeholder="scope.row.placeholderText || placeholderText"
          :maxlength="(item.inputInfo && item.inputInfo.maxlength) || 50"
          oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
          @change="inputChange($event, scope.$index, scope.row, scope.column)"
        ></el-input>
        <el-input
          v-else
          v-model="item[scope.row.prop]"
          :placeholder="scope.row.placeholderText || placeholderText"
          :maxlength="(item.inputInfo && item.inputInfo.maxlength) || 50"
          @change="inputChange($event, scope.$index, scope.row, scope.column)"
        ></el-input>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import tableProjectMixin from "./js/tableProjectMixin";
// import TableItemMini from './TableItemMini'

export default {
  name: "TableProVertical",
  // components: {
  //   TableItemMini
  // },
  mixins: [tableProjectMixin],
  props: {
    widthArr: {
      type: Array,
      default: () => [],
    },
    // 下拉框是否可以搜索
    filterArr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    tableCellClassName({ row, column, rowIndex, columnIndex }) {
      column.index = columnIndex;
    },
    selectChange(event, index, row, column) {
      this.$emit("selectChange", event, index, row, column);
    },
    optionChange(event, index, row, column) {
      this.$emit("optionChange", event, index, row, column);
    },
    inputChange(event, index, row, column) {
      this.$emit("inputChange", event, index, row, column);
    },
  },
  // watch: {
  // tableDataProp: {
  //   immediate: true,
  //   handler() {
  //     this.$nextTick(() => {
  //       console.log(this.summaryName)
  //       const tdPros = document.querySelectorAll(
  //         `.${this.summaryName} .el-table__footer-wrapper tr>td`
  //       )
  //       console.log(tdPros)
  //       console.log(this.summaryColumn)
  //       tdPros.length && (tdPros[0].colSpan = this.summaryColumn)
  //     })
  //   }
  // }
  // },
};
</script>
<style scoped src="./css/tableProjectStyle.css"></style>
