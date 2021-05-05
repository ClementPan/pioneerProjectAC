import Vue from 'vue'
import VueRouter from 'vue-router'
import Address from '../views/Address.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Address',
    component: Address
  },
  {
    path: '/shipping',
    name: 'shipping',
    component: () => import('../views/Shipping.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
