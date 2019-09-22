# vuex-axios-app

## Technical Description 

> Vue JS project using Vue.js(3.11), Vuex and axios for rest api 
> Vuex based state management across Application using store object consisting of state, actions,mutations & getters.
> Used Axios Promise based client to make http calls(GET,POST,DELETE,PUT) to remote mock JSON Server REST Endpoint
> Vue-router to map different path and components and navigate among them using routing.
> Mock JSON Server with db.json file acting as REST Endpoint to peform CRUD operation
> Proxy configuration in webpack and concurrently running client and json-server(mock api) using concurrently npm package. 
> webpack for seperate dev and production bundling along with configuration for various plugins & loaders.
> Webpack proxy configuration for accessing API 


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run server-client

# This will run both client at localhost:8080 and JSON server at localhost:3000 also proxy 
# configuration ensure routing call http://localhost:8080/api to http://localhost:3000/


## Functionality
 #  This app provide front end where user can perform various operations with task.
 #  User can Add task and then edit it, User can view multiple task using TaskList.
 #  User can delete individual task from taskList or Edit it through TaskList.
 #  User can view Task from TaskList and also from Home component once created.
 
