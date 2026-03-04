
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import{ getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkpYXhe6oBbc06PS8dpdgXEGnGCKWWdGY",
  authDomain: "project1-2c236.firebaseapp.com",
  projectId: "project1-2c236",
  storageBucket: "project1-2c236.firebasestorage.app",
  messagingSenderId: "608482107880",
  appId: "1:608482107880:web:439d86a8abcedc97d9445d",
  measurementId: "G-TGVHRHRWXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

