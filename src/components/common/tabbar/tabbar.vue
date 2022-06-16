<template>
  <div>
    <div id='tabbar'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import '@/assets/css/base.css'
export default {
  name:'Tabbar',

}
</script>

<style scoped>
  #tabbar {
    display: flex;
    background-color: #f5f5f5;
    position: fixed;
    left: 0;
    right:0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .3);
    z-index: 9;
  }
</style>