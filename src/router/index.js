import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import main from '@/components/main'
import ourstory from '@/components/ourstory'
import planning from '@/components/planning'
import rsvp from '@/components/rsvp'
import weddingparty from '@/components/weddingparty'
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
        path: '/ourstory',
        name: 'ourstory',
        component: ourstory
    },
    {
        path: '/rsvp',
        name: 'rsvp',
        component: rsvp
    },
    {
      path: '/weddingparty',
      name: 'weddingparty',
      component: weddingparty
    },
    {
      path: '/planning',
      name: 'planning',
      component: planning
    },
    {
      path: '/travel',
      name: 'travel',
      component: travel
    }
  ]
})