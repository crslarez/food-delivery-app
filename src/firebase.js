// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,collection ,getDocs ,} from "firebase/firestore";



import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmrSD10oxVn3oYlqoTithae0KxxISwCkM",
  authDomain: "food-delivery-app-c2f6d.firebaseapp.com",
  projectId: "food-delivery-app-c2f6d",
  storageBucket: "food-delivery-app-c2f6d.appspot.com",
  messagingSenderId: "1056068637007",
  appId: "1:1056068637007:web:f37ea7f0bf800dedf9e99e",
  measurementId: "G-3FZLMLXBQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// export const getData = async () => {
//   const res = await getDocs(collection(db, 'restaurantes'));

//   return res

// }

