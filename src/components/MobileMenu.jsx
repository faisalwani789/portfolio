import React,{useState} from 'react'
import Navlink from './Navlink'
import { LinkData } from '../Utils/Constants'
const MobileMenu = ({active,setActive}) => {
  return (
    <div className=' md:hidden  '>
        <ul className='pb-2 mt-4'>
          {LinkData.map((link)=>(<Navlink active={active} setActive={setActive}>{link.text}</Navlink>))}
        </ul>
       
    </div>
  )
}

export default MobileMenu