<template>
  <form @submit.prevent="handleSubmit">
    <label>Title : </label>
    <input type="text" v-model="title" required>
    <label>Detail : </label>
    <textarea v-model="detail" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      detail: ''
    }
  },
  methods: {
    handleSubmit() {
      let project = {
        title:this.title,
        details:this.detail,
        complete: false
      }
      fetch('http://localhost:3000/projects', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(project),
      })
      .then(() => this.$router.push('/'))
      .catch(err => console.log(err.message))
    }
  }
}
</script>

<style>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
button {
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
}
</style>
