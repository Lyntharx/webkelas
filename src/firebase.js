// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWPdqpn0_EH8jUtf3ysyoYhFqOlO9SC8Y",
  authDomain: "web-kelas-a68ff.firebaseapp.com",
  projectId: "web-kelas-a68ff",
  storageBucket: "web-kelas-a68ff.firebasestorage.app",
  messagingSenderId: "873220856661",
  appId: "1:873220856661:web:92b078a37850f5c1c6eddc",
  measurementId: "G-7W76Q401V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();