<template>
    <div>
        <div v-for="content in contents" :key="content.id">
            <span>{{ content.title }}</span>
        </div>
        <div v-if="err">
            {{ err }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import getContentsFetch from '../composable/getContentsFetch'
import {useRoute, useRouter} from 'vue-router'
export default {
/*     
    props: ['contents'],
    setup(props) {
        console.log(props.contents)
    }, 
*/
    setup(){
        
        const route = useRoute()
        const router = useRouter()
        console.log('Route:', route)
        console.log('Router:', router)

        const {contents, err, getContents} = getContentsFetch()
        getContents()
        return { contents, err}
    }
}
</script>

<style>

</style>