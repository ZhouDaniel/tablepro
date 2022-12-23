<template>
  <el-table-column
    v-if="item.children && item.children.length > 0"
    :width="item.width"
    :label="item.label"
    :resizable="resizable"
  >
    <multistage-table-item v-for="(item2, index) in item.children" :key="index" :item="item2" :prop="item2.prop">
      <template slot-scope="scope">
        <TableItemMini :item="item2" :scopeRow="scope.row" @inputChange="tableItemMiniChange($event, scope)"></TableItemMini>
      </template>
    </multistage-table-item>
  </el-table-column>
  <el-table-column v-else :label="item.label" :prop="item.prop" :width="item.width" :resizable="resizable">
    <template slot-scope="scope">
      <TableItemMini :item="item" :scopeRow="scope.row" @inputChange="tableItemMiniChange($event, scope)"></TableItemMini>
    </template>
  </el-table-column>
</template>
<script>
import TableItemMini from './TableItemMini'
export default {
  name: "MultistageTableItem",
  components: {
    TableItemMini
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    originalValueArr: { // 固定值
      type: Array,
      default: () => []
    },
    resizable: {
      // 表格是否可以拖动
      type: Boolean,
      default: false
    },
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
    tableItemMiniChange(val, scope) {
      this.dispatch('MultistageTable', 'handleMessage', {
        val: val,
        index: scope.$index,
        row: scope.row,
        column: scope.column
      })
      // this.$emit('multistage-table-item-change', val, scope.$index, scope.row, scope.column) // 不知为何父组件MultistageTable接收不到
    },

    // 👇用于替代$emit事件无法被父组件接收
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
  }
}
</script>
