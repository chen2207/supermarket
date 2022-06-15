<template>
  <div class="tabber-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div  :class='{active: isActive}'>
       <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'Tabbaritem',
  props:{
    path:String
  },
  data(){
    return {
      // isActive:false,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err => {err})
    }
  }
}
</script>

<style scoped>
 .tabber-item {
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .tabber-item img {
    width: 24px;
    height: 24px;
  }
  .active {
    color: deeppink;
  }
</style>