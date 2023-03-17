<template>
  <div class="project" :class="{complete: project.complete}">
    <div class="actions">
        <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
        <div class="icons">
            <router-link :to="{name:'Edit', params:{id:project.id}}"><span class="material-icons edit">edit</span></router-link>
            <span class="material-icons delete" @click="deleteProject">delete</span>
            <span class="material-icons tick" @click="completeProject">done</span>
        </div>
    </div>
    <div v-if="showDetails" class="details">
        <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods: {
        deleteProject() {
            fetch(this.uri, {method: "DELETE"})
            .then(() => this.$emit('delete',this.project.id))
            .catch(err => console.log(err.message))
        },
        editProject() {

        },
        completeProject() {
            fetch(this.uri, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({complete: !this.project.complete})
            })
            .then(() => this.$emit('complete',this.project.id))
            .catch(err => console.log(err.message))
        },
    }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #ff5500;
}
h3 {
    cursor: pointer;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.project.complete {
    border-left: 4px solid #76dd78;
}
.project.complete h3 {
  text-decoration: line-through;
}
.tick {
    color: #76dd78;
}
.delete {
    color: #f8483c;
}
.edit {
    color: #279af8;
}
</style>