import VueRouter from 'vue-router'

//引入相应组件
import homeContainer from '../components/tabbar/home'
import menberContainer from '../components/tabbar/member'
import searchContainer from '../components/tabbar/search'
import shopcarContainer from '../components/tabbar/shopcar'
// import VueRouter from 'vue-router';

var router = new VueRouter({
  routes: [
    { path: '/home',component: homeContainer},
    { path: '/member',component: menberContainer},
    { path: '/search',component: searchContainer},
    { path: '/shopcar',component: shopcarContainer}
  ],
  linkActiveClass: 'mui-active'
})

export default router
