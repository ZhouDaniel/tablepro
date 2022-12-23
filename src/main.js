import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN";
Vue.use(ElementUI, { locale });
import MultistageTable from "./packages/MultistageTable.js";
import TableProVertical from "./packages/TableProVertical.js";
import TablePro from "./packages/TablePro.js";
Vue.use(MultistageTable);
Vue.use(TableProVertical);
Vue.use(TablePro);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
