<template>
  <div id="DetailNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="item in titles" :key="item" class="title-item"
        :class="{active:curitem==item}" @click="itemClick(item)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
export default {
  components:{
    NavBar,
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      curitem:'商品'
    }
  },
  methods:{
    itemClick(item){
      this.curitem=item
      this.$emit('titlesClick',item)
    },
    backClick(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex:1;
  }
  .active {
    color: red;
  }
  .back img{
    vertical-align: middle;
    width: 25%;
  }
</style>