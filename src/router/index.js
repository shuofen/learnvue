import Vue from "vue"
import VueRouter from "vue-router"

const Home = ()=> import("views/home/Home")
const Cart = ()=> import("views/cart/Cart")
const Profile = ()=> import("views/profile/Profile")
const Category = ()=> import("views/category/Category")
const Surprise = ()=> import("views/surprise/Surprise")
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/surprise",
    component: Surprise
  }
]

const router = new VueRouter({
  routes
})

export default router