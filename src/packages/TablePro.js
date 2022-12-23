import TablePro from "./projectComponents/TablePro.vue";

// 为组件提供 install 安装方法，供按需引入
TablePro.install = (Vue) => {
  Vue.component(TablePro.name, TablePro);
};

export default TablePro;
