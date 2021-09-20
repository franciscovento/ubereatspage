import React from 'react'
import bg1 from '../assets/images/bg1.svg'
import bg2 from '../assets/images/bg2.svg'
const Hero = () => {
  return (
   <div className="HERO relative ">
     <div className='bg-pink h-screen overflow-hidden	flex'>
        <img className='object-cover h-full  ' src={bg2} alt="" />
        <div style={{flex: "1 0 300px"}}></div>
        <img className='object-cover h-full  ' src={bg1} alt="" />
     </div>
      <div className='absolute inset-0 flex items-center px-10 '>
        <div>
          <h1 className='text-4xl sm:text-title font-bold leading-snug mb-10'>Pide lo que quieras: desayuno, comida o cena.</h1>
          <div className='flex gap-2 flex-col md:flex-row'>
            <input className='p-4 md:max-w-lg flex-1 outline-none text-lg font-medium bg-gray' type="text" placeholder='Introduce la dirección de entrega' />
            <select className='p-4 outline-none cursor-pointer text-lg font-medium bg-gray border-r-8 border-gray' name="hora" id="hora">
            <option value="">Entregar ahora</option>
            <option value="">Programar más tarde</option>
            </select>
            <button className='bg-black text-white p-4 text-lg font-medium hover:bg-blackHover'>Buscar comida</button>
          </div>
          <div className='mt-6 text-sm font-medium'>
            <a href='/home' className='underline'>Iniciar sesión</a>
            <span> para consultar tus direcciones recientes</span>
          </div>
        </div>
      </div>

   </div>
  )
}

export default Hero
