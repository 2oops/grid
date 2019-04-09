import Vue from 'vue'
import Router from 'vue-router'
import deviceStat from '@/components/Device-stat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'deviceStat',
      component: deviceStat
    }
  ]
})
