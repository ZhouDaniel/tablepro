

## 参数

| 参数                     | 说明               | 类型     | 默认值           |
| ------------------------ | ------------------ | -------- | ---------------- |
| tableId                  | 表格id             | String   |                  |
| loading                  | 加载框             | Boolean  | false            |
| tableColumnTitles        | 表头               | Array    |                  |
| tableDataProp            | 表格数据           | Array    | []               |
| arraySpanMethod          | 单元格合并方法     | Function | () => {}         |
| showSummary              | 合计               | Boolean  | false            |
| getSummaries             | 合计方法           | Function | 默认计算一列的和 |
| resizable                | *表格是否可以拖动* | Boolean  | false            |
| showHeader               | 是否显示表头       | Boolean  | true             |
| placeholderText          | 提示语             | String   | 请输入           |
| tableHeaderCellHeight    | 表头单元格高度     | String   | 32px             |
| tableHeaderCellTextAlign | 表头文本对齐方式   | String   | left             |
| tableCellHeight          | 单元格高度         | String   | 32px             |
| tableCellTextAlign       | 文本对齐方式       | String   | left             |
| tableHeight              | 表格高度           | String   | 100%             |
| columnColorArr           | 列的颜色           | Function | []               |
| cellStyle                | 单元格方法         | Function | () => {}         |
| enableEdit               | 能否编辑           | Boolean  | true             |
|                          |                    |          |                  |

## 方法

| 方法        | 说明                                       | 回调参数                                                   |
| ----------- | ------------------------------------------ | ---------------------------------------------------------- |
| inputChange | input的change事件（在 Input 值改变时触发） | （val, scope**.**$index, scope**.**row, scope**.**column） |

## tableDataProp 示例
```js
tableDataProp: [
  {
    id: "1",
    name: "张三",
    age: 20,
    weight: '120'
  },
  {
    id: "2",
    name: "李四",
    age: 30,
    weight: '150'
  },
],
```

## tableColumnTitles 示例（多表头组件）
```js
[
  {
    label: "编号",
    prop: "id",
    width: "100px",
    // minWidth: 1,
    inputInfo: { inputCategory: "text" }, // input(默认), inputNumber, text, select, 四种值
  },
  { label: "姓名", prop: "name" },
  {
    label: "爱好",
    prop: "hobby",
    children: [
      { label: "游泳", prop: "swimming" },
      {
        label: "国家",
        prop: "country",
        options: [
          {
            optionLabel: "美国",
            optionValue: "American",
          },
          {
            optionLabel: "中国",
            optionValue: "China",
          },
          {
            optionLabel: "法国",
            optionValue: "France",
          },
        ],
        inputInfo: { inputCategory: "select" },
      },
      {
        label: "音乐",
        prop: "music",
        children: [
          {
            label: "左手",
            prop: "knight",
            children: [
              {
                label: "占比",
                prop: "zb",
                inputInfo: { inputCategory: "inputNumber", maxlength: 9 },
              },
              {
                label: "小菜",
                prop: "xc",
              },
            ],
          },
          { label: "右手", prop: "classical" },
        ],
      },
    ],
  },
]
```




