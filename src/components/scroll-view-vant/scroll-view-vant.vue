<template>
  <van-pull-refresh
    class="scroll-view-container"
    v-model="isRefresh"
    ref="scrollView"
    @refresh="onRefresh"
    success-text="刷新成功"
    :head-height="55"
  >
    <template slot="pulling">
      <LogoLoading></LogoLoading>
      <p class="loading-point">下拉即可刷新...</p>
    </template>
    <template slot="loosing">
      <LogoLoading></LogoLoading>
      <p class="loading-point">释放即可刷新...</p>
    </template>
    <template slot="loading">
      <LogoLoading></LogoLoading>
      <p class="loading-point">加载中...</p>
    </template>
    <!-- vant列表数据 -->
    <van-list
      v-model="isLoading"
      :finished="isFinished"
      :error.sync="isError"
      error-text="请求失败，点击重新加载"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <slot>
        <p style="padding:20px" v-for="(item, index) in 5" :key="index">
          刷新次数: {{ count + index }}
        </p>
      </slot>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { List, PullRefresh } from "vant";
import LogoLoading from "@/components/logoLoading/logoLoading.vue";

export default {
  components: {
    "van-pull-refresh": PullRefresh,
    "van-list": List,
    LogoLoading
  },
  props: {
    // 是否刷新成功
    VisRefresh: {
      type: Boolean,
      default: false
    },
    // 是否加载成功
    VisLoading: {
      type: Boolean,
      default: false
    },
    // 是否加载全部
    VisFinished: {
      type: Boolean,
      default: false
    },
    // 是否加载错误
    VisError: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRefresh: {
      get() {
        return this.VisRefresh;
      },
      set(nowVal) {
        this.$emit("update:VisRefresh", nowVal);
      }
    },
    isLoading: {
      get() {
        return this.VisLoading;
      },
      set(nowVal) {
        this.$emit("update:VisLoading", nowVal);
      }
    },
    isFinished: {
      get() {
        return this.VisFinished;
      },
      set(nowVal) {
        this.$emit("update:VisFinished", nowVal);
      }
    },
    isError: {
      get() {
        return this.VisError;
      },
      set(nowVal) {
        this.$emit("update:VisError", nowVal);
      }
    }
  },
  data() {
    return {
      count: 0
    };
  },
  mounted() {},
  methods: {
    onRefresh() {
      this.$emit("onRefresh");
    },
    onLoad() {
      this.$emit("onLoad");
    }
  }
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  // display: none;
  width: 0;
  height: 0;
  color: transparent;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  display: none !important;
}
.scroll-view-container {
  flex: 1;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  .loading-point {
    font-size: 13px;
    color: #989898;
    text-align: center;
    margin-top: 5px;
  }
  /deep/ .van-pull-refresh__head {
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .loading-more-box {
    height: 50px;
    line-height: 50px;
  }
}
</style>
