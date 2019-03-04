/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import selectTask from '@/views/selectTask'
import selectElement from '@/views/selectElement'
import forgetPassword from '@/views/forgetPassword'
import signup from '@/views/signup'
import setTag from '@/views/setTag'
import mgrIndex from '@/views/mgrIndex'
import uploadText from '@/views/uploadText'
import editTask from '@/views/editTask'
import editElement from '@/views/editElement'
import downloadResult from '@/views/downloadResult'
import viewRules from '@/views/viewRules'

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
      path: '/selectElement',
      name: 'selectElement',
      component: selectElement
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
        path: 'uploadText',
        component: uploadText
      }, {
        path: 'editTask',
        component: editTask
      }, {
        path: 'editElement',
        component: editElement
      }, {
        path: 'downloadResult',
        component: downloadResult
      }, {
        path: 'viewRules',
        component: viewRules
      }]
    },
    {
      path: '/uploadText',
      name: 'uploadText',
      component: uploadText
    }
  ]
})
