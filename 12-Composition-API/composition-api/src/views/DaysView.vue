<template>
    <div>
        <input type="text" v-model="search">
        <div v-for="day in finded" :key="day">
            <span>{{ day }}</span>
        </div>
        <button @click="stop">Stop</button>
    </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from "vue"

export default {
    setup(){
        const days = ref(['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'])
        const search = ref('')
        const finded = computed(()=>{
            return days.value.filter((day) => day.includes(search.value))
        })
        const watchStop = watch(finded, () => {
            console.log("Değişti")
        })
        const watchEffectS = watchEffect(() => {
            console.log("Watch Effect", days.value)
            console.log("Watch Effect", search.value)
        })
        const stop = () => {
            watchStop()
            watchEffectS()
        }
        return {days,search,finded,stop}
    }
}
</script>

<style>

</style>