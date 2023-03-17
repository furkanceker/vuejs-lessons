<template>
  <div class="home">
    <SinglePost :posts="posts"></SinglePost>
  </div>
</template>

<script>
import {ref} from 'vue'
import SinglePost from '../components/SinglePost.vue'
import getPosts from '../composable/getPosts'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {SinglePost},
  setup() {
    const posts = ref([])
    getPosts().then((data)=> {
      posts.value = data
    })
    console.log(posts)
    return {posts}
  },
}
</script>
