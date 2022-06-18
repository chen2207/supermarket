<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
    <scroll class="content" ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll" 
            :pullUpLoad="true"
            @pullingUp='pullingUp'>
      <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','经典']" class="tab-control"
                    @tabclick='tabClick'
                    ref="tabControl"></tab-control>
      <goods-list :goods="goods[curIndex].list"></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import HomeSwiper from '@/views/Home/childComps/HomeSwiper.vue'
import RecommendView from '@/views/Home/childComps/RecommensView.vue'
import FeatureView from '@/views/Home/childComps/FeatureView.vue'
import TabControl from '@/components/content/TabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/srcoll/scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'
import {getHomeMultidata,getHomeGoods} from '@/network/home.js'

export default {
  components:{
    NavBar,
    RecommendView,
    HomeSwiper,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      curIndex:'pop',
      isShow:false,
      tabOffsetTop:0,
      isTabFixed:false,
    }
  },
  created(){
   this.getHomeMultidata()
   this.getHomeGoods('pop')
   this.getHomeGoods('sell')
   this.getHomeGoods('new')
  },
  mounted(){
    this.$bus.$on('itemImageLoad',()=>{
      this.$refs.scroll.scroll.refresh()
    })
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
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        this.$refs.scroll.scroll.finishPullUp()
    }).catch(err=>err)
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
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      // 判断backTop是否显示
      this.isShow=position.y<-1000?true:false
      // 决定是否吸顶
      if(-position.y>this.tabOffsetTop){
        this.isTabFixed=true
      }else{
        this.isTabFixed=false
      }
    },
    pullingUp(){
      this.getHomeGoods(this.curIndex)
    },
    swiperImageLoad(){
      this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
    }
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
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
    z-index:-1;
  }
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } 
</style>