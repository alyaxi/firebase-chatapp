import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlAznwqCRYjINT5c84lk_1bdG2riu6Yy0",
  authDomain: "chatapp-project-b9921.firebaseapp.com",
  projectId: "chatapp-project-b9921",
  storageBucket: "chatapp-project-b9921.appspot.com",
  messagingSenderId: "205559356162",
  appId: "1:205559356162:web:ad97d5b3f1e8f9fa1ec01b",
  measurementId: "G-GQH4KWZ0MS",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { provider, db, auth, app };
