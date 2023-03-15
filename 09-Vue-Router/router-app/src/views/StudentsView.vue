<template>
  <div>
    <h1>{{title}}</h1>
    <div v-for="student in students" :key="student.id">
        <router-link :to="{name:`studentInfo`,params:{id:student.id}}">{{ student.name }} - {{ student.not }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return {
        title:'Öğrenciler',
        students: [
            {id:1,name:"Furkan",not:100},
            {id:2,name:"Burak",not:90},
            {id:3,name:"İbrahim",not:80},
            {id:4,name:"Muhammet",not:70},
        ]
    }
 }
}
</script>

<style>

</style>