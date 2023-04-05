<template>
  <form @keypress.enter.prevent="handleSubmit">
    <textarea placeholder="Type a message and hit enter to send..." v-model="message"></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollections'
export default {
    setup(){
        const {user} = getUser()
        const {addDoc, error} = useCollection('messages')
        const message = ref("")

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp,
            }
            await addDoc(chat)
            if(!error.value){
                message.value = ""
            }
        }
        return {message,handleSubmit,error}
    }
}
</script>

<style scoped>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 40px;
    max-height: 40px;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: none;
    overflow: auto;
}
textarea::placeholder{
    padding: 3px;
}
</style>