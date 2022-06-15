import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home/Home.vue')
const Cart = () => import('@/views/Cart/Cart.vue')
const Category = () => import('@/views/Category/Category.vue')
const Profile = () => import('@/views/Profile/Profile.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/Cart', component: Cart },
    { path: '/Category', component: Category },
    { path: '/Profile', component: Profile },
  ]
})

export default router
