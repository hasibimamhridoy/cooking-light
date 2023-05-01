// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLx8_l0VOmxOPQZ66MlG0qWpoQkrfANHw",
  authDomain: "cooking-light.firebaseapp.com",
  projectId: "cooking-light",
  storageBucket: "cooking-light.appspot.com",
  messagingSenderId: "310179820698",
  appId: "1:310179820698:web:3ff7a17c32266768501b23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);