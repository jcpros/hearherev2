/* import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import  {getStorage,ref, uploadBytes} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";
import {collection, query, where, getDocs,getFirestore} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
// Configure Firebase


const firebaseConfig = {
    apiKey: "AIzaSyA3NwGgMkzgWdQ0U9sbMDsTrqGYOwRpQfg" ,
    authDomain: "hearhere-a907b.firebaseapp.com",
    projectId: "hearhere-a907b",
    storageBucket: "hearhere-a907b.firebasestorage.app",
    messagingSenderId: "477854437797",
    appId: "1:477854437797:web:cbe47e4a7f18543bbbd84c",
    measurementId: "G-B2LYSVQSGY"
};
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const querySnapshot = await getDocs(collection(database, "markUpload"));


querySnapshot.forEach((doc) => { 
  console.log(doc.id, " => ", doc.data());
}); */