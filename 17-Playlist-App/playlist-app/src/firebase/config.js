import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC44DXruV0XcN0Ek0QjMC30LI248z9Xo6s",
    authDomain: "playlist-vue-616c7.firebaseapp.com",
    projectId: "playlist-vue-616c7",
    storageBucket: "playlist-vue-616c7.appspot.com",
    messagingSenderId: "226957434087",
    appId: "1:226957434087:web:17542935e2b3a7f2df9642"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,projectAuth,timestamp}