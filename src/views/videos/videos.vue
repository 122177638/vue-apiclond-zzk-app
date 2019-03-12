<template>
  <section class="video-container">
    <Header></Header>
    <b-scroll
      class="video-main"
      ref="scroll"
      :pullDownRefresh="{ threshold: 50, stop: 50, txt: '刷新成功' }"
      :pullUpLoad="{
        threshold: 50,
        txt: { more: '下拉加载更多', noMore: '暂无更多数据' }
      }"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
    </b-scroll>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header
  },
  methods: {
    onPullingDown() {
      // 模拟更新数据
      console.log("pulling down and load data");
      setTimeout(() => {
        if (this._isDestroyed) {
          return;
        }
        if (false) {
          // 如果有新数据
          // this.questData();
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 2000);
    },
    onPullingUp() {
      // 更新数据
      console.log("pulling up and load data");
      setTimeout(() => {
        if (this._isDestroyed) {
          return;
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          // this.questData();
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1500);
    }
  }
};
</script>

<style lang="less" scoped>
.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .video-main {
    flex: 1;
  }
}
</style>
