import { db } from "../firebase";
import { collection , getDocs } from "firebase/firestore";



export const getData = async () => {
    const res = await getDocs(collection(db, 'restaurantes'));
    const  documentos = []
    res.forEach(doc=>{
        documentos.push({ ...doc.data(), idItem: doc.id })
    })
    return documentos
  
  }