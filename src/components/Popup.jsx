import React from 'react'
import { useEffect } from 'react'
import {RingLoader} from 'react-spinners'
const Popup = ({submitting}) => {
    // const handleClick=()=>{
    //   setMessageSent(false)
    //   setSuccessMsg('')
    // }
    useEffect(() => {
    if (submitting) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
     
    }
  }, [submitting])
  return (
    <div className='fixed inset-0 bg-black/60 z-60 flex justify-center items-center ' >
          {submitting && (<><RingLoader size={32} color='#F3E3EB'/> <span className='ml-8 text-amber-50'>Sending...</span></>)}
          
    </div>
  )
}

export default Popup