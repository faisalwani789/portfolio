import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#1A0B2E] flex justify-around items-center h-25'>
      <img className='w-6' src="Logo.png" alt="menu" />
      <ul className='text-white flex min-w-1/3 justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Lab</li>
      </ul>
    </div>
  )
}

export default Header