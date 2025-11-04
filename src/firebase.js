// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHF41rtYc3rvkvvR6iMXoI_f8ZjDKJx_Y",
  authDomain: "ieee-pes-sb.firebaseapp.com",
  projectId: "ieee-pes-sb",
  storageBucket: "ieee-pes-sb.firebasestorage.app",
  messagingSenderId: "585900489341",
  appId: "1:585900489341:web:e280e934fbfcbfe5824f14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
