// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-cQSpTcE4iKD-0WjjVacb_OLZZfGE4tg",
  authDomain: "chat-349eb.firebaseapp.com",
  databaseURL: "https://chat-349eb-default-rtdb.firebaseio.com",
  projectId: "chat-349eb",
  storageBucket: "chat-349eb.firebasestorage.app",
  messagingSenderId: "144724814500",
  appId: "1:144724814500:web:22997fc512fe1338769431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
