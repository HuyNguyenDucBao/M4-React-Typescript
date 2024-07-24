// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9sKrKaZ_Pe__-w8LRc5hLCY34n46iPIk",
  authDomain: "new-project-2feea.firebaseapp.com",
  projectId: "new-project-2feea",
  storageBucket: "new-project-2feea.appspot.com",
  messagingSenderId: "498691822082",
  appId: "1:498691822082:web:73194bc43c722f4b464d1b",
  measurementId: "G-F3PJ4RRBXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const analytics = getAnalytics(app);
 
