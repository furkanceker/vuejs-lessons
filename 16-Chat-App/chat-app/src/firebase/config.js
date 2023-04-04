import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgLTM2tgRUinJZVA24Ld5Vn3_xygVYyhw",
    authDomain: "vue3-4acbe.firebaseapp.com",
    projectId: "vue3-4acbe",
    storageBucket: "vue3-4acbe.appspot.com",
    messagingSenderId: "155284807728",
    appId: "1:155284807728:web:8da6f0241029fa972c0df5"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export {projectFirestore, timestamp}
