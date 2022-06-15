<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:['recommends']
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
</style>