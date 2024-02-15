// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "livechat-515ff.firebaseapp.com",
  projectId: "livechat-515ff",
  storageBucket: "livechat-515ff.appspot.com",
  messagingSenderId: "786713995186",
  appId: "1:786713995186:web:408da368acaf256412e6ab",
  measurementId: "G-KKEVKM4VBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)