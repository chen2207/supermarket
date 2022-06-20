<template>
  <detail-swiper class="detail-swiper-list" >
    <detail-swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </detail-swiper-item>
  </detail-swiper>
</template>

<script>
import DetailSwiper from '@/components/common/swiper/Swiper.vue'
import DetailSwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  components:{
    DetailSwiper,
    DetailSwiperItem,
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detail-swiper-list {
    height: 300px;
    overflow: hidden;
  }
</style>