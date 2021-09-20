

const Card = ({img, title, link}) => {
    
  return (
    <div className='px-3 mb-8'>
      <img src={img} alt={title} />
      <h2 className='text-lg sm:text-subtitle font-semibold'>{title}</h2>
      <h5 className='underline text-sm sm:text-base font-medium'>{link}</h5>
    </div>
  )
}

export default Card
