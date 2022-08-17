// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT9VqtV_yxsc51KqkHUd-5eq-0uEm4SlU",
  authDomain: "guitar-shop-f75ab.firebaseapp.com",
  projectId: "guitar-shop-f75ab",
  storageBucket: "guitar-shop-f75ab.appspot.com",
  messagingSenderId: "93420089931",
  appId: "1:93420089931:web:745782685f860e5c7953ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
