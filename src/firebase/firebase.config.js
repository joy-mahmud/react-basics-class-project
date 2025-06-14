// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1nCz4Pvh8XI6lHCNAIOiRFt_cDKKqTlI",
    authDomain: "react-basic-968ad.firebaseapp.com",
    projectId: "react-basic-968ad",
    storageBucket: "react-basic-968ad.firebasestorage.app",
    messagingSenderId: "738069258417",
    appId: "1:738069258417:web:06c932ce1267c2c52f4290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth