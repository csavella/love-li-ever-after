import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import main from '@/components/main'
import rsvp from '@/components/rsvp'
import travel from '@/components/travel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
        path: '/details',
        name: 'details',
        component: details
    },
    {
        path: '/rsvp',
        name: 'rsvp',
        component: rsvp
    },
    {
      path: '/travel',
      name: 'travel',
      component: travel
    }
  ], 
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})