import axios from 'axios'

export default {
  addTask (newTask) {
    return axios.post('api/tasks', newTask)
  },

  getTaskDetails (id) {
    return axios.get(`api/tasks/${id}`)
  },

  deleteTask (id) {
    return axios.delete(`api/tasks/${id}`)
  },

  updateTask (task) {
    let id = task.id
    return axios.put(`api/tasks/${id}`, task)
  }
}
