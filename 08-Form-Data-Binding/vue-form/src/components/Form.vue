<template>
  <form>
    <input type="text" v-model="text">
    <p>
        {{ text }}
    </p>
    <select v-model="framework">
        <option>Vue</option>
        <option>React</option>
        <option>Svelte</option>
    </select>
    <p>{{ framework }}</p>
  </form>
</template>

<script>
export default {
 data(){
    return {
        text:"Bir Metin Girin",
        framework:"Framework Seçin",
    }
 }
}
</script>

<style>

</style>