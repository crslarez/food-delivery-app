import React, { useState ,useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { auth, provider } from "../firebase";
import { FcGoogle, } from "react-icons/fc"
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user/userSlice";
import { GeoPoint } from "firebase/firestore";



const Login = () => {
  //vamos a traer el estado de redux
    const dispatch = useDispatch();
    const [lat , setLat] = useState(0);
    const [lng , setLng] = useState(0)

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }, []);
    


  const handleLogin = () => {
    const location= new GeoPoint(lat,lng)
    signInWithPopup(auth, provider)
      .then((result) =>
        
        dispatch(
          addUser(
            {
              correo: result.user.email,
              nombre: result.user.displayName,
              foto: result.user.photoURL,
              direccion: "",
              celular:"",
              

             
             

            }
          )
        ))
        
        
  };

  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__image">
          <img src={Logo} alt="Logo" width="100" />
        </div>
        <h3>Sing in</h3>
        <p>
          Login or create an account with your phone number to start ordering
        </p>

      </div>

      <div className="Login__footer">
        <div className="footer__text">
          <p>By clicking the button next you accept.</p>
          <span>Terms of use</span>
        </div>
        <div className="Login__button">
          <button type="button" onClick={handleLogin}>
            <FcGoogle size="1.5rem" />
            Login whith google</button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;