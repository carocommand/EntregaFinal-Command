import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA7sghCpYxqIUO9Y8ehNfO6mWOFzLqJJY",
  authDomain: "tienda-caro.firebaseapp.com",
  projectId: "tienda-caro",
  storageBucket: "tienda-caro.appspot.com",
  messagingSenderId: "202820499314",
  appId: "1:202820499314:web:3d0f0e4d59fdb0a3f58feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)