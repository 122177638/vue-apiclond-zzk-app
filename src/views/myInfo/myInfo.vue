<template>
  <section class="myInfo_container">
    <Header></Header>
    <van-pull-refresh
      class="myInfo_content"
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <p style="padding:20px" v-for="(item, index) in 40" :key="index">
        刷新次数: {{ count + index }}
      </p>
    </van-pull-refresh>
  </section>
</template>

<script>
import { PullRefresh } from "vant";
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header,
    [PullRefresh.name]: PullRefresh
  },
  data() {
    return {
      isLoading: false,
      count: 0
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
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
  .myInfo_content {
    flex: 1;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
  }
}
</style>
