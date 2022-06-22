<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titlesClick="titlesClick" ref="detailnav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComponents/DetailNavBar.vue'
import DetailSwiper from '@/views/detail/childComponents/detailSwaper.vue'
import DetailBaseInfo from '@/views/detail/childComponents/DetailBaseInfo.vue'
import DetailShopInfo from '@/views/detail/childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from '@/views/detail/childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from '@/views/detail/childComponents/DetailParamInfo.vue'
import DetailCommentInfo from '@/views/detail/childComponents/DetailCommentInfo.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import DetailBottomBar from '@/views/detail/childComponents/DetailBottomBar.vue'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail.js'
import Scroll from '@/components/common/srcoll/scroll.vue'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  data(){
    return {
      iid:null,
      topImages:[],//轮播图图片
      goods:{},
      shop:{},
      paramInfo:{},
      detailInfo:{},
      commentInfo:{},
      recommends:[],
      titleArr:new Map(),
      topYs:[],
      // 传给nav-bar的决定滑动导航栏切换
      scrollIndex:'',
      isMainNavShow:false,
    }
  },
  created(){
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      this.topImages=res.result.itemInfo.topImages
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      this.shop = new Shop(res.result.shopInfo)
      this.detailInfo=res.result.detailInfo
      this.paramInfo=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
      // 评论信息
      if(res.result.cRate !== 0){
        this.commentInfo = res.result.rate.list[0]
      }
    })
    getRecommend().then(res=>{
      this.recommends=res.data.list
    })
    this.titleArr.set('商品',0)
    this.titleArr.set('参数',1)
    this.titleArr.set('评论',2)
    this.titleArr.set('推荐',3)
    // 决定主导航栏是否显示
    this.$bus.$emit('isMainNavShow',!this.isMainNavShow)
  },
  destroyed(){
    this.$bus.$emit('isMainNavShow',this.isMainNavShow)
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.scroll.refresh()
      this.topYs=[]
      this.topYs.push(0)
      this.topYs.push(this.$refs.param.$el.offsetTop)
      this.topYs.push(this.$refs.comment.$el.offsetTop)
      this.topYs.push(this.$refs.recommend.$el.offsetTop)
    },
    titlesClick(item){
      var y=0
      this.$refs.scroll.scroll.scrollTo(0,-this.topYs[this.titleArr.get(item)],200)
    },
    contentScroll(position){
      const posY=-position.y
      if(posY>=0&&posY<this.topYs[1])
        this.scrollIndex='商品'
      else if(posY>=this.topYs[1]&&posY<this.topYs[2])
        this.scrollIndex='参数'
      else if(posY>=this.topYs[2]&&posY<this.topYs[3])
        this.scrollIndex='评论'
      else
        this.scrollIndex='推荐'
      this.$refs.detailnav.curitem = this.scrollIndex
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      
      this.$store.commit('addCart',product)
    }
  },
  mounted(){
    this.$bus.$on('detailitemImageLoad',()=>{
      try{
      this.$refs.scroll.scroll.refresh()
      }catch(err){
      }
    })
  },
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
  .detail-nav {
    position: relative;
    z-index:10;
    background-color: #fff;
  }
</style>