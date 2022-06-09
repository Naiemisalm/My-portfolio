// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCGP1kcfl5OgugiqBMFZFcQdFyV8PNqaI",
  authDomain: "my-portfolio-625b7.firebaseapp.com",
  projectId: "my-portfolio-625b7",
  storageBucket: "my-portfolio-625b7.appspot.com",
  messagingSenderId: "635252544361",
  appId: "1:635252544361:web:2699fc0af6637d709863f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth = getAuth(app)
export default auth; 