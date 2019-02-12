// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//引入mui
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

//导入自己的包
import router from './router/index.js'

//导入自己的app.vue
import app from '../src/App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c =>c(app),
  router
})
