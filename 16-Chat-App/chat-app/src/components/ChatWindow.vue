<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages">
        <div class="single" v-for="doc in formatedDocuments" :key="doc.id">
            <span class="message">{{ doc.message }}</span>
            <span class="name">: 
                {{ doc.name }}</span>
            <span class="created-at">{{ doc.createdAt}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import {formatDistanceToNow} from 'date-fns'
import { computed } from 'vue'
export default {
    setup(){
        const {error, documents} = getCollection('messages')
        const formatedDocuments = computed(() => {
            if(documents.value){
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc,createdAt:time}
                })
            }
        })
        return {error,documents,formatedDocuments}
    }
}
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 30px 20px;
    text-align: right;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 5px;
}
.name {
    font-weight: bold;
    margin-left: 7px;
}
.message {
    max-height: 400px;
    overflow: auto;
}

</style>