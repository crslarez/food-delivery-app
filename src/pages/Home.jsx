import React from "react";
import Layout from "../components/Layout"
import RestaurantCard from "../components/RestaurantCard";
import "../styles/home.scss"
import products from "./Products";
import { Link, Navigate } from "react-router-dom";
import { getData } from "../services/GetData"
import { useState, useEffect, useContext } from "react";
import { async } from "@firebase/util";
import Products from "./Products";
import Account from "../components/Account";
import Order2 from "../components/Order2";
import { Context } from "../components/Layout";



const pepito = getData()







const Home = () => {




  const context = useContext(Context);

  console.log(context);







  return (

    <div className="main">


      <div className="login bg-white h-screen flex justify-between flex-col max-w-md mx-auto p-5 py-20 ">

        <div className="flex pr-5 ">
          <i className="text-yellow-300 m-3 fa-solid text-200 fa-location-dot location__icon"></i>
          <div className=' flex flex-col '>
            <p className='text-yellow-400 uppercase text-xs'>Deliver to</p>
            <p className='text-grey-800 pr-5 '>882 Wessll St, New York</p>
          </div>
        </div>

        <div className="m-15 mb-5 ml-5  w-50vh h-1 rounded-lg">
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1676398916/food-app/Promo_1_jvxz2w.png" alt="image-descount" className='card-desc__imgn' />
        </div>

        <p className="ml-5  text-2xl font-medium mt-10">Restaurants and Coofies</p>

        <div className="flex flex-wrap  w-200 mb-2 ">
        <div className="flex flex-wrap  w-200 mb-2 ">
          <button className="bg-gray-400 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300">All</button>        
          <button className="bg-gray-400 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 "><i className="fa-solid fa-bowl-food btn-filter__icon"></i>Arroz</button>        
          <button className="bg-gray-400 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 "><i className="fa-solid fa-drumstick-bite btn-filter__icon"></i>Pollo</button>
          <button className="bg-gray-400 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 "><i className="fa-solid fa-utensils btn-filter__icon"></i>Sopa</button>
        </div> </div>

        <div className=" flex flex-col align-center  items-center "  >
          {context.restaurantes.map(({
            description,
            name,
            direccion,
            logo,
            idItem,

          }) => (
            <RestaurantCard key={idItem} descripcion={description} nombre={name} direccion={direccion} imagen={logo} id={idItem} />



          ))}















        </div>




      </div>







    </div>
  );
};

export default Home;
