<template>
  <div class="tasklist-container">
    <div class="tasklist-columns">
      <h2>My Task:</h2>
      <div class="tasklist">
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            <span class="first-span"><router-link v-bind:to="{ name: 'Task', params: { id: task.id , task: task.name, data:task} }">
            {{ task.name }} </router-link> </span>
            <span class="extra-span">
              <button @click="deleteTask(task)" type="submit"> Delete </button>
              <button @click="updateTask(task)" type="submit">Edit Task </button>
            </span>

          </li>
        </ul>
      </div>
         </div>
         <div class="error" v-if="isError">{{error}}</div>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService'

export default {
  name: 'TaskList',
  computed: {
    tasks () {
      return this.$store.state.tasks.slice().reverse()
    },
    error () {
      return 'Your task could not be found and was not deleted.'
    }
  },
  data () {
    return {
      isError: false
    }
  },
  methods: {
    async deleteTask (task) {
      const response = await TaskService.deleteTask(task.id)

      if (!response.data) {
        this.isError = true
      } else {
        this.$store.commit('deleteTask', task.id)
      }
    },
    updateTask (task) {
      this.$router.push({ name: 'Task', params: { id: task.id, isEdit: true } })
    }
  }
}
</script>

<style  scoped>

.tasklist-container {
  margin-top: 60px;
}

.tasklist-columns {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  align-items: center;
}

h2 {
  flex: 0 0 15%;
  margin-top: 10px;
  text-align: center;
}

.tasklist {
  overflow: auto;
  flex: 0 0 85%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: calc(100vh-84px);
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: -10px;
  flex-direction:row;
}

ul li {
  text-align: center;
  background: cadetblue;
  padding: 10px;
  margin: 5px;
  flex: 80%;
  box-sizing: border-box;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap:wrap;
  align-items:center;
}
ul li .first-span {
  display: flex;
  flex-direction: row;
  flex:100%;
  flex-wrap:wrap;
  margin-bottom:10px;
}
ul li .extra-span {
  display: flex;
  flex-direction: row;
  width:30%;
   margin-bottom:10px;
}
.extra-span button {
  margin-left:10px;
}

.error {
  color: red;
  font-size: 12pt;
}

</style>
