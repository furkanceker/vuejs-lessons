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
import useSignup from '../compasables/useSignup'
export default {
    setup(){
        const {error, signup} = useSignup()
        const nickname = ref('')
        const email = ref('')
        const password = ref('')
        const handleSubmit = async () => {
            await signup(email.value,password.value,nickname.value)
        }
        return {nickname, email, password, handleSubmit}
    }
}
</script>

<style>

</style>