// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcaswQ7IDxopui1F_LM0zlZoryNRqymd8",
  authDomain: "appstore-1529c.firebaseapp.com",
  projectId: "appstore-1529c",
  storageBucket: "appstore-1529c.firebasestorage.app",
  messagingSenderId: "188342408717",
  appId: "1:188342408717:web:e6a814ea0e4bf61feb2744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);