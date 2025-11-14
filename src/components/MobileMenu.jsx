import React,{useState} from 'react'
import Navlink from './Navlink'
import { LinkData } from '../Utils/Constants'
const MobileMenu = () => {
   const[openMenu,setOpenMenu]=useState(false)
  return (
    <div className=' md:hidden  '>
        <ul className='pb-2 mt-4'>
          {LinkData.map((link)=>(<Navlink isActive={link?.isActive}>{link.text}</Navlink>))}
        </ul>
       
    </div>
  )
}

export default MobileMenu