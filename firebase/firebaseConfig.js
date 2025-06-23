import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCrFnJsOD6cv2vSszMYx8J-QdzNUYb2k7c",
  authDomain: "studysync-b9314.firebaseapp.com",
  projectId: "studysync-b9314",
  storageBucket: "studysync-b9314.firebasestorage.app",
  messagingSenderId: "1084042934341",
  appId: "1:1084042934341:web:06153ecac7dcebaf3b0b2c",
};

// Initialize Firebase app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth only once and only on native
if (Platform.OS !== 'web') {
  try {
    // This will throw if already initialized, so we catch and ignore
    initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    // Ignore duplicate initialization error
  }
}

export default app;
