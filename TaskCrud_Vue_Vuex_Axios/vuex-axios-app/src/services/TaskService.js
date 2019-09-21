import axios from 'axios'

export default {
  addTask (newTask) {
    return axios.post('http://localhost:3000/tasks', newTask)
  },

  getTaskDetails (id) {
    return axios.get(`http://localhost:3000/tasks/${id}`)
  },

  deleteTask (id) {
    return axios.delete(`http://localhost:3000/tasks/${id}`)
  },

  updateTask (task) {
    let id = task.id
    return axios.put(`http://localhost:3000/tasks/${id}`, task)
  }
}
