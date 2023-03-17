<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, where, onSnapshot } from '@firebase/firestore'
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
    
      // console.log(docId)
      // console.log(data)

      // VERİ EKLEME //
       
      // addDoc(fbRef,{
      // author: 'Furkan Çeker',
      // name: 'Vue 3 Öğreniyorum',
      // pageCount: 200,
      // }) 

      // VERİ SİLME //

      // const docRef = doc(db,'books','Y6uabHzcQyOHkZ2I9nT9')
      // deleteDoc(docRef)

      const q = query(fbRef,where('pageCount','==',300))
      onSnapshot(q,(ss) => {
        let books = []
        ss.docs.forEach((doc) => {
          books.push({...doc.data(),id:doc.id})
        })
        console.log(books)
      })
      return data
    }) 
  }
}
</script>
