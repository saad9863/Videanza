// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmd0fEwMpt2KU7mZdfT5JaFwQaEa3IL4Q",
  authDomain: "videanza-359b5.firebaseapp.com",
  projectId: "videanza-359b5",
  storageBucket: "videanza-359b5.appspot.com",
  messagingSenderId: "855193700971",
  appId: "1:855193700971:web:0cbad85d1cd8adb416ff2e",
  measurementId: "G-JMJJC5J45G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container=document.querySelector(".container");
menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("larger-container");
};
