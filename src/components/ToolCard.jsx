import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const ToolCard = ({icon,color,name}) => {
  return (
    <div className='bg-slate-800 flex flex-col items-center text-white font-[Inter] p-6 rounded-lg transition-all duration-500 hover-card  '>
        <FontAwesomeIcon  className={`${color} text-4xl mb-2`} icon={icon}/>
        <span>{name}</span>
    </div>
  )
}

export default ToolCard