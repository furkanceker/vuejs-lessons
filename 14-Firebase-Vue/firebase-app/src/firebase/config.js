
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgLTM2tgRUinJZVA24Ld5Vn3_xygVYyhw",
  authDomain: "vue3-4acbe.firebaseapp.com",
  projectId: "vue3-4acbe",
  storageBucket: "vue3-4acbe.appspot.com",
  messagingSenderId: "155284807728",
  appId: "1:155284807728:web:10c072095012e2552c0df5"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export {fb}