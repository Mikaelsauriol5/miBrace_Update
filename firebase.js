// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzY2y5Fc7iCVZqaoDRJtwJa-fKW-OPBkI",
  authDomain: "mibrace-cf281.firebaseapp.com",
  projectId: "mibrace-cf281",
  storageBucket: "mibrace-cf281.appspot.com",
  messagingSenderId: "150918915844",
  appId: "1:150918915844:web:d2bb8762ae5f6c3a6c5251",
  measurementId: "G-CJND4SZ2RT"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };