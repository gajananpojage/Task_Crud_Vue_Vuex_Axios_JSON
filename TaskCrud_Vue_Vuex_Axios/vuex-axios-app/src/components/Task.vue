<template>
  <div class="task-container">
    <div class="task-columns">
      <div>
        <table>
          <tr>
            <td>Name: </td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>Description: </td>
            <td>{{description}}</td>
          </tr>
          <tr>
            <td>Status: </td>
            <td>{{status}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService'

export default {
  name: 'Task',
  data () {
    return {
      taskId: this.$route.params.id,
      name: '',
      description: '',
      status: ''
    }
  },

  mounted () {
    this.getTaskDetails(this.taskId)
  },

  computed: {
    tasks () {
      return this.$store.state.tasks
    }

  },

  methods: {
    async getTaskDetails (id) {
      console.log(id)
      const response = await TaskService.getTaskDetails(id)
      let data = response.data
      this.name = data.name
      this.description = data.description
      this.status = data.completed
    }
  }
}
</script>

<style  scoped>
.task-container {
  margin-top: 60px;
}

.task-columns {
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: left;
  align-items: center;
}

</style>
