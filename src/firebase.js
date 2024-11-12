import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNLvjDZOlLOKvSGtxofiMlOBUtJ8pWbxU",
  authDomain: "vite-project-bd8e2.firebaseapp.com",
  projectId: "vite-project-bd8e2",
  storageBucket: "vite-project-bd8e2.firebasestorage.app",
  messagingSenderId: "114617041547",
  appId: "1:114617041547:web:41a9dcecb0115a8d9e0a8e",
  measurementId: "G-7MLHHJSZJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
