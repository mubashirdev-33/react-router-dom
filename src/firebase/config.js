// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-with-firebase-33e6e.firebaseapp.com",
  projectId: "react-with-firebase-33e6e",
  storageBucket: "react-with-firebase-33e6e.firebasestorage.app",
  messagingSenderId: "1018408332590",
  appId: "1:1018408332590:web:376dee4d12dcf60bcc5ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export default app;