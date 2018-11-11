import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import task from '@/views/task'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/task',
      name: 'task',
      component: task
    }
  ]
})
