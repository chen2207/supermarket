<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view/>
    <tab-control :titles="['流行','新款','经典']" class="tab-control"></tab-control>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import {getHomeMultidata} from '@/network/home.js'
import HomeSwiper from '@/views/Home/childComps/HomeSwiper.vue'
import RecommendView from '@/views/Home/childComps/RecommensView.vue'
import FeatureView from '@/views/Home/childComps/FeatureView.vue'
import TabControl from '@/components/content/TabControl/TabControl.vue'
export default {
  components:{
    NavBar,
    RecommendView,
    HomeSwiper,
    FeatureView,
    TabControl
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created(){
    // 请求多个数据
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home {
    padding-top:44px;
  } 
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index:1;
  }
  .tab-control {
    position: sticky;
    top:44px;
  }
</style>