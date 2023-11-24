// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ0dprcOghmQfPL8GWYgauG8W9F5v5RVo",
    authDomain: "m322-zoo-9a45a.firebaseapp.com",
    projectId: "m322-zoo-9a45a",
    storageBucket: "m322-zoo-9a45a.appspot.com",
    messagingSenderId: "436198392112",
    appId: "1:436198392112:web:7ee4cc56160e3fa49188f5",
    measurementId: "G-MHQM951E65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
