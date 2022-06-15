<template>
  <div>
    <Tabbar>
      <Tabbaritem path='/home'>
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path='/category'>
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </Tabbaritem>
      <Tabbaritem path='/cart'>
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path='/profile'>
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar/tabbar.vue'
import Tabbaritem from '@/components/common/tabbar/tabbaritem.vue'
export default {
 components:{
    Tabbar,
    Tabbaritem,
  },
}
</script>

<style>

</style>