<template>
  <h3>{{ title }}</h3>
</template>

<script>
export default {
    data() {
        return {
            title:"Vue 3 Giriş"
        }
    },
}
</script>
<!-- "scoped" componenti etkiler -->
<style scoped>
    h3{
        color: orangered;
        font-size: 30px;
        font-weight: 700;
    }
</style>