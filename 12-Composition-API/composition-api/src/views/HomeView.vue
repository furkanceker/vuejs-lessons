<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }} - {{ job }}</p>
    <button @click="clicked" ref="info">Tıkla</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: {},
  setup() {
    let name = "Furkan"
    let job  = "Web Developer"

    const info = ref(null)

    const clicked = () => {
      /* console.log("Buton tıklandı") */
      console.log(info, info.value)
    }

    return {name,job,clicked,info}
  },
}
</script>
