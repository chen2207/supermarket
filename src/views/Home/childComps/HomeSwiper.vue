<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  components:{
    Swiper,
    SwiperItem,
  },
  props:['banners'],
  methods:{
    imageload(){
      this.$emit('swiperImageLoad')
    }
  }
}
</script>

<style scoped>

</style>