<template>
    <div class="post">
      <div class="actions">
        <router-link :to="{name:'Post',params: {id:post.id}}">
          <h3>{{ post.title }}</h3>
        </router-link>
        <div class="icons">
          <span class="material-icons delete" @click="deletePost">delete</span>
        </div>
      </div>
    </div>
  </template>

<script>
import { getFirestore, collection, deleteDoc, where, query,getDocs } from '@firebase/firestore';
import { fb } from '../firebase/config'
import { useRouter } from 'vue-router';
export default {
  props: ['post'],
  setup(props) {
  },
  methods: {
    async deletePost() {
      const db = getFirestore(fb);
      const postsCollection = collection(db, 'posts');
      const q = query(postsCollection, where("id", "==", this.post.id));
      const querySnapshot = await getDocs(q);
      const docRef = querySnapshot.docs[0].ref;
      await deleteDoc(docRef);
      this.$router.go(0);
    }
  }
}
</script>

<style>
.post {
    margin: 20px auto;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #ff5500;
}
h1 {
    text-align: center;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.delete {
    cursor: pointer;
    color: #f8483c;
}
a {
    color: rgb(54, 54, 54);
    text-decoration: none;
}
h3 {
    cursor: pointer;
}
</style>