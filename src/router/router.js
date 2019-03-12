import Vue from "vue";
import Router from "vue-router";

// tarBar ----- 子页面
import TabBarView from "@/views/tabBarView/tabBarView.vue";
import Page01 from "@/views/tabBarView/subviews/page01.vue";
import Page02 from "@/views/tabBarView/subviews/page02.vue";
import Page03 from "@/views/tabBarView/subviews/page03.vue";
import Page04 from "@/views/tabBarView/subviews/page04.vue";

// 内嵌组件
import HeadInfoDetails from "@/views/headInfoDetails/headInfoDetails.vue";
// () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
Vue.use(Router);

const router = new Router({
  /**
   * name: 组件名称 (需要开启缓存，路由组件名称与组件内名称必须一致，区分大小写)
   * meta：{
   *  title: 页面标题，
   *  keepAlive：是否开启缓存（开启缓存是组件内name，所以这里需要和routes的name配合）
   *  isTransition: 是否开启过渡动画
   * }
   */
  routes: [
    {
      path: "/",
      // name: "home",
      component: TabBarView,
      children: [
        {
          path: "",
          name: "page01",
          component: Page01
        },
        {
          path: "/page02",
          name: "page02",
          component: Page02
        },
        {
          path: "/page03",
          name: "page03",
          component: Page03
        },
        {
          path: "/page04",
          name: "page04",
          component: Page04
        }
      ]
    },
    {
      path: "/headInfoDetails",
      name: "headInfoDetails",
      component: HeadInfoDetails,
      meta: {
        title: "信息详情页",
        isTransition: true
      }
    }
  ]
});

export default router;
