import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import CategoryList from '@/components/pages/categories/CategoryList';

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [{
          path: '/category-list',
          name: 'category-list',
          component: CategoryList
      }]
    },
    
  ]
})
