<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }} - {{ job.name }} </p>
    <button @click="clicked">Tıkla</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',
  components: {},
  setup() {
    let name = ref("Furkan")
    let job = reactive({name:"Yazılımcı"})

    const clicked = () => {
      name.value = "Deneme Click"
      job.name = "Değer Değişti"
      console.log(name)
    }

    return {name,clicked,job}
  },
}
</script>
