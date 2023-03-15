<template>
  <nav>
    <router-link :to="{path:'/'}">Home</router-link> |
    <router-link :to="{path:'/about'}">About</router-link> |
    <router-link :to="{path:'/students'}">Students</router-link>
  </nav>
  <div>
    <span @click="anasayfa">Ana Sayfa</span>
    <span @click="geri">Geri</span>
    <span @click="ileri">İleri</span>
  </div>
  <router-view/>
</template>

<script>
 export default {
  methods: {
    anasayfa(){
      this.$router.push({name:'home'})
    },
    ileri() {
      this.$router.go(1)
    },
    geri(){
      this.$router.go(-1)
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
span {
  padding: 20px 10px;
  cursor: pointer;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
