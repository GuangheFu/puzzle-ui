import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Draw from '@/views/Draw'
import Info from '@/views/Info'
import Prize from '@/views/Prize'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/draw',
      name: 'Draw',
      component: Draw
    },{
      path: '/Info',
      name: 'Info',
      component: Info
    },{
      path: '/prize',
      name: 'Prize',
      component: Prize
    }
  ]
})
