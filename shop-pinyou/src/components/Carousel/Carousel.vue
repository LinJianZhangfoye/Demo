<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel, index) in List" :key="index">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import swiper from "swiper";
export default {
  name: "Carousel",
  props: {
    List: [],
  },
  components: {},
  methods: {},
  watch: {
    List: {
      handler() {
        immediate:true
        this.$nextTick(() => {
          new swiper(".swiper-container", {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
