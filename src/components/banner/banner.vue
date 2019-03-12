<template>
  <section class="banner-container">
    <div class="swiper-container banner-swiper-container" ref="bannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-color:red;"></div>
        <div class="swiper-slide" style="background-color:blue;"></div>
        <div class="swiper-slide" style="background-color:green;"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination" ref="bannerSwiper_pagination"></div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(this.$refs.bannerSwiper, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "1.08",
        pagination: {
          el: this.$refs.bannerSwiper_pagination,
          clickable: true
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      });
    });
  }
};
</script>

<style lang="less">
.banner-swiper-container {
  height: 180px;
  background-color: #ffffff;
  .swiper-slide {
    border-radius: 5px;
  }
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    opacity: 1;
    background: #aaaaaa;
  }
  .swiper-pagination-bullet-active {
    width: 21px;
    height: 7px;
    border-radius: 3.5px;
    background: #ffffff;
  }
}
</style>
