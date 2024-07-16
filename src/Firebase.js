// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCNkRFkDGsnsU5cKzO3__3qBxiClvwIMs",
  authDomain: "natflixclone2.firebaseapp.com",
  projectId: "natflixclone2",
  storageBucket: "natflixclone2.appspot.com",
  messagingSenderId: "41146053251",
  appId: "1:41146053251:web:08f0c48af839369d4e61b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();