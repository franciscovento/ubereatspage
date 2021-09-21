import logo2 from '../assets/images/logo2.svg'
import playstore from '../assets/images/googleplay.png'
import appstore from '../assets/images/appstore.svg'

const Footer = () => {
  return (
    <div className= 'mt-20 bg-black '>
     <div className='py-20 px-10'>
       <div className='flex gap-10 flex-col md:flex-row '>
           <div className ='flex flex-1 max-w-2xl flex-col items-start gap-5 justify-between'>
               <img className='h-6' src={logo2} alt="" />
               <div className='flex gap-5'>
                   <img className='h-10' src={appstore} alt="" />
                   <img className='h-10' src={playstore} alt="" />
               </div>
           </div>
           <div className='flex gap-5 flex-row'>
           <div className='text-white'>
               <ul className='flex flex-col gap-4'>
                   <li>Obetener ayuda</li>
                   <li>Anade tu restaurante</li>
                   <li>Regístrate para hacer entregas</li>
                   <li>Crea una cuenta de empresa</li>
                   <li>Ahorra en tu primer pedido</li>
               </ul>
           </div>
           <div className='text-white'>
               <ul className='flex flex-col gap-4'>
                   <li>Restaurantes cercanos</li>
                   <li>Ver todas las ciudades</li>
                   <li>Ver todos los paises</li>
                   <li>Leer nuestro blog</li>
                   <li>Acerca de Uber Eats</li>
               </ul>
           </div>
           </div>
       </div>
       <hr className='text-white mt-12' />
       <div className='flex justify-between mt-5'>
           <div className='text-white'>
              FB TW IN
           </div>
           <div>
               <ul className='text-gray hidden md:flex gap-10'>
                   <li>Política de privacidad</li>
                   <li>Condiciones</li>
                   <li>Precios</li>
                   <li>No vender mi información (California)</li>
               </ul>
           </div>
       </div>
       <div className='text-white flex-col gap-5 flex sm:flex-row sm:gap-10 mt-2 justify-end'>
           <p>Este sitio está protegido por reCAPTCHA y se aplican las Condiciones de servicio y la Política de privacidad de Google</p>
           <p>2021 Uber Technologies Inc.</p>
       </div>
     </div>
    </div>
  )
}

export default Footer
