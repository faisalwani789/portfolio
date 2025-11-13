import React from 'react'

const LinearBgButton = ({children,variant="primary",size="md",className="",...props}) => {
  const Base='px-5 py-3 shadow-md cursor-pointer rounded-3xl '
  const variants={
    primary:"hover:shadow-md hover:shadow-sky-500/60  transition-all duration-500 bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF]",
    secondary:'outline-1 outline-[#0EA3E6] text-[#0EA3E6] hover:bg-[#0E263E]'
  }
  const sizes={
    sm:'px-3 py-1 text-sm',
    md:'px-4 py-2 text-base',
    lg:'px-5 py-3 text-lg'
  }
  const classes=`${Base} ${variants[variant]} ${sizes[size]} ${className} }`
  
  return (
    <button className={classes} {...props}>{children}</button>
  )
}

export default LinearBgButton