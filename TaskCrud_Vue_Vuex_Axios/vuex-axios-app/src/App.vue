<template>
  <div id="app">
    <div id="header-nav" class="nav-bars">
      <router-link to="/">Home</router-link>|
      <router-link to="/taskList">TaskList</router-link>
    </div>
    <router-view />
    <div id="footer-nav" class="nav-bars">You have {{ taskCount }} tasks in taskList</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    taskCount () {
      return this.$store.getters.taskCount
    }
  }
}
</script>

<style >

body {
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav-bars {
    background: cornflowerblue;
    position: fixed;
    width: 100%;
    padding: 10px;
    color: skyblue;
}

a {
  color: green;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  text-decoration: underline;
}

a:active {
  color: black;
}

a:visited {
  color: purple;
}

#header-nav {
    top: 0;
    left: 0;
}

#footer-nav {
    bottom: 100;
    left: 0;
    color:black
}

</style>
