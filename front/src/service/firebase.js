import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyAn0Toj9yiCQMAGGGsFD0Gx1m-96XL70U4",
        authDomain: "questions-4fa02.firebaseapp.com",
        projectId: "questions-4fa02",
        storageBucket: "questions-4fa02.appspot.com",
        messagingSenderId: "38775074813",
        appId: "1:38775074813:web:2ed1df00967bbed913f394",
        measurementId: "G-JC7N20RV51"
})

export const google = new firebase.auth.GoogleAuthProvider();