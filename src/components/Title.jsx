import React from 'react'

const Title = ({title,children}) => {
  return (
   <h2 className='relative pb-5  font-bold font-[Inter] text-4xl text-white text-center after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-50 after:bg-linear-to-r after:from-[#139FE8] after:via-[#139FE8] after:to-[#7B26CF]'>
    {title}
    {children}
   </h2>
  )
}

export default Title