import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth, Auth } from 'firebase/auth';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCrFnJsOD6cv2vSszMYx8J-QdzNUYb2k7c",
  authDomain: "studysync-b9314.firebaseapp.com",
  projectId: "studysync-b9314",
  storageBucket: "studysync-b9314.firebasestorage.app",
  messagingSenderId: "1084042934341",
  appId: "1:1084042934341:web:06153ecac7dcebaf3b0b2c",
};

let app;
let auth;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

if (Platform.OS !== 'web') {
  // Only initializeAuth ONCE and never call getAuth(app) before this
  if (!auth) {
    try {
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
    } catch (e) {
      // If already initialized, get the existing instance
      auth = getAuth(app);
    }
  }
} else {
  auth = getAuth(app);
}

export { app, auth };
