<template>
  <div>
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.id ">
        <SingleProject :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'

// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    SingleProject
  },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
}
</script>
