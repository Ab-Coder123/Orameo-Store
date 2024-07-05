// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKecx8HW-5XlFBZ1skDTC-SMgiQQJLsms",
  authDomain: "authentication-94d08.firebaseapp.com",
  projectId: "authentication-94d08",
  storageBucket: "authentication-94d08.appspot.com",
  messagingSenderId: "987189445239",
  appId: "1:987189445239:web:c5f53f2124a8630391bc72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth };