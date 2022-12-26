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
    :header-row-style="tableHeaderRowStyle"
    :row-style="tableRowStyle"
    :height="tableHeight"
    border
  >
    <template v-for="(item, index) in tableColumnTitles">
      <MultistageTableItem :item="item" :key="index" v-on="$listeners">
      </MultistageTableItem>
    </template>
  </el-table>
</template>
<script>
import tableProjectMixin from "./js/tableProjectMixin";
import MultistageTableItem from "./MultistageTableItem.vue";
export default {
  name: "MultistageTable",
  components: {
    MultistageTableItem,
  },
  mixins: [tableProjectMixin],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    tableItemMiniChange(e, index, row, column) {
      this.$emit("tableProChange", e, index, row, column);
    },
  },
};
</script>
<style scoped src="./css/tableProjectStyle.css"></style>
