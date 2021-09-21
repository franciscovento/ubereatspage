import uberEats from '../assets/images/ubereats.svg'
import { FaApple, FaAndroid, FaRegWindowClose } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const SideBar = ({handleClick, active}) => {
    const [nuevaClase, setNuevaClase] = useState('');
useEffect(() => {

if(active){
    setNuevaClase('left-0')
}else{
    setNuevaClase('-left-full');
}    

},[active])

  return (
      <>
      
      
        <div className={'transition-all duration-500 ease-in-out bg-white z-50 fixed w-72 h-full flex flex-col justify-between bg-white z-50 fixed w-72 h-full flex flex-col justify-between  ' + nuevaClase}>
        <ul className='m-5 flex flex-col gap-4 text-sm font-semibold'>
            <li className='text-right'><button onClick={handleClick} > <FaRegWindowClose /></button></li>
            <li><button className='bg-black text-white w-full py-5 font-semibold'>Iniciar sesión</button></li>
            <li>Crea una cuenta de empresa</li>
            <li>Anade tu restaurante</li>
            <li>Registrate para hacer entregas</li>
        </ul>
        <div className='mb-10 mx-5'>
            <div className='flex gap-2'>
                <img className='w-14' src={uberEats} alt="" />
                <p>Descubre muchas más opciones en la app.</p>
            </div>
            <div className='mt-2 flex gap-2'>
            <button className='bg-softGray flex items-center gap-2 rounded-full py-2 px-3'> <FaApple /> Iphone</button>
            <button className='bg-softGray flex items-center gap-2 rounded-full py-2 px-3'> <FaAndroid /> Android</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default SideBar
