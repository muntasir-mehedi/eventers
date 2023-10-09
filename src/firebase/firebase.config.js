// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsZhlYExgZi2BdjjYYt0F4ZmYwzD2xsTg",
  authDomain: "eventers-fc422.firebaseapp.com",
  projectId: "eventers-fc422",
  storageBucket: "eventers-fc422.appspot.com",
  messagingSenderId: "444390330726",
  appId: "1:444390330726:web:02f5d4046eec86828b78a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;