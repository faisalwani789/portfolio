import React, { forwardRef} from 'react'

const InputBox = forwardRef(({name,label,error,type, ...rest},ref) => {

  return (
    <div>
         <label htmlFor={name} className='block mb-2 font-medium'>{label}</label>
        <input type={type} name={name} id={name} ref={ref} {...rest}  className=' contact-input rounded-lg w-full focus:outline-none' />
        {error && <p className='text-red-600'>{error?.message}</p>}
    </div>
  )
})

export default InputBox