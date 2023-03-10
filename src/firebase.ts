import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Wtt6NcquQyxJnF2QLEU4wE7H0PBbLl8",
  authDomain: "meet-and-go-project.firebaseapp.com",
  projectId: "meet-and-go-project",
  storageBucket: "meet-and-go-project.appspot.com",
  messagingSenderId: "71618015758",
  appId: "1:71618015758:web:910b067ff9c814a583c25f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);