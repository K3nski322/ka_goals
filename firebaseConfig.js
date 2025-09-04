// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCasj_6IllYKBV0N_hwjqNkqcqw9ph6gf4",
  authDomain: "mobile-app---tracker-38ebf.firebaseapp.com",
  projectId: "mobile-app---tracker-38ebf",
  storageBucket: "mobile-app---tracker-38ebf.firebasestorage.app",
  messagingSenderId: "120424005877",
  appId: "1:120424005877:web:b721fa47a4ac0b4cb8c5bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
