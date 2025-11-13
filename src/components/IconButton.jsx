import React from 'react'
import LinearBgButton from './LinearBgButton'

const IconButton = ({icon:Icon,children,...props}) => {
    console.log({...props})
  return (
    <LinearBgButton {...props}>{children}{Icon &&<Icon className="w-5 h-5 "/>}</LinearBgButton>
  )
}

export default IconButton