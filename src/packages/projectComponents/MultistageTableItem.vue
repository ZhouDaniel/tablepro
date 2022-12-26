<template>
  <el-table-column
    v-if="item.children && item.children.length > 0"
    :width="item.width"
    :label="item.label"
    :resizable="resizable"
  >
    <multistage-table-item
      v-for="(item2, index) in item.children"
      :key="index"
      :item="item2"
      :prop="item2.prop"
      v-on="$listeners"
    >
    </multistage-table-item>
  </el-table-column>
  <el-table-column
    v-else
    :label="item.label"
    :prop="item.prop"
    :width="item.width"
    :resizable="resizable"
  >
    <template slot-scope="scope">
      <TableItemMini
        :item="item"
        :scopeRow="scope.row"
        @inputChange="tableItemMiniChange($event, scope)"
      ></TableItemMini>
    </template>
  </el-table-column>
</template>
<script>
import TableItemMini from "./TableItemMini";
export default {
  name: "MultistageTableItem",
  components: {
    TableItemMini,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    originalValueArr: {
      // 固定值
      type: Array,
      default: () => [],
    },
    resizable: {
      // 表格是否可以拖动
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    tableItemMiniChange(val, scope) {
      this.$emit("handleMessage", val, scope.$index, scope.row, scope.column);
    },
  },
};
</script>
