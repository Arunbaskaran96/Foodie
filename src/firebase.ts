import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArp0SD7Ej5dNzAWWNhV5jrfp0IXIrCd50",
  authDomain: "foodie-24475.firebaseapp.com",
  projectId: "foodie-24475",
  storageBucket: "foodie-24475.appspot.com",
  messagingSenderId: "825955191820",
  appId: "1:825955191820:web:ff24f730d0c04975fc7229"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);