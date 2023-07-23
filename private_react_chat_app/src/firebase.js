import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhtI6HtPZVkacK2gcZnCJYRD4WaT8lI6o",
  authDomain: "private-chat-app-19d6e.firebaseapp.com",
  projectId: "private-chat-app-19d6e",
  storageBucket: "private-chat-app-19d6e.appspot.com",
  messagingSenderId: "150085127551",
  appId: "1:150085127551:web:8b59ba80e902c02f245e4a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
