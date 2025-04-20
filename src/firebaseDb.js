// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9561XKXfeSoYnpxuKtfC6C4jm4Kgb_tU",
  authDomain: "quasartodolist-c0728.firebaseapp.com",
  projectId: "quasartodolist-c0728",
  storageBucket: "quasartodolist-c0728.firebasestorage.app",
  messagingSenderId: "470886337738",
  appId: "1:470886337738:web:276782b21b64becfac3833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;
