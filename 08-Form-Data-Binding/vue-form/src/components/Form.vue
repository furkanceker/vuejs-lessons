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
    <hr>
    <label for="checkbox1">Onay</label>
    <input type="checkbox" id="checkbox1" v-model="checked">
    <p>{{ checked ? 'Onaylandı' : 'Onaylanmadı'}}</p>
    <br>
    <div>
        <input type="checkbox" id="vue" value="Vue" v-model="frameworks">
        <label for="vue">Vue</label>
    </div>
    <div>
        <input type="checkbox" id="react" value="React" v-model="frameworks">
        <label for="react">React</label>
    </div>
    <div>
        <input type="checkbox" id="svelte" value="Svelte" v-model="frameworks">
        <label for="svelte">Svelte</label>
    </div>
    <p>Seçilen Frameworkler : {{ frameworks }}</p>
  </form>
</template>

<script>
export default {
 data(){
    return {
        text:"Bir Metin Girin",
        framework:"Framework Seçin",
        checked:false,
        frameworks: []
    }
 }
}
</script>

<style>

</style>