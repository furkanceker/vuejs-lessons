<template>
  <div>
    <h3>{{ title }}</h3>
    <p>Öğrenci ID : {{ id }}</p>
    <router-link :to="{name:'students'}">Geri Dön</router-link>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>

</style>