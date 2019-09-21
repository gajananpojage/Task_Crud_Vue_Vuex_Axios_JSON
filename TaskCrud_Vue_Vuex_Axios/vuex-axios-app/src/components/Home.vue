<template>
    <div class="home">
        <div class="input-container">
            <div class="input-group">
                <input type="text" v-on:keydown.enter="getTask" v-model="task" />
                <button @click="getTask" type="submit">
                    Add Task
                </button>
            </div>
            <div class="error" v-if="error">{{error}}</div>
            <div class="task-opts">
              <div  v-if="taskId">Task added Successfully</div>
                <div class="task-links" v-if="taskId">
                    <router-link v-bind:to="{ name: 'Task', params: { id: taskId} }">Task Details</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TaskService from '@/services/TaskService'

export default {
  name: 'Home',
  data () {
    return {
      task: '',
      taskId: '',
      error: ''
    }
  },

  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },

  methods: {
    async getTask () {
      if (this.task === '') {
        this.error = 'Please enter a task.'
        this.taskId = ''
        return false
      }
      let description = 'created on ' + new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      const response = await TaskService.addTask({ name: this.task, description: description, completed: false })

      let responses = response.data

      if (!responses) {
        this.error = 'Your task could not be found and was not added.'
        this.taskId = ''
        return false
      }

      this.taskId = responses.id
      let tasks = this.tasks
      if (!tasks.filter(task => task.name === this.task).length > 0) {
        this.$store.commit('addTask', responses)
      }
      this.task = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
   display: flex;
   align-items:center;
   justify-content: center;
   height: calc(90vh);
}

.input-container {
   max-width: 500px;
   width:100%;
}

.input-container .input-group {
   display:flex;
   justify-content: space-between;
}

.input-container .input-group input {
   box-sizing: border-box;
   width: calc(100% - 150px);
   padding: .5rem;
   border: 2px solid royalblue;
   font-size: 1rem;
   border-radius: 0;
}

.input-container .input-group  button {
   width:150px;
   height:50px;
   background: royalblue;
   color: white;
   text-transform: uppercase;
   border: none;
   font-weight:bold;
   font-size: 12pt;
}

.task-opts {
   margin: 20px 0;
   font-size: 18px;
   font-weight: bold;
}

.task-links {
   margin: 30px 0 20px 0;
   font-size: 14px;
   font-weight: regular;
}

.task-links  a {
   border: 1px solid royalblue;
   text-decoration: none;
   padding: 5px 12px 3px 12px;
   margin: 0 10px;
   text-transform: uppercase;
}

.error{
  color: red;
  font-size:12pt;
}
</style>
