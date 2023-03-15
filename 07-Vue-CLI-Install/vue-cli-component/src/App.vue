<template>
  <div>
    <Title :titleText="text" :text="text2"></Title>
    <Button @clean="cleanInput()" />
    <input type="text" ref="inputText">
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    Title,
    Button,
  },
  data(){
    return{
      text:'Vue 3 Intro',
      text2:'Welcome to Vue'
    }
  },
  methods:{
    cleanInput(){
      this.$refs.inputText.value = ""
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
