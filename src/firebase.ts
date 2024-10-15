// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAWZ1phW2YvvjH2T9mp3UMHIM99EJDwWQ",
  authDomain: "flopcart-669a6.firebaseapp.com",
  projectId: "flopcart-669a6",
  storageBucket: "flopcart-669a6.appspot.com",
  messagingSenderId: "844265479823",
  appId: "1:844265479823:web:488e1f524a0536051a1afa",
  measurementId: "G-6HK6MTQZSV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
