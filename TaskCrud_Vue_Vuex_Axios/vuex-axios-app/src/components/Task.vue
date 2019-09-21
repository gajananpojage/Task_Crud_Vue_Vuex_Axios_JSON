<template>
  <div class="task-container">
    <div class="task-columns">
        <table>
          <tr>
            <td>Name: </td>
            <td><input type="text" v-model="name" v-bind:readonly="is_readonly" :class="{'readOnly':is_readonly}" placeholder="name of task"></td>
          </tr>
          <tr>
            <td>Description: </td>
            <td><input type="text" v-model="description"  v-bind:readonly="is_readonly" :class="{'readOnly':is_readonly}" placeholder="description of task"></td>
          </tr>
          <tr>
            <td>Status: </td>
            <td><input type="text" v-model="status"  v-bind:readonly="is_readonly" :class="{'readOnly':is_readonly}" placeholder="status of task"></td>
          </tr>
           <tr v-if="!is_readonly">
            <td class='submit-cls' colspan="2"><button @click="updateTask()" type="submit">save</button></td>
          </tr>
        </table>
        <div v-if="!is_readonly && isSaved">
          Data updated successfully!.
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
      status: '',
      is_readonly: !(false || this.$route.params.isEdit),
      isSaved: false
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
      const response = await TaskService.getTaskDetails(id)
      let data = response.data
      this.name = data.name
      this.description = data.description
      this.status = data.completed
    },
    async updateTask () {
      let task = { id: this.taskId, name: this.name, description: this.description, status: this.status }
      const response = await TaskService.updateTask(task)
      if (response.data) {
        this.isSaved = true
      }
    }
  }
}
</script>

<style  scoped>
.task-container {
  margin-top: 60px;
  display:flex;
}

.task-columns {
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: left;
  align-items: center;
   flex-direction: column;
}

table {
  border: 1px solid gray;
}
td {
  border :1px solid gray;
}
tr:nth-child(odd) {background: #77c7a1 }
tr:nth-child(even) {background: #acdef1 }

.readOnly {
  background-color: rgba(177, 162, 162, 0.925);
}
.submit-cls {
 background:rgb(97, 110, 119);
}
td button {
  margin: 0 auto;
  width: 30%;
  display: block;
}
</style>
