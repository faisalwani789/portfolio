import React from 'react'

const Navlink = ({children,isActive}) => {
  return (
    <li className={`relative after:content-[""] after:absolute after:left-0 after:bottom-0 ${isActive?'after:w-full':'after:w-0'} after:h-0.5  after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer`} >{children}</li>
  )
}

export default Navlink