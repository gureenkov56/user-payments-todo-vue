import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import PaymentsList from "@/views/PaymentsList";



const routes = [
  {
    path: '/',
    name: 'home',
    component: UserList
  },
  {
    path: '/payments',
    name: 'payments',
    component: PaymentsList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
