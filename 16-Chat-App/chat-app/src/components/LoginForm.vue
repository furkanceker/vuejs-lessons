<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../compasables/useLogin'
export default {
    setup(){
        const email = ref('')
        const password = ref('')
        const {error, login} = useLogin()
        const handleSubmit = async () => {
          await login(email.value,password.value)
          if(!error.value){
            console.log("Login Success")
          }
        }
        return {email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>