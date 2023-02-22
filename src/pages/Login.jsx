import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { auth, provider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  const handleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider).then((result) => {
      dispatch(
        addUser({
          correo: result.user.email,
          nombre: result.user.displayName,
          foto: result.user.photoURL,
          direccion: "",
          celular: "",
        })
      );
      setUser({
        correo: result.user.email,
        nombre: result.user.displayName,
        foto: result.user.photoURL,
        direccion: "",
        celular: "",
      });
      if (user) {
        navigate("/app/home");
      } else {
        navigate("/app/home");
      }
    });
  };

  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__image">
          <img src={Logo} alt="Logo" width="100" />
        </div>
        <h3>Sing in</h3>
        <p>Login or create an account with your phone number to start ordering</p>
      </div>

      <div className="Login__footer">
        <div className="footer__text">
          <p>By clicking the button next you accept.</p>
          <span>Terms of use</span>
        </div>
        <div className="Login__button">
          <button type="button" onClick={handleLogin}>
            <FcGoogle size="1.5rem" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;