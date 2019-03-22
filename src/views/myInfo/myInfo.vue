<template>
  <section class="myInfo_container">
    <Header></Header>
    <scroll-view-vant
      :VisLoading.sync="isLoading"
      :VisRefresh.sync="isRefresh"
      :VisFinished.sync="isFinished"
      :VisError.sync="isError"
      @onRefresh="onRefresh"
      @onLoad="onLoad"
    ></scroll-view-vant>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
import scrollViewVant from "@/components/scroll-view-vant/scroll-view-vant.vue";

export default {
  components: {
    Header,
    scrollViewVant
  },
  data() {
    return {
      isLoading: false,
      isRefresh: false,
      isFinished: false,
      isError: false,
      count: 0
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isRefresh = false;
      }, 500);
    },
    onLoad() {
      console.log(65465465);

      setTimeout(() => {
        // 加载状态结束
        this.isLoading = false;
        this.isFinished = true;
        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.isFinished = true;
        // }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.myInfo_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
