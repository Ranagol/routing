<template>
  <div>
    <h5>UserEdit.vue</h5>
    <p>Here you can edit your user.</p>
    <div @click="attachRed = !attachRed" class="demo" :class="{red: attachRed}"></div>
    <hr>
    <div class="demo" @click="attachRed = !attachRed" :class="greenOrBlue">Green or blue</div>
    <hr>
    <input v-model="color" type="text">
    <div class="demo" :class="color"></div>
    <h5>Style objects</h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      attachRed: false,
      color: 'grey'
    }
  },

  computed: {
    greenOrBlue(){//this will return a JS object that contains CSS
      return {
        green: this.attachRed,//activate .red in CSS if attachRed is true. Note how we had to use this. in order to acces the attachRed
        blue: !this.attachRed,//activate .blue in CSS if attachRed is false
      }
    }
  }
}
</script>

<style>
.demo{
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}

.red{
  background-color: red;
}

.blue{
  background-color: blue;
}

.green{
  background-color: green;
}

</style>