import React from 'react'
import { useEffect } from 'react'
import {ClipLoader} from 'react-spinners'
const Popup = ({successMsg,messageSent,setMessageSent,setSuccessMsg,submitting}) => {
    const handleClick=()=>{
      setMessageSent(false)
      setSuccessMsg('')
    }
    useEffect(() => {
    if (messageSent) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
     
    }
  }, [messageSent])
  return (
    <div className='fixed inset-0 bg-black/60 z-60 ' onClick={handleClick}>
          {submitting ?(<><ClipLoader size={16} color='fff'/> <span className='ml-8'>submitting...</span></>):
        <div className=' mx-auto pt-1 w-1/3 h-10 bg-LinkPrimary text-white font-[Inter] rounded-lg text-center text-lg'>{successMsg}</div>
        }
    </div>
  )
}

export default Popup