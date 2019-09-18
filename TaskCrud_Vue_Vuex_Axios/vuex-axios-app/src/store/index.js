import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      tasks: []
    },
    mutations: {
      addTask (state, task) {
        state.tasks.push(task)
      },
      deleteTask (state, task) {
        state.tasks = state.tasks.filter(obj => obj.id !== task)
      }
    },
    getters: {
      taskCount: state => state.tasks.length
    }
  }
)
