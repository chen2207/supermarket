<template>
  <div class="cart-list">
    <cart-scroll class="content" ref="scroll">
      <!-- <cart-list-item v-for="item in $store.state.cartList" :key="item.iid" :product="item"></cart-list-item> -->
      <div>
        <item v-for="item in $store.state.cartList" :key="item.iid" :product="item"></item>
      </div>
    </cart-scroll>
  </div>
</template>

<script>
import CartScroll from '@/components/common/srcoll/scroll.vue'
// import CartListItem from '@/views/Cart/childCompos/cartListItem.vue'
import item from '@/views/Cart/childCompos/item.vue'
export default {
  components:{
    CartScroll,
    item,
    // CartListItem,
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
  .content {
    height: calc( 100% );
    overflow: hidden;
  }
  .cart-list {
    height: calc( 100vh - 44px - 49px );
  }
</style>