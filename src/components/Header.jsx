import React, { useEffect, useState } from 'react'
import Navlink from './Navlink'
import { LinkData } from '../Utils/Constants'
const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {

      setScrolled(window.scrollY > 0)
      console.log(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`fixed z-10 top-0 w-full bg-[#050A1A] ${scrolled ? 'bg-[#050A1A]/75 backdrop-blur-xs' : ''}`}>
      <div className='container px-6 py-4 mx-auto'>
        <div className={` font-[Inter] flex justify-between items-center  `}>
          <h2 className=' text-2xl font-bold tracking-normal bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF] text-transparent bg-clip-text' >Portfolio</h2>
          <ul className=' text-white flex gap-8 justify-between '>
            
            {LinkData.map(link=><Navlink  isActive={link?.isActive}>{link.text}</Navlink>)}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header