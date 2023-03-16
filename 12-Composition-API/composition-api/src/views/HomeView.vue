<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }} </p>
    <button @click="clicked">Tıkla</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src

import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: {},
  setup() {
    let name = ref("Furkan")

    const clicked = () => {
      name.value = "Deneme Click"
      console.log(name)
    }

    return {name,clicked}
  },
}
</script>
