import MultistageTable from "./projectComponents/MultistageTable.vue";
// 为组件提供 install 安装方法，供按需引入
MultistageTable.install = (Vue) => {
  Vue.component(MultistageTable.name, MultistageTable);
};
export default MultistageTable;
