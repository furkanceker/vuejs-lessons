<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import {getFirestore,collection,getDocs,addDoc,deleteDoc} from 'firebase/firestore/lite'
import {fb} from "../firebase/config"

export default {
  name: 'HomeView',
  components: {},
  setup() {
    onMounted(async () => {
      const db = getFirestore()
      const fbRef = collection(db, "books")
      const fbDocs = await getDocs(fbRef)
      const data = fbDocs.docs.map((doc) => doc.data())
      const docId = fbDocs.docs.map((doc) => doc.id)
    
      console.log(docId)
      console.log(data)
      // VERİ EKLEME //
/*       
        addDoc(fbRef,{
        author: 'Furkan Çeker',
        name: 'Vue 3 Öğreniyorum',
        pageCount: 200,
      }) 
*/
      return data
    }) 
  }
}
</script>
