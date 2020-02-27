import Vue from 'vue'
import VueRouter from 'vue-router'
import Authentication from "../views/Authentication"
import Newsfeed from "../views/Newsfeed"
import Publish from "../views/Publish"
import Explore from "../views/Explore"
import About from "../views/About"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Authentication,
    name:"Authentication"
  },
  {
    path:"/home",
    component:Newsfeed,
    name:"home"
  },
  {
    path:"/publish",
    component:Publish,
    name:"publish"
  },
  {
    path:"/explore",
    component:Explore,
    name:"explore"
  },
  {
    path:"/about",
    component:About,
    name:"about"
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
