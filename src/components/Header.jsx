import React, {  useState } from 'react'
import Navlink from './Navlink'
import { LinkData } from '../Utils/Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link}from "react-router-dom"
import TitleColor from './TitleColor'
import MobileMenu from './MobileMenu'
const Header = () => {
  const[active,setActive]=useState('Home')
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = () => {
    setOpenMenu(prev => (!prev))
  }
 
  return (
    <nav className='fixed z-30 w-full bg-[#050A1A]/85 backdrop-blur-xs shadow-lg '>
      <div className='container px-6 py-4 mx-auto'>
        <div className={` font-[Inter] flex justify-between items-center  `}>
          <Link to={"/"}><TitleColor className={'text-2xl font-bold'} title={'Portfolio'}/></Link>
          
          <ul className=' text-white hidden md:flex md:gap-8 md:justify-between '>

            {LinkData.map(link => <Navlink active={active} setActive={setActive}>{link.text}</Navlink>)}

          </ul>
          <div className='md:hidden'>
            <button onClick={handleMenu} className='hover:text-LinkPrimary text-slate-200'>
              <FontAwesomeIcon className='text-2xl' icon={faBars} />
            </button>
          
          </div>
        </div>
         {openMenu && <MobileMenu />}
      </div>
    </nav>
  )
}

export default Header