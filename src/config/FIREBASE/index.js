// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBixnElYzazw9Iz0TDl1dXETHrJpN9huig",
//   authDomain: "gofarm-210f4.firebaseapp.com",
//   projectId: "gofarm-210f4",
//   storageBucket: "gofarm-210f4.appspot.com",
//   messagingSenderId: "458608797055",
//   appId: "1:458608797055:web:6f6cc7d784b33a6fc7664a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBixnElYzazw9Iz0TDl1dXETHrJpN9huig",
    authDomain: "gofarm-210f4.firebaseapp.com",
    projectId: "gofarm-210f4",
    storageBucket: "gofarm-210f4.appspot.com",
    messagingSenderId: "458608797055",
    appId: "1:458608797055:web:6f6cc7d784b33a6fc7664a"
});

const FIREBASE = firebase;

export default FIREBASE;