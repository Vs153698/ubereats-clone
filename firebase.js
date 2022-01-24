import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const app = initializeApp({
    apiKey: "AIzaSyAe4_s8Y4f_8f4YeXmb_gkeGAZ4_DHPfm0",
    authDomain: "ubereats-clone-47d7c.firebaseapp.com",
    projectId: "ubereats-clone-47d7c",
    storageBucket: "ubereats-clone-47d7c.appspot.com",
    messagingSenderId: "659900502457",
    appId: "1:659900502457:web:39e97dfe1f692a2bd46668"
});
const db = getFirestore(app)
  
export default db;
