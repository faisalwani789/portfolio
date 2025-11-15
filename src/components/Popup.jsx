import React from 'react'
import { useEffect } from 'react'
const Popup = ({message,messageSent,setMessageSent,setMessage}) => {
    const handleClick=()=>{
      setMessageSent(false)
      setMessage('')
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
        <div className=' mx-auto pt-1 w-1/3 h-10 bg-LinkPrimary text-white font-[Inter] rounded-lg text-center text-lg'>{message}</div>
    </div>
  )
}

export default Popup