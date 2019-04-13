<template>
  <div ref="myCanvas" class="canvas-box" style="width:100%;height:100%"></div>
</template>

<script>
// 根据type动态引入echarts依赖
import importEcharts from "./echarts-type";
// 引入核心
import * as echarts from "echarts/lib/echarts";

export default {
  props: {
    // option值 使用v-model双向通信，解决异步。
    value: {
      type: Object,
      required: true
    },
    // 图形类型(请记得按需引入相关依赖 https://github.com/apache/incubator-echarts/blob/master/index.js )
    type: {
      type: String,
      default: "pie"
    },
    isShowLoading: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    options: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  watch: {
    options(nowval) {
      this.myCharts.setOption({ ...nowval }); // 赋值变化值
      this.isShowLoading && this.hideLoading(); // 隐藏loading
    }
  },
  created() {
    // 引入echarts类型相关依赖 返回初始option
    this.InitOptions = importEcharts(this.type);
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      // 初始化echarts
      this.myCharts = echarts.init(this.$refs.myCanvas);
      this.isShowLoading && this.showLoading();
      // 设置options
      this.myCharts.setOption({ ...this.options });
    },
    showLoading() {
      this.myCharts.showLoading({
        text: "加载中...",
        maskColor: "rgba(255, 255, 255, 0.8)",
        color: "#FFC042",
        textColor: "#282828",
        zlevel: 0
      });
    },
    hideLoading() {
      this.myCharts.hideLoading();
    }
  }
};
</script>

<style></style>
