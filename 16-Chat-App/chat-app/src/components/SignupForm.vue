<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Nickname" v-model="nickname">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const nickname = ref('')
        const email = ref('')
        const password = ref('')
        const handleSubmit = () => {
            console.log(nickname.value, email.value, password.value)
        }
        return {nickname, email, password, handleSubmit}
    }
}
</script>

<style>

</style>