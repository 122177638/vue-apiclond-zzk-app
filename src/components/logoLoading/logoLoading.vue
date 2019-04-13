<template>
  <div class="logoLoading-box">
    <img
      :src="item"
      v-for="(item, index) in imgData"
      :key="index"
      class="loading-img"
      alt=""
      v-show="index === imgIndex"
    />
    <p class="loading-point" v-if="isTip">加载中...</p>
  </div>
</template>

<script>
export default {
  props: {
    isloading: {
      type: Boolean,
      default: true
    },
    isTip: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imgIndex: 0,
      countTimer: null,
      imgData: [
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png"),
        require("./loading-img/loading.png")
      ]
    };
  },
  created() {
    this.countTimer = setInterval(() => {
      this.imgIndex++;
      if (this.imgIndex > 8) {
        this.imgIndex = 1;
      }
    }, 100);
  },
  destroyed() {
    clearInterval(this.countTimer);
    this.countTimer = null;
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.logoLoading-box {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-img {
    width: 26px;
    height: 26px;
    display: block;
  }
  .loading-point {
    font-size: 14px;
    color: #b1b1b1;
    margin-left: 5px;
  }
}
</style>
