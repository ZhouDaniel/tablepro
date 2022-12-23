import TableProVertical from "./projectComponents/TableProVertical.vue";

// 为组件提供 install 安装方法，供按需引入
TableProVertical.install = (Vue) => {
  Vue.component(TableProVertical.name, TableProVertical);
};

export default TableProVertical;
