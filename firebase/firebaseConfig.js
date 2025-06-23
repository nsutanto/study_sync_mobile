import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrFnJsOD6cv2vSszMYx8J-QdzNUYb2k7c",
  authDomain: "studysync-b9314.firebaseapp.com",
  projectId: "studysync-b9314",
  storageBucket: "studysync-b9314.firebasestorage.app",
  messagingSenderId: "1084042934341",
  appId: "1:1084042934341:web:06153ecac7dcebaf3b0b2c",
  measurementId: "G-6ZVE5VH0FL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
