import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import task from '@/views/task'
import forgetPassword from '@/views/forgetPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '',
      name: 'login',
      component: login
    },
    {
      path: '/task.html',
      name: 'task',
      component: task
    },
    {
      path: 'forgetPassword.html',
      name: 'forgetPassword',
      component: forgetPassword
    }
  ]
})
