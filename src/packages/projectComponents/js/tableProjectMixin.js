// eslint-disable-next-line
export function getSummaries(param) {
  const { columns, data } = param;
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "合计";
      return;
    }
    const values = data.map((item) => Number(item[column.property]));
    if (!values.every((value) => isNaN(value))) {
      sums[index] = values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0);
    } else {
    }
  });
  return sums;
}
export default {
  props: {
    tableId: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    tableColumnTitles: {
      // 表头
      type: Array,
      required: true,
    },
    tableDataProp: {
      // 表格数据
      type: Array,
      default: () => [],
    },
    arraySpanMethod: {
      // 单元格合并
      type: Function,
      default: () => {},
    },
    showSummary: {
      // 合计
      type: Boolean,
      default: false,
    },
    // summaryColumn: {
    //   // 合计列数
    //   type: Number,
    //   default: 1
    // },
    getSummaries: {
      // 合计方法
      type: Function,
      default: getSummaries,
    },
    summaryName: {
      // 组件class名字
      type: String,
      default: "tablePro",
    },
    resizable: {
      // 表格是否可以拖动
      type: Boolean,
      default: false,
    },
    showHeader: {
      // 是否显示表头
      type: Boolean,
      default: true,
    },
    placeholderText: {
      // 提示语
      type: String,
      default: "请输入",
    },
    // 以下为表格样式
    tableHeaderCellHeight: {
      type: String,
      default: "32px",
    },
    tableHeaderCellTextAlign: {
      type: String,
      default: "left",
    },
    tableHRowStyle: {
      type: Function,
      default: () => {},
    },
    tableCellHeight: {
      type: String,
      default: "32px",
    },
    tableCellTextAlign: {
      type: String,
      default: "left",
    },
    tableHeight: {
      type: String,
      default: "100%",
    },
    columnColorArr: {
      // 列的颜色
      type: Array,
      default: () => [],
    },
    cellStyle: {
      type: Function,
      default: () => {},
    },
    enableEdit: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    tableRowStyle({ row, rowIndex }) {
      return "";
    },
    tableHeaderRowStyle({ row, rowIndex }) {
      const temp = this.tableHRowStyle({ row, rowIndex });
      if (temp) {
        return temp;
      }
      return "";
    },
    tableHeaderCellStyle({ row, column, rowIndex, columnIndex }) {
      return `height:${this.tableHeaderCellHeight};text-align:${this.tableHeaderCellTextAlign};background-color:#F8F9FB;color:#333333;font-weight:400;font-size:12px;`;
    },
    tableCellStyle({ row, column, rowIndex, columnIndex }) {
      let commonStyle = "";
      let style = "";
      if (this.enableEdit) {
        commonStyle = `
          height:${this.tableCellHeight};
          text-align:${this.tableCellTextAlign};
          font-size:12px
        `;
        this.columnColorArr.forEach((item, index) => {
          if (columnIndex === index) {
            style = `background: ${item.bg};`;
          }
        });
      } else {
        commonStyle = `
          background-color:#F8F9FB;
          height:${this.tableCellHeight};
          text-align:${this.tableCellTextAlign};
          font-size:12px
        `;
      }
      if (!this.columnColorArr.length) {
        return commonStyle;
      }
      const temp = this.cellStyle({ row, column, rowIndex, columnIndex });
      if (temp === "") {
        return style + commonStyle;
      }
      return style + commonStyle + temp;
    },
  },
};
