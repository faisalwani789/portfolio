import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const ContactCard = ({icon,iconName,iconData}) => {
  return (
    <div className='text-white flex  items-start '>
        <div className='rounded-full bg-slate-800 p-4 mr-4'>
            <FontAwesomeIcon className='text-LinkPrimary text-lg  ' icon={icon} /> 
        </div>
        
        <div>
            <h2 className='font-bold mb-1'>{iconName}</h2>
            <p className=' text-slate-400 '>{iconData}</p>
        </div>    
    </div>
  )
}

export default ContactCard