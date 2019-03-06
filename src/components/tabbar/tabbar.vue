<template>
  <ul class="tabbar-list">
    <router-link
      v-for="(item, index) in tabList"
      :key="index"
      :to="item.path"
      :exact="
        $route.path === getExactPath
          ? false
          : item.path !== getExactPath
          ? false
          : true
      "
      @click.native="tabActiveIndex = index"
      tag="li"
      class="tabbar-item"
    >
      <img
        :src="tabActiveIndex === index ? item.icon_press : item.icon"
        class="tabbar-icon"
      />
      <h3 class="tabbar-name">
        {{ item.title }}
      </h3>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tabActiveIndex: 0,
      tabList: [
        {
          title: "首页",
          path: "/",
          icon: require("./home_gray.png"),
          icon_press: require("./home.png")
        },
        {
          title: "视频",
          path: "/page02",
          icon: require("./video_gray.png"),
          icon_press: require("./video.png")
        },
        {
          title: "排行",
          path: "/page03",
          icon: require("./rank_gray.png"),
          icon_press: require("./rank.png")
        },
        {
          title: "我的",
          path: "/page04",
          icon: require("./my_gray.png"),
          icon_press: require("./my.png")
        }
      ]
    };
  },
  created() {
    this.tabActiveIndex = this.tabList.findIndex(
      item => item.path === this.$route.path
    );
  },
  computed: {
    getExactPath() {
      return this.tabList && this.tabList[0].path;
    }
  }
};
</script>

<style lang="less" scoped>
.tabbar-list {
  display: flex;
  box-sizing: border-box;
  border-top: 1px solid #efefef;
  background-color: #ffffff;
  .tabbar-item {
    flex: 1;
    height: 50px;
    position: relative;
    .tabbar-icon {
      width: 25px;
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translate(-50%);
    }
    .tabbar-name {
      box-sizing: border-box;
      font-size: 10px;
      text-align: center;
      line-height: 1.5;
      padding-top: 32px;
    }
    &.router-link-active {
      color: #ff7d30;
    }
  }
}
</style>
