<template>
  <div class="home-container">
    <main class="home-main">
      <router-view />
    </main>
    <footer>
      <V-tabbar></V-tabbar>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import VTabbar from "@/components/tabbar/tabbar.vue";

export default {
  name: "home",
  components: {
    VTabbar
  }
};
</script>

<style lang="less" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
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
