import React from 'react'

const Title = ({title,children}) => {
  return (
   <h2 className='font-bold font-[Inter] text-4xl text-white text-center'>
    {title}
    {children}
   </h2>
  )
}

export default Title