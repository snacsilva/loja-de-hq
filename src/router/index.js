import Vue from 'vue'
import Router from 'vue-router'
import Quadrinhos from '@/components/Quadrinho'

Vue.use(Router)


export default new Router({
  routes: [
    { path:'/', component: Quadrinhos }
  ]
})
