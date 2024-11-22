// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAA18kIcxqNTukRKOMwftxIVGeGHPp3hk",
  authDomain: "sample-86877.firebaseapp.com",
  databaseURL: "https://sample-86877-default-rtdb.firebaseio.com",
  projectId: "sample-86877",
  storageBucket: "sample-86877.firebasestorage.app",
  messagingSenderId: "144666143678",
  appId: "1:144666143678:web:ca09f768251405a1dae7ef",
  measurementId: "G-RZW4JTSPX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;