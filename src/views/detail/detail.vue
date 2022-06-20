<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComponents/DetailNavBar.vue'
import DetailSwiper from '@/views/detail/childComponents/detailSwaper.vue'
import DetailBaseInfo from '@/views/detail/childComponents/DetailBaseInfo.vue'
import DetailShopInfo from '@/views/detail/childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from '@/views/detail/childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from '@/views/detail/childComponents/DetailParamInfo.vue'
import {getDetail,Goods,Shop,GoodsParam} from '@/network/detail.js'
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
  },
  data(){
    return {
      iid:null,
      topImages:[],//轮播图图片
      goods:{},
      shop:{},
      paramInfo:{},
      detailInfo:{},
    }
  },
  created(){
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      console.log(res.result);
      this.topImages=res.result.itemInfo.topImages
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      this.shop = new Shop(res.result.shopInfo)
      this.detailInfo=res.result.detailInfo
      this.paramInfo=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    padding-bottom: 44px;
  }
  .content {
    height: calc(100% - 44px);
  }
  .detail-nav {
    position: relative;
    z-index:10;
    background-color: #fff;
  }
</style>