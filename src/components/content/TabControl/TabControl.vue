<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" 
    :class="{active: index===curIndex}" @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      curIndex:0,
    }
  },
  methods:{
    changeIndex(index){
      this.curIndex=index
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .tab-control-item {
    flex: 1;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
    padding-bottom: 5px;
  }
</style>