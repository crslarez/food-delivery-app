import React from 'react'
import img from '../assets/images/Img.png'
import { Link, useNavigate } from 'react-router-dom'
import { getData } from '../services/GetData'
import { Navigate } from 'react-router-dom'
import Products from '../pages/Products'





const RestaurantCard = ({ descripcion, nombre, direccion, imagen, key ,id }) => {


  const navigate = useNavigate()


  //FUNCIONES EN ESTE COMPONENTE
  // Traer la data de los restaurantes de la Firesotre
  // Mapear e impirmir una card por cada restaurante

  return (
    
    <ul>
    
      <div  onClick={()=>{navigate(`/app/home/products/${id}`)
    console.log(id);
  }}
      className='flex items-center  m-1 gap-3    bg-gray-200'>
        
        <div className="">
          <img src={imagen} className=" rounded-full m-2  " alt="" />
        </div>

        <div className="w-1/2 ">
          <h5 className="text-xl">{nombre}</h5>
          <p className="">
            <i className=""></i>
          </p>
          <p className="text-xs w-1/2 ">{descripcion}</p>
          <p className="text-xs w-1/2 "></p>
        </div>
        <Link className='w-28' to="/app/home/products"><i className="fa-solid fa-chevron-right"></i></Link>
      </div>
      </ul>



    
  )
}

export default RestaurantCard