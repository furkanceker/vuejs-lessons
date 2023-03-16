<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }} - {{ job }}</p>
    <button @click="clicked">Tıkla</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { onMounted } from 'vue';

export default {
  name: 'HomeView',
  components: {},
  setup() {
    let name = "Furkan"
    let job  = "Web Developer"
    const clicked = () => {
      console.log("Buton tıklandı")
    }
    return {name,job,clicked}
  },
}
</script>
