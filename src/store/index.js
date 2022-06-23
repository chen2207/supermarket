import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    addCart(state, payload) {
      let oldproduct = null
      for (let item of state.cartList) {
        if (item.iid === payload.iid) {
          oldproduct = item
        }
      }
      if (oldproduct) {
        oldproduct.count += 1
      } else {
        payload.count = 1
        state.cartList.push({ ...payload, checked: false })
      }
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
export default store