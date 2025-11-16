import React, { forwardRef} from 'react'

const InputBox = forwardRef(({name,label,error,...rest},inputRef) => {
 
  return (
    <div>
         <label htmlFor={name} className='block mb-2 font-medium'>{label}</label>
        <input ref={inputRef} {...rest} className=' contact-input rounded-lg w-full focus:outline-none' />
        {error && <p>{error}</p>}
    </div>
  )
})

export default InputBox