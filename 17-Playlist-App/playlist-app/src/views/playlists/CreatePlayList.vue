<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create PlayList</h4>
    <input type="text" required placeholder="PlayList Title" v-model="title">
    <textarea required placeholder="PlayList Description" v-model="description"></textarea>
    <label>Upload Playlist Cover İmage</label>
    <input type="file">
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        const title = ref("")
        const description = ref("")

        const handleSubmit = () => {
            console.log(title.value,description.value)
        }

        return {title,description,handleSubmit}
    }
}
</script>

<style>
input[type="file"]{
    border: 0;
    padding: 0;
}
label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
}
button {
    margin-top: 20px;
}
</style>