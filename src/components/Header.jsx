import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#050A1A] font-[Inter] flex justify-between items-center h-15 px-6'>
      <h2 className=' text-2xl font-bold tracking-normal bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF] text-transparent bg-clip-text' >Portfolio</h2>
      <ul className=' text-white flex gap-8 justify-between '>
        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer' >Home</li>
        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer'>About</li>
        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer'>Skills</li>
        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer'>Projects</li>
        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF] after:transition-all after:duration-500 hover:after:w-full cursor-pointer'>Contact</li>
      </ul>
    </div>
  ) 
}

export default Header