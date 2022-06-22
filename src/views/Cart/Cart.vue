<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import CartList from '@/views/Cart/childCompos/cartList.vue'
export default {
  components:{
    NavBar,
    CartList
  },
  computed:{
    cartLength(){
      return this.$store.getters.cartLength
      }
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>