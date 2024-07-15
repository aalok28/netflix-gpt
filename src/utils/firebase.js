// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPDCCJPuA_PUsT-IVzd9pfmefeoo757E4",
  authDomain: "netflixgpt-100e5.firebaseapp.com",
  projectId: "netflixgpt-100e5",
  storageBucket: "netflixgpt-100e5.appspot.com",
  messagingSenderId: "50370772311",
  appId: "1:50370772311:web:9e2d83c1e364cb1621d212",
  measurementId: "G-NK0757038V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
