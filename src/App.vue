<template>
  <div id="app">
    <p>App.vue</p>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'app',
  
  components: {
    appHeader: Header//Header.vue local registration
  }
}
</script>

<style>
</style>
