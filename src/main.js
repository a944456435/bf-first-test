import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import MyPie from "@/components/pie.vue";
import PageHeader from "@/components/pageHeader";

import MyTable from "@/components/Table";

// 引入echarts
import myCharts from "echarts";

Vue.use(myCharts);

Vue.config.productionTip = false;
//全局注册组件
Vue.component("my-pie", MyPie);
Vue.component("my-table", MyTable);
Vue.component("my-pageHeader", PageHeader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
