import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import main from '@/components/main'
import ourstory from '@/components/ourstory'
import rsvp from '@/components/rsvp'
import weddingparty from '@/components/weddingparty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
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
    }
  ]
})