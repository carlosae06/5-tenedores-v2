
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5ppWX9-2tXFJ2d8BkrcvDet9R5EaAwbk",
  authDomain: "tenedores-v2-593db.firebaseapp.com",
  projectId: "tenedores-v2-593db",
  storageBucket: "tenedores-v2-593db.firebasestorage.app",
  messagingSenderId: "978691412539",
  appId: "1:978691412539:web:e73973f87f400ba071021e"
};

export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase); 

//const auth = getAuth(initFirebase);

//connectAuthEmulator(auth, "http://10.0.2.2:9099");

//export {auth};