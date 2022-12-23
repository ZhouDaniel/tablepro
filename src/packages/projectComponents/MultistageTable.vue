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
      <MultistageTableItem :item="item" :key="index"> </MultistageTableItem>
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
  created() {
    this.$on("handleMessage", function (data) {
      this.$emit("multistageTableChange", data);
    });
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped src="./css/tableProjectStyle.css"></style>
