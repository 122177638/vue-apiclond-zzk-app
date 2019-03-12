<template>
  <div class="home-container">
    <main class="home-main">
      <router-view />
    </main>
    <footer>
      <Tabbar :tabList="tabList"></Tabbar>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from "@/components/tabbar/tabbar.vue";

export default {
  name: "home",
  components: {
    Tabbar
  },
  data() {
    return {
      tabList: [
        {
          title: "首页",
          path: "/",
          icon: require("@/assets/img/tabbar/home_gray.png"),
          icon_press: require("@/assets/img/tabbar/home.png")
        },
        {
          title: "视频",
          path: "/page02",
          icon: require("@/assets/img/tabbar/video_gray.png"),
          icon_press: require("@/assets/img/tabbar/video.png")
        },
        {
          title: "排行",
          path: "/page03",
          icon: require("@/assets/img/tabbar/rank_gray.png"),
          icon_press: require("@/assets/img/tabbar/rank.png")
        },
        {
          title: "我的",
          path: "/page04",
          icon: require("@/assets/img/tabbar/my_gray.png"),
          icon_press: require("@/assets/img/tabbar/my.png")
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-main {
  flex: 1;
  overflow: hidden;
  // overflow-y: scroll;
  // -webkit-overflow-scrolling: touch;
  // scroll-behavior: smooth;
}
</style>
