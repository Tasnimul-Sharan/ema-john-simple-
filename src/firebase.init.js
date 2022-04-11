import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDqmebBSXuo-fGe08KlkuxfrlUr0rqK2w",
  authDomain: "ema-john-simple-ce420.firebaseapp.com",
  projectId: "ema-john-simple-ce420",
  storageBucket: "ema-john-simple-ce420.appspot.com",
  messagingSenderId: "496483716417",
  appId: "1:496483716417:web:0d6b466a08c6b8aac0e5c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
