import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import logo from "../assets/images/Img.png";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";

const Profile = () => {
  /*const { user } = useContext(authCont.authContext)
  console.log(user);

  const { nombre, correo, foto, celular, direccion } = user

  const handleLogout = () => {
    authApi.logout()
  }*/
  const { nombre, correo, foto, celular, direccion } = "user";

  return (
    <div className="main">
      <div className="w-full text-center bg-white h-screen flex flex-col max-w-md mx-auto p-5">
        <div className="flex flex-col items-center">
          <img
            className="w-20  items-center rounded-full mt-2"
            src={logo}
            alt="profile"
          />
        </div>
        <div className=" font-bold mt-2">
          <h2>{nombre}</h2>
        </div>

        <div className="flex flex-col items-center  w-200 mb-5 ">
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1 mb-2 mt-4 rounded text-xs text-left  hover:bg-yellow-300 ">
            <i className="mr-2 ml-4 fa-solid fa-bell -slice btn-filter__icon"></i>
            Account edit
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1 mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className="mr-2 ml-4 fa-solid fa-credit-card btn-filter__icon"></i>
            Payment
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1 mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className=" mr-2 ml-4 fa-solid fa-globe-americas btn-filter__icon"></i>
            Language
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1  mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className="mr-2 ml-4 fa-solid fa-map-pin btn-filter__icon"></i>
            Location
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1 mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className="mr-2 ml-4 fa-solid fa-face-smile btn-filter__icon"></i>
            FAQ
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1 mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className="mr-2 ml-4 fa-solid fa-envelope btn-filter__icon"></i>
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;