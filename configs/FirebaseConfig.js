// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8t1sbyHGn4ypelQW43YNhaP-W0Y_Q0jI",
  authDomain: "ai-travel-planner-90a45.firebaseapp.com",
  projectId: "ai-travel-planner-90a45",
  storageBucket: "ai-travel-planner-90a45.appspot.com",
  messagingSenderId: "1091776747166",
  appId: "1:1091776747166:web:f71373d2e61a3fa1bbcd8f",
  measurementId: "G-B43LGG17YY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and set persistence to AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };