// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjOVFi8zcpLQuMIZRdJWp5DfcfvWmr4o",
  authDomain: "blog-vue3-6e6be.firebaseapp.com",
  projectId: "blog-vue3-6e6be",
  storageBucket: "blog-vue3-6e6be.appspot.com",
  messagingSenderId: "538255969639",
  appId: "1:538255969639:web:5bef71df1eef9ab0a7b3c2"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export {fb}