import Vue from 'vue'
import Router from 'vue-router'

import GuardService from '@/components/services/GuardService'

import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import CategoryList from '@/components/pages/categories/CategoryList'
import CategoryAdd from '@/components/pages/categories/CategoryAdd'
import CategoryEdit from '@/components/pages/categories/CategoryEdit'
import ProductList from '@/components/pages/products/ProductList'


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
      beforeEnter: GuardService.guardOn,
      children: [
        {
          path: '/category-list',
          name: 'category-list',
          component: CategoryList
        },
        {
          path: '/category-add',
          name: 'category-add',
          component: CategoryAdd
        },
        {
          path: '/category-edit/:id',
          name: 'category-edit',
          component: CategoryEdit
        },
        {
          path: '/product-list',
          name: 'product-list',
          component: ProductList
        }
      ]
    },
    
  ]
})
