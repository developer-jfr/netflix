// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiQiJ0gev743PZXyZhHllMM3ptMBUj3ZI",
  authDomain: "netflix-b9ed5.firebaseapp.com",
  projectId: "netflix-b9ed5",
  storageBucket: "netflix-b9ed5.appspot.com",
  messagingSenderId: "113150173427",
  appId: "1:113150173427:web:4517f26f62b8407468d786",
  measurementId: "G-RNLEP1MBKT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
