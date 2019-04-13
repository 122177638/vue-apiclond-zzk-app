import Vue from "vue";
import Router from "vue-router";

// tarBar ----- 子页面
import TabBarView from "@/views/tabBarView/tabBarView.vue";
// 懒加载
const Page01 = () =>
  import(/* webpackChunkName: "page01" */ "@/views/tabBarView/subviews/page01.vue");
const Page02 = () =>
  import(/* webpackChunkName: "page02" */ "@/views/tabBarView/subviews/page02.vue");
const Page03 = () =>
  import(/* webpackChunkName: "page03" */ "@/views/tabBarView/subviews/page03.vue");
const Page04 = () =>
  import(/* webpackChunkName: "page04" */ "@/views/tabBarView/subviews/page04.vue");

// 内嵌组件

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
      component: TabBarView,
      children: [
        {
          path: "",
          name: "page01",
          component: Page01,
          meta: {
            keepAlive: true
          }
        },
        {
          path: "/page02",
          name: "page02",
          component: Page02,
          meta: {
            keepAlive: true
          }
        },
        {
          path: "/page03",
          name: "page03",
          component: Page03,
          meta: {
            keepAlive: true
          }
        },
        {
          path: "/page04",
          name: "page04",
          component: Page04,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/profitShare",
      name: "profitShare",
      component: () =>
        import(/* webpackChunkName: "profitShare" */ "@/views/profitShare/profitShare.vue"),
      meta: {
        title: "分享赚",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/profitShareDetails",
      name: "profitShareDetails",
      component: () =>
        import(/* webpackChunkName: "profitShareDetails" */ "@/views/profitShare/profitShareDetails.vue"),
      meta: {
        title: "文章详情",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/videosDetails",
      name: "videosDetails",
      component: () =>
        import(/* webpackChunkName: "videosDetails" */ "@/views/videos/videosDetails.vue"),
      meta: {
        title: "视频详情",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/shareRule",
      name: "shareRule",
      component: () =>
        import(/* webpackChunkName: "profitShare" */ "@/views/shareRule/shareRule.vue"),
      meta: {
        title: "分享规则",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/systemSetup",
      name: "systemSetup",
      component: () =>
        import(/* webpackChunkName: "systemSetup" */ "@/views/systemSetup/systemSetup.vue"),
      meta: {
        title: "系统设置",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/msgCenter",
      name: "msgCenter",
      component: () =>
        import(/* webpackChunkName: "msgCenter" */ "@/views/msgCenter/msgCenter.vue"),
      meta: {
        title: "消息中心",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/msgCenterDetails/:typeId",
      name: "msgCenterDetails",
      component: () =>
        import(/* webpackChunkName: "msgCenterDetails" */ "@/views/msgCenter/msgCenterDetails.vue"),
      meta: {
        title: "消息中心详情",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/myWallet",
      name: "myWallet",
      component: () =>
        import(/* webpackChunkName: "myWallet" */ "@/views/myWallet/myWallet.vue"),
      meta: {
        title: "我的钱包",
        isTransition: true,
        keepAlive: true
      }
    },
    {
      path: "/myGang",
      name: "myGang",
      component: () =>
        import(/* webpackChunkName: "myGang" */ "@/views/myGang/myGang.vue"),
      meta: {
        title: "我的团队",
        isTransition: true,
        keepAlive: true
      }
    },
  ]
});

export default router;
