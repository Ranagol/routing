<template>
  <div>
    <p>UserDetail.vue</p>
    <p>UserID: {{ $route.params.id }}</p><!--$route.params.id can retrieve the id number from the url.-->
    <router-link tag="button" :to="link" class="btn btn-primary">Go to UserEdit</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: { name: 'UserEdit', params: { id: this.$route.params.id}}//here we define our link. Important: this route was named UserEdit in routes.js, so we can call this route by his name
    }
  }
}
</script>

<style>
</style>