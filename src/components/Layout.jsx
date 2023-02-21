import React, { createContext } from "react";
import { Outlet, Link ,useParams} from "react-router-dom";
import { getData } from "../services/GetData";
import { useState, useEffect, } from "react";
import { getDataRest } from "../firebase";

export const Context = createContext()

const Layout = () => {

    const { id } = useParams()
    const [restaurantes, setRestaurantes] = useState(null)
    const getDataRess = async () => {
        try {
            const res = await getDataRest()
            setRestaurantes(res.restaurants);
            console.log(restaurantes);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataRess()
    }, [])

  const FilterProducts = () => {
    const category = restaurante.menu.filter(iten => iten.category == "arroz")
    setRestaurantes(category)
    console.log(restaurantes);
  }

  const restaurante = restaurantes?.find(item => item.idItem === id)

    return (
        <>
            <div>
                <Context.Provider value={{restaurantes ,setRestaurantes,FilterProducts,restaurante}}><Outlet /></Context.Provider>
            </div>


            <div className='bg-white '>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/home" ><i className="fa-solid fa-house-chimney divNav__icon w-5 focus:pointer-events-auto"></i></Link>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/search" ><i className="fa-solid fa-magnifying-glass divNav__icon w-5 focus:pointer-events-auto"></i></Link>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/orders" ><i className="fa-solid fa-clock-rotate-left divNav__icon w-5 focus:pointer-events-auto"></i></Link>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/profile" ><i className="fa-regular fa-user divNav__icon w-5 focus:pointer-events-auto"></i></Link>
            </div>


        </>
    );
};

export default Layout;






