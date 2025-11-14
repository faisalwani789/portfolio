import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SocialButton = ({icon, background}) => {
  const colorMap={
    social:'bg-gray-700/85',
    scrollTop:'bg-LinkPrimary'
  }
  const color=colorMap[background]
  return (
    <div className={`${color} h-10 w-10 flex items-center justify-center  rounded-4xl hover:bg-[#0EA5E9]`}>
              <FontAwesomeIcon className='text-2xl text-white' icon={icon}/>
            </div>
  )
}

export default SocialButton