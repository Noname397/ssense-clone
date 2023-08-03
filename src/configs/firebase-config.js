import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyC6TX7zlTxn22FK_OFbEZ_rYiiw6gDuHys",
  authDomain: "ssense-auth-77786.firebaseapp.com",
  projectId: "ssense-auth-77786",
  storageBucket: "ssense-auth-77786.appspot.com",
  messagingSenderId: "539597112329",
  appId: "1:539597112329:web:31f7c2429e324c665924d8",
  measurementId: "G-LGGQL88LDX",
  databaseURL: "https://ssense-auth-77786-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const realtimeDatabase = getDatabase(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
