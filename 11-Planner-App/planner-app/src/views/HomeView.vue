<template>
  <div>
    <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.id ">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '@/components/FilterNav.vue'
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    SingleProject,
    FilterNav
  },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    handleComplete(id) {
      let p = this.projects.find(project => project.id === id)
      p.complete = !p.complete
    }
  },
  computed: {
    filteredProject() {
      if(this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      }else if(this.current === 'ongoing'){
        return this.projects.filter(project => !project.complete)
      }else {
        return this.projects
      }
    }
  }
}
</script>
