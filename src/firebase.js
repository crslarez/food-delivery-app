// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,collection ,getDocs ,} from "firebase/firestore";



import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX5-v4t_VTArmlaYFJlPrwEpgV27K2_2A",
  authDomain: "delivery-app-2b252.firebaseapp.com",
  projectId: "delivery-app-2b252",
  storageBucket: "delivery-app-2b252.appspot.com",
  messagingSenderId: "959027708091",
  appId: "1:959027708091:web:f37ea7f0bf800dedf9e99e",
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

