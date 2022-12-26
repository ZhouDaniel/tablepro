<template>
  <el-table
    v-loading="loading"
    :class="summaryName"
    :data="tableDataProp"
    :span-method="arraySpanMethod"
    :show-summary="showSummary"
    :summary-method="getSummaries"
    :cell-style="tableCellStyle"
    :header-cell-style="tableHeaderCellStyle"
    :row-style="tableRowStyle"
    :height="tableHeight"
    :show-header="showHeader"
    border
  >
    <el-table-column
      v-for="(item, index) in tableColumnTitles"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :min-width="item.minWidth"
      :resizable="resizable"
    >
      <template slot-scope="scope">
        <TableItemMini
          :item="item"
          :scopeRow="scope.row"
          @inputChange="
            tableItemMiniChange($event, scope.$index, scope.row, scope.column)
          "
        ></TableItemMini>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import tableProjectMixin from "./js/tableProjectMixin";
import TableItemMini from "./TableItemMini";
export default {
  name: "TablePro",
  components: {
    TableItemMini,
  },
  mixins: [tableProjectMixin],
  props: {
    dataWatch: {
      type: Array,
      default() {
        return null;
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    tableItemMiniChange(e, index, row, column) {
      this.$emit("tableProChange", e, index, row, column);
    },
  },
};
</script>
<style scoped src="./css/tableProjectStyle.css"></style>
