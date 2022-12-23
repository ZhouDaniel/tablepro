import MultistageTable from "./packages/MultistageTable";
import TablePro from "./packages/TablePro";
import TableProVertical from "./packages/TableProVertical";

const components = [MultistageTable, TablePro, TableProVertical];

// 全局注册方法 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;

  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  // 支持使用标签的方式引入
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
};

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 具体的组件
  MultistageTable,
  TablePro,
  TableProVertical,
};
