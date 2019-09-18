import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Task from '@/components/Task'
import TaskList from '@/components/TaskList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/taskList',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/tasks/task/:id',
      name: 'Task',
      component: Task
    }
  ]
})
