import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import populous from '@/components/populous'
import regions from '@/components/regions'
import allinfo from '@/components/allinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
        path: '/populous',
        name: 'populous',
        component: populous
    },
    {
        path: '/regions',
        name: 'regions',
        component: regions
    },
    {
        path: '/allinfo',
        name: 'allinfo',
        component: allinfo
    }
  ]
})