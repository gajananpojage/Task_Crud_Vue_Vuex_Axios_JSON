import axios from 'axios'

export default {
  addTask (newTask) {
    const {name, completed} = newTask
    return axios.post('http://localhost:3000/tasks', {name, completed})
  },

  getTaskDetails (id) {
    return axios.get(`http://localhost:3000/tasks/${id}`)
  },

  deleteTask (id) {
    return axios.delete(`http://localhost:3000/tasks/${id}`)
  }
}
