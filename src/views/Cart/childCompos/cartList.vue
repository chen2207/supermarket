<template>
  <div class="cart-list">
    <cart-scroll class="content" ref="scroll">
      <cart-list-item v-for="item in $store.state.cartList" :key="item.iid" :itemInfo="item"></cart-list-item>
    </cart-scroll>
  </div>
</template>

<script>
import CartScroll from '@/components/common/srcoll/scroll.vue'
import CartListItem from '@/views/Cart/childCompos/cartListItem.vue'
export default {
  components:{
    CartScroll,
    CartListItem,
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
  },
}
</script>

<style scoped>
  .content {
    height: calc( 100% );
    overflow: hidden;
  }
  .cart-list {
    height: calc( 100vh - 44px - 49px );
    padding-bottom:49px;
  }
</style>