import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPz40a7XNzQEY5dCIQFu9ng4NkkUfRqBQ",
  authDomain: "react-portfolio-bb4a2.firebaseapp.com",
  projectId: "react-portfolio-bb4a2",
  storageBucket: "react-portfolio-bb4a2.appspot.com",
  messagingSenderId: "943760222453",
  appId: "1:943760222453:web:20f99dca83ccb272b57dbc"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);