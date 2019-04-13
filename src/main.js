import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
// import "./registerServiceWorker"; // pwa
import "@/common/styles/base.css"; // 样式初始化
import "@/common/js/rem.js"; // 引入rem自适应
import "video.js/dist/video-js.css"; // 引入video.css
import "swiper/dist/css/swiper.min.css"; // 引入swiper.css
import "../public/script/api.js"; // 引入apiCloud-api
import * as method from "@/common/js/mixin.js"; // 引入全局方法
import API from "@/server/apis.js"; // 引入api接口
import VConsole from "vconsole";
import Navigation from "vue-navigation";
import { Lazyload } from "vant";
import BetterScroll from "@/components/better-scroll/better-scroll.vue";

// 全局引入Bscroll组件
Vue.component("Better-scroll", BetterScroll);
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

// const isApp = true; // 手动切换
// alert(window.navigator.userAgent);
// 该判断只在云编译环境下才有效 使用isApp变量手动设置环境
if (window.navigator.userAgent.match(/APICloud/i)) {
  window.apiready = function() {
    process.env.NODE_ENV === "development" && new VConsole();
    // 将API链接Vue原型，后续通过this.$APICLOUD代替window.api
    Vue.prototype.$APICLOUD = window.api;
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  };
} else {
  process.env.NODE_ENV === "development" && new VConsole();
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}
