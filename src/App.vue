<template>
  <div id="app">
    <p>多表头组件</p>
    <MultistageTable
      :tableColumnTitles="tableColumnTitlesZ3_demo"
      :tableDataProp="tableDataPropZ3_demo"
      :showSummary="true"
    ></MultistageTable>
    <p>竖形表格</p>
    <TableProVertical
      :tableDataProp="tableDataPropZ5_demo"
      :tableColumnTitles="tableColumnTitlesZ5_demo"
      :columnColorArr="columnColorArr2"
      :widthArr="widthArr"
      @selectChange="selectChange"
    ></TableProVertical>
    <p>常规表格</p>
    <table-pro
      :loading="loadingB"
      :tableColumnTitles="tableColumnTitlesZ2"
      :tableDataProp="tableDataPropZ2"
      :columnColorArr="columnColorArr2"
    ></table-pro>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tableDataPropZ3_demo: [
        {
          id: "1",
          name: "啊大叔",
          xc: "2",
          hiking: "3",
          swwing: "",
          zb: "5",
          classical: "6",
        },
        {
          id: "2",
          name: "adnk",
          xc: "12",
          hiking: "13",
          swwing: "",
          zb: "15",
          classical: "16",
        },
        {
          id: "3",
          name: "adnqdwqk",
          xc: "22",
          hiking: "23",
          swwing: "",
          zb: "35",
          classical: "34",
        },
      ],
      tableColumnTitlesZ3_demo: [
        {
          label: "艾迪",
          prop: "id",
          width: "100px",
          // minWidth: 1,
          inputInfo: { inputCategory: "text" },
        },
        { label: "姓名", prop: "name" },
        {
          label: "爱好",
          prop: "hobby",
          children: [
            { label: "希望", prop: "hiking" },
            {
              label: "游泳",
              prop: "swwing",
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
      ],
      tableDataPropZ5_demo: [
        {
          taskcategory: "种类1",
          taskname: "阿萨德123",
          workdatacount: "133",
          callsucrate: "",
          createName: "",
        },
        {
          taskcategory: "种类2",
          taskname: "方法是123",
          workdatacount: "133",
          callsucrate: "",
          createName: "",
        },
        {
          taskcategory: "种类3",
          taskname: "啊dads123",
          workdatacount: "133",
          callsucrate: "",
          createName: "",
        },
        {
          taskcategory: "种类4",
          taskname: "1阿迪达斯23",
          workdatacount: "133",
          callsucrate: "",
          createName: "",
        },
      ],
      tableColumnTitlesZ5_demo: [
        {
          prop: "taskcategory",
          label: "工单种类",
          width: "100px",
          // inputInfo: { inputCategory: 'text' }
        },
        {
          prop: "taskname",
          label: "工单名称",
          width: "100px",
          // inputInfo: { inputCategory: 'text' }
        },
        {
          prop: "workdatacount",
          label: "工单总数",
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
          prop: "callsucrate",
          label: "接通率",
          options: [
            {
              optionLabel: "武汉",
              optionValue: "wuhan",
            },
            {
              optionLabel: "江西",
              optionValue: "jiangxi",
            },
            {
              optionLabel: "北京",
              optionValue: "beijing",
            },
          ],
          inputInfo: { inputCategory: "select" },
        },
        { prop: "createName", label: "创建人" },
      ],
      columnColorArr2: [{ bg: "#F8F9FB" }],
      widthArr: [
        { minWidth: 2 },
        { minWidth: 2 },
        { minWidth: 1 },
        { minWidth: 1 },
        { minWidth: 1 },
      ],
      selectChange(event, index, row, column) {
        console.log(event, index, row, column);
      },
      loadingB: false,
      tableColumnTitlesZ2: [
        // 内部合规材料
        {
          prop: "key1",
          label: "准入要求",
          inputInfo: { inputCategory: "text" },
          minWidth: 1,
          width: "410px",
        },
        {
          prop: "key2",
          label: "本项目情况",
          // minWidth: 2
        },
        {
          prop: "key3",
          label: "是否符合",
          minWidth: 1,
          width: "200px",
        },
      ],
      tableDataPropZ2: [
        // 内部合规材料 - 3
        {
          key1: "指纳入标准、限定价格或租金的住房",
          key2: "",
          key3: "",
        },
        {
          key1: "本政策仅适用于经济适用住房、",
          key2: "",
          key3: "",
        },
        {
          key1: "项目资本金比例不低于20%。",
          key2: "",
          key3: "",
        },
        {
          key1: "房地产开发资质：。",
          key2: "",
          key3: "",
        },
        {
          key1: "贷款期限：不得超过5年。",
          key2: "",
          key3: "",
        },
        {
          key1: "抵押担保方式",
          key2: "",
          key3: "",
        },
        {
          key1: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          key2: "",
          key3: "",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
