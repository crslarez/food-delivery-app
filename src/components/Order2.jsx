import React, { useContext } from "react";
import Image1 from "../assets/images/Img.png";

const Order2 = () => {
  
  const { nombre } = "user";

  return (
    <div className="main">
      <div className="w-full text-center bg-white h-screen flex flex-col max-w-md mx-auto p-5">
        <div className="flex flex-col items-center"></div>
        <div className=" font-bold mt-2 ">
          <h2>Order is accepted</h2>
        </div>

        <ul>
          <li key="img-carousel-1">
            <img
              className="m-5 items-center     bg-white"
              src={Image1}
              alt="Info image 1"
            />
            <button className="w-80 h-8 mt-60 mr-1 rounded text-xs  bg-yellow-300 ">
              <i className="   fa-solid  btn-filter__icon"></i>
              Follow order
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Order2;