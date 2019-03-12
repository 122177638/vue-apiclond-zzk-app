<template>
  <section class="headInfoDetails-container">
    <van-nav-bar
      left-arrow
      @click-left="$router.go(-1)"
      style="padding-top:20px;"
      title="详情页"
    />
    <div style="text-align:center;line-height:50px;">头条信息详情页</div>
  </section>
</template>

<script>
import { NavBar, Icon } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  }
};
</script>

<style lang="less" scoped>
.headInfoDetails-container {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
