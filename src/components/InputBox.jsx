import React from 'react'

const InputBox = ({name}) => {
  return (
    <div>
         <label htmlFor={name} className='block mb-2 font-medium'>{name}</label>
        <input className=' contact-input rounded-lg w-full focus:outline-none' required id={name} type="text"/>
    </div>
  )
}

export default InputBox