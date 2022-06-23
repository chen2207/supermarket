<template>
  <div class="cart-bottom-bar">
    <check-button class="public" @checkBtnClick="btnClick" v-model="isSelectAll"></check-button>
    <span class="public selectAll">全选</span>
    <span class="public sum">合计:</span>
    <span class="public money">￥{{totalPrice}}元</span>
    <div class="buy public">去计算({{numSum}})</div>
  </div>
</template>

<script>
import CheckButton from '@/views/Cart/childCompos/CheckButton.vue'
export default {
  components:{
    CheckButton,
  },
  data(){
    return {
      isChecked:false,
    }
  },
  methods:{
    btnClick(){
      // 1.判断是否有未选中的按钮
        let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);
        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
    },
  },
  computed:{
    isSelectAll(){
      return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
    },
     totalPrice() {
        const cartList = this.$store.getters.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      numSum(){
        const cartList = this.$store.getters.cartList;
         return cartList.filter(item => {
          return item.checked
        }).length
      }
  }
}
</script>

<style scoped>
  .cart-bottom-bar {
    height: 44px;
    /* background-color: red; */
    position: relative;
    bottom: 49px;
    z-index: 10;

  }
  .public {
     position: absolute;
     top: 12px;
  }
  .selectAll {
    left: 25px;
  }
  .sum {
    left: 80px;
  }
  .money {
    left: 120px;
  }
  .buy {
    top: 7px;
    right: 0;
    width: 80px;
    height: 70%;
    text-align: center;
    line-height: 30px;
    background-color: rgb(248, 91, 33);
    color: #fff;
    border-radius: 5px;
  }
</style>