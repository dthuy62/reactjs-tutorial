// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}


// Your web app's Firebase configuration
const firebaseConfig: IFirebaseConfig = {
  apiKey: "AIzaSyAPHPFn3-erCGEeabPw8N8TkQlgrOx-dOk",
  authDomain: "files-upload-2ab16.firebaseapp.com",
  projectId: "files-upload-2ab16",
  storageBucket: "files-upload-2ab16.firebasestorage.app",
  messagingSenderId: "897815242213",
  appId: "1:897815242213:web:3bb1fa3c42c1bd95c97b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
