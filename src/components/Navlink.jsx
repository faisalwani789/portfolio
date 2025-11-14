import React,{useState} from 'react'

const Navlink = ({children,active,setActive}) => {
  
  const handleClick=()=>{
    setActive(children)
 
    document.getElementById(`${children}`).scrollIntoView({
      block:'start',
      behavior:'smooth'
    })
  }
  return (
    <li className={`relative after:content-[""] after:absolute after:left-0 after:bottom-0 ${active=== children?'after:w-full':'after:w-0'} after:h-0.5  after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer mb-2 md:mb-0` } onClick={()=>handleClick()} >{children}</li>
  )
}

export default Navlink