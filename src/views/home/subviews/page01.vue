<template>
  <section>
    <section class="banner">
      <van-swipe :autoplay="3000" indicator-color="white" class="vanSwiper">
        <van-swipe-item class="vanSwiper-item">1</van-swipe-item>
        <van-swipe-item class="vanSwiper-item">2</van-swipe-item>
        <van-swipe-item class="vanSwiper-item">3</van-swipe-item>
        <van-swipe-item class="vanSwiper-item">4</van-swipe-item>
      </van-swipe>
    </section>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style lang="less">
.vanSwiper {

}
.vanSwiper-item {
  width: 345px !important;
  text-align: center;
  background-color: red;
}
</style>
