import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./registerServiceWorker"; // pwa
import "@/common/styles/base.css"; // 样式初始化
import "@/common/js/rem.js"; // 引入rem自适应
import "swiper/dist/css/swiper.min.css"; // 引入swiper.css
import "../public/script/api.js"; // 引入apiCloud-api
import * as method from "@/common/js/mixin.js"; // 引入全局方法
import API from "@/server/apis.js"; // 引入api接口
import VConsole from "vconsole";
import Navigation from "vue-navigation";
import { Lazyload } from "vant";
import Bscroll from "@/components/Bscroll/Bscroll.vue";

// 全局引入Bscroll组件
Vue.component("b-scroll", Bscroll);
// vant图片懒加载
Vue.use(Lazyload);

Vue.config.productionTip = false;
// 全局引入公用方法，也可以在组件中单独引入，推荐在组件中单独引入。
Vue.prototype.$METHOD = method;
// 全局引入API
Vue.prototype.$SERVER = API;
// 引入路由记录插件
Vue.use(Navigation, {
  router,
  moduleName: "navigation",
  keyName: "AS"
});

// window.apiready = function() {
//   new VConsole();
//   new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount("#app");
//   console.log(window.api);
// };
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
