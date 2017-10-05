import Vue from 'vue'
import Router from 'vue-router'
import Trend from '@/components/trend/trend'
import Statistics from '@/components/statistics/statistics'
import Center from '@/components/center/center'
import Detection from '@/components/detection/detection'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/trend',
      component: Trend
    },
    {
      path: '/statistics',
      component: Statistics
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/detection',
      component: Detection
    }
  ]
})
