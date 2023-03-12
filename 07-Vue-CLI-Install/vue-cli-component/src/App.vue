<template>
  <div>
    <Title :titleText="text" :text="text2"></Title>
  </div>
</template>

<script>
import Title from './components/Title.vue'
export default {
  name: 'App',
  components: {
    Title
  },
  data(){
    return{
      text:'Vue 3 Intro',
      text2:'Welcome to Vue'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
