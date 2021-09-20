import img1 from '../assets/images/img1.svg'
import img2 from '../assets/images/img2.svg'
import img3 from '../assets/images/img3.svg'
import Card from './Card'
const CardsSection = () => {
  return (
    <div className='grid md:grid-cols-3 mt-20 mb-12 px-6'>
      <Card img={img1} title={'Proporciona comida a tus empleados'} link={"Crea una cuenta de empresa"} />
      <Card  img={img2} title={'Tu restaurante, a domicilio'} link={"Añade tu restaurante"}/>
      <Card img={img3} title={'Reparte con Uber Eats'} link={"Regístrate para hacer entregas"}/>
    </div>
  )
}

export default CardsSection
