import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/index'
import view from '@/pages/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/view',
      name: 'view',
      component: view
    }
  ]
})
