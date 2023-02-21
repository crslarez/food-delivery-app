import React from 'react'
import logo from "../assets/images/Logo.png";

const Account = () => {
  const { nombre } = "user";

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
          <button className="bg-gray-200 w-80 h-8 m-1  mb-2 mt-4 rounded text-xs text-left   hover:bg-yellow-300 ">
            <i className="float-right mr-2 ml-4 fa-solid fa-pencil -slice btn-filter__icon text"></i>
            Sergio Lara
          </button>
          <button className="bg-gray-200 w-80 h-8 mr- mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className=" float-right mr-2 ml-4 fa-solid fa-pencil btn-filter__icon"></i>
            sergiolaradiaz3@gmail.com
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1 mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className="float-right mr-2 m4-4 fa-solid fa-pencil btn-filter__icon"></i>
            321 565 8683
          </button>
          <button className="bg-gray-200 w-80 h-8 m-1 mr-1  mb-2 rounded text-xs text-left hover:bg-yellow-300 ">
            <i className=" float-right mr-2 ml-4 fa-solid fa-pencil btn-filter__icon"></i>
            01.12.1992
          </button>
          <button className="w-80 h-8 mt-60 mr-1 rounded text-xs  bg-yellow-300 ">
            <i className="   fa-solid  btn-filter__icon"></i>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account