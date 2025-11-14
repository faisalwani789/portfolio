import React from 'react'

const Section = ({children,background,id ,className='',containerClass='',paddingTop}) => {
  const colorMap={
    primary:'bg-Primary',
    secondary:'bg-Secondary'
  }
  const paddingClass=`${paddingTop?'pt-20':'py-20'}`
  const colorClass=colorMap[background] || "bg-black"
  return (
    <section id={id} className={` ${paddingClass} text-white font-[Inter] ${colorClass} ${className}`}>
        <div className={` container mx-auto px-6 ${containerClass} `}>
            {children}
        </div>
    </section>
  )
}

export default Section