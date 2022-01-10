import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const AUTH = process.env;

export const app = firebase.initializeApp({
        apiKey: AUTH.API_KEY,
        authDomain: AUTH.AUTH_DOMAIN,
        projectId: AUTH.PROJECT_ID,
        storageBucket: AUTH.STORAGE_BUCKET,
        messagingSenderId: AUTH.MESSAGING_SENDER_ID,
        appId: AUTH.APP_ID,
        measurementId: AUTH.MEASUREMENT_ID
})

export const google = new firebase.auth.GoogleAuthProvider();