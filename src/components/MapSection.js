import map from '../assets/images/map.jpg'

const MapSection = () => {
  return (
    <div className='overflow-hidden'>
     <div className='px-10 mb-5 flex flex-col sm:items-center sm:justify-between sm:flex-row font-semibold'>
     <h2 className=' text-3xl md:text-4xl font-bold'>Ciudades cerca de mi</h2> 
     <p className='underline'>Ver lista con más de 500 ciudades</p>
     </div>
     <div className='px-4 mb-6 h-80 flex justify-center	'>
     <img className='object-cover mx-6 h-full w-full border-opacity-100' src={map} alt="" />
     </div>
    </div>
  )
}

export default MapSection
