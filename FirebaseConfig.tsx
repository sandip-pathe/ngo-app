import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBHJ9gzmcex3-VH6_9QYaaJfCdeqCSlCrE",
    authDomain: "sevafoundatiom.firebaseapp.com",
    projectId: "sevafoundatiom",
    storageBucket: "sevafoundatiom.appspot.com",
    messagingSenderId: "316154321668",
    appId: "1:316154321668:web:02a84ac8e0d70c1be1ce51",
    measurementId: "G-5HD9T655TW"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);