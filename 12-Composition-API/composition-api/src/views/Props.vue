<template>
    <Contents :contents="contents"></Contents>
</template>

<script>
import { ref } from 'vue';
import Contents from '../components/Content.vue'
export default {
    name:"PropView",
    components: { Contents },
    setup(){
        const contents = ref([
            {id:1,title:"Deneme 1",details:"Detay 1"},
            {id:2,title:"Deneme 2",details:"Detay 2"},
            {id:3,title:"Deneme 3",details:"Detay 3"},
            {id:4,title:"Deneme 4",details:"Detay 4"},
        ])
        return { contents }
    }
}
</script>

<style>

</style>