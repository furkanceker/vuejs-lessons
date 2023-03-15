<template>
  <div>
    <h3>{{ title }}</h3>
    <p>Öğrenci ID : {{ studentId }}</p>
    <router-link :to="{name:'students'}">Geri Dön</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title:'Öğrenci Bilgi Sayfası',
            studentId:this.$route.params.id
        }
    }
}
</script>

<style>

</style>