<template>
  <div id="goods">
    <goods-list-item v-for="item in goods" :key="item.acm" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem.vue'
export default {
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GoodsListItem,
  }
}
</script>

<style>
  #goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 54px;
  }

</style>