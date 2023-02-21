import React, { createContext } from "react";
import { Outlet, Link ,useParams} from "react-router-dom";
import { getData } from "../services/GetData";
import { useState, useEffect, } from "react";


export const Context = createContext()

const Layout = () => {

    const { id } = useParams()
    const [restaurantes, setRestaurantes] = useState([])
    


   
    const getDataRess = async () => {
        try {
            const res = await getData()

            setRestaurantes(res)
                ;

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
    // console.log(category);
    // console.log(restaurante);
    // const filter1 =context.restaurantes.map(p=>{
    //   return p.menu.filter(item=>item.category)
    //   // const res1=p.menu.filter(item=> item.category ==="arroz");
    //   // setProducts( res1);
    //   // return p.menu[0].category === "arroz"
    // })
    //  const FilterProducts = filter1.filter(item=> item)
    //  const a = FilterProducts.filter(item=>item)
    // // console.log(filter);
    // // console.log(context[0].menu[0].category);
    // console.log(context.restaurantes[0].menu[0].category);
    // console.log(filter1);
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






