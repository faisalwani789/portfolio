import React, { forwardRef} from 'react'

const InputBox = forwardRef(({name,text},inputRef) => {
 
  return (
    <div>
         <label htmlFor={name} className='block mb-2 font-medium'>{text}</label>
        <input ref={inputRef} className=' contact-input rounded-lg w-full focus:outline-none' required id={name} name={name} type="text"/>
    </div>
  )
})

export default InputBox