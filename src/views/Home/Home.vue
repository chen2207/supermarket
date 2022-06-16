<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view/>
    <tab-control :titles="['流行','新款','经典']" class="tab-control"
                  @tabclick='tabClick'></tab-control>
    <goods-list :goods="goods[curIndex].list"></goods-list>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import HomeSwiper from '@/views/Home/childComps/HomeSwiper.vue'
import RecommendView from '@/views/Home/childComps/RecommensView.vue'
import FeatureView from '@/views/Home/childComps/FeatureView.vue'
import TabControl from '@/components/content/TabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import {getHomeMultidata,getHomeGoods} from '@/network/home.js'

export default {
  components:{
    NavBar,
    RecommendView,
    HomeSwiper,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      curIndex:'pop'
    }
  },
  created(){
   this.getHomeMultidata()
   this.getHomeGoods('pop')
   this.getHomeGoods('sell')
   this.getHomeGoods('new')
  },
  methods:{
    getHomeMultidata(){
      // 请求多个数据
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      // 请求商品数据
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        this.goods[type].list.push(...res.data.list)
    })
    },
    tabClick(index){
      switch(index){
        case 0:
          this.curIndex='pop'
          break
        case 1:
          this.curIndex='new'
          break
        case 2:
          this.curIndex='sell'
      }
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top:44px;
    margin-bottom: 54px;
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
    background-color: #fff;
    position: sticky;
    top:44px;
    z-index:1;
  }
</style>