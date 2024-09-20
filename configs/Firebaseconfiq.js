// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiXQtlW4voFumt8B8CnwyodaX_wUHKh2Q",
  authDomain: "react-native-projects-1898c.firebaseapp.com",
  projectId: "react-native-projects-1898c",
  storageBucket: "react-native-projects-1898c.appspot.com",
  messagingSenderId: "590761733748",
  appId: "1:590761733748:web:f1d7ac255fa25e57ff6b21",
  measurementId: "G-7X7FQ79R7G",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// export const auth = getAuth(app);
export { auth };
