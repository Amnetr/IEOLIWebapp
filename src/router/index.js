import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import selectTask from '@/views/selectTask'
import forgetPassword from '@/views/forgetPassword'
import signup from '@/views/signup'
import setTag from '@/views/setTag'
import mgrIndex from '@/views/mgrIndex'
import updateText from '@/views/updateText'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '',
      name: 'login',
      component: login
    },
    {
      path: '/selectTask',
      name: 'selectTask',
      component: selectTask
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/setTag',
      name: 'setTag',
      component: setTag
    },
    {
      path: '/mgrIndex',
      name: 'mgrIndex',
      component: mgrIndex,
      children: [{
        path: 'updateText',
        component: updateText
      }]
    }
  ]
})
