import { useState } from 'react';
import logo from '../assets/images/logo.svg'
import SideBar from './SideBar';




const NavBar = () => {

  const [navBg, setNavBg] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setNavBg("bg-white ");
    }else{
      setNavBg("");
    }
  }

window.addEventListener('scroll', handleScroll);

const [active, setActive] = useState(false);

const handleClick = () => {
  setActive(prev => !prev);
}

  return (
    <>
    <div className={'flex justify-between items-center bg-transparent z-10 fixed w-full transition duration-300  ' + navBg}>
      <div className='px-10 py-6 flex gap-6 z-10'>
        <button onClick={handleClick} className='w-6 h-6'>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="db dc c4 cg"><path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path></svg>
        </button>
          <img src={logo} alt="" />
      </div>
      <div className='px-10 z-10 hidden sm:inline'>
          <button className='px-4 sm:py-3 bg-gray rounded-full text-lg font-medium cursor-pointer shadow hover:bg-grayHover'>Iniciar sesión</button>
      </div>
    </div>
    <SideBar active={active} handleClick={handleClick} />
    </>
  )
}

export default NavBar
