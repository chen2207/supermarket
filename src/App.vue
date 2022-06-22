<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar :class="{isNotShow:isMainNavShow}"></main-tab-bar>
  </div>  
</template> 

<script>
import MainTabBar from '@/components/content/mainTabbar.vue'
export default {
  components:{
    MainTabBar,
  },
  data(){
    return {
      isMainNavShow:false,
    }
  },
  created(){
    this.$bus.$on('isMainNavShow',(isMainNavShow)=>{
      this.isMainNavShow=isMainNavShow
    })
  }
}
</script>

<style scoped>
  @import './assets/css/base.css';
  .isNotShow {
    display: none;
  }
</style>