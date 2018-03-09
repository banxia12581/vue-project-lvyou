// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import OrderListPage from './pages/orderList'
import DetailChuPage from './pages/detail/chujing'
import DetailHongPage from './pages/detail/hongbao'
import DetailZhouPage from './pages/detail/zhoubian'
import DetailMeiPage from './pages/detail/meishi'

Vue.use(VueRouter);
Vue.use(VueResource)

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/orderList',
      component:OrderListPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect: '/detail/chujing',
      children:[
        {
          path:'chujing',
          component:DetailChuPage
        },
        {
          path:'hongbao',
          component:DetailHongPage
        },
        {
          path:'zhoubian',
          component:DetailZhouPage
        },
        {
          path:'meishi',
          component:DetailMeiPage
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
