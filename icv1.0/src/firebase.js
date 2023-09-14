//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD50iy2o93fuAXHa1oP9hTbs68NltD8EHQ",
    authDomain: "social-eea85.firebaseapp.com",
    projectId: "social-eea85",
    storageBucket: "social-eea85.appspot.com",
    messagingSenderId: "883510134082",
    appId: "1:883510134082:web:55abaf5a91d6e20b5834db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleAuthProvider = new GoogleAuthProvider(app);

export { db, auth, storage, googleAuthProvider };