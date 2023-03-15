<template>
  <form>
    <input type="text" v-model="text">
    <p>
        {{ text }}
    </p>
    <select v-model="framework">
        <option>Vue</option>
        <option>React</option>
        <option>Svelte</option>
    </select>
    <p>{{ framework }}</p>
    <hr>
    <label for="checkbox1">Onay</label>
    <input type="checkbox" id="checkbox1" v-model="checked">
    <p>{{ checked ? 'Onaylandı' : 'Onaylanmadı'}}</p>
    <br>
    <div>
        <input type="checkbox" id="vue" value="Vue" v-model="frameworks">
        <label for="vue">Vue</label>
    </div>
    <div>
        <input type="checkbox" id="react" value="React" v-model="frameworks">
        <label for="react">React</label>
    </div>
    <div>
        <input type="checkbox" id="svelte" value="Svelte" v-model="frameworks">
        <label for="svelte">Svelte</label>
    </div>
    <p>Seçilen Frameworkler : {{ frameworks }}</p>
    <hr>
    <h3>Öğrenciler</h3>
    <input type="text" v-model="student" @keyup="addStudent">
    <div v-for="student in students" :key="student">
        <span @click="deleteStudent(student)">{{ student }}</span>
    </div>
    <br>
    <button @click.prevent="sendData">Gönder</button>
  </form>
</template>

<script>
export default {
 data(){
    return {
        text:"Bir Metin Girin",
        framework:"Framework Seçin",
        checked:false,
        frameworks: [],
        student:'',
        students: []
    }
 },
 methods: {
    addStudent(e){
        if(e.keyCode == 13 && this.student){
            if(!this.students.includes(this.student)){
                this.students.push(this.student)
            }
            this.student = ''
        }
    },
    deleteStudent(student) {
        this.students = this.students.filter(item => {
            return student !== item
        })
    },
    sendData(){
        console.log("veriler gönderildi")
    }
 }
}
</script>

<style>

</style>