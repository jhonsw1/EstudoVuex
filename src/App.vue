<template>
  <div id="app">
    <Painel />
    <todo-list/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import Painel from './components/Painel.vue';
export default {
  name: 'App',
  components: {
  Painel,
  TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
