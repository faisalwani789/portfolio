import React from 'react'

const Section = ({children,background,id ,className='',containerClass=''}) => {
  return (
    <section id={id} className={` text-white font-[Inter] bg-${background} ${className}`}>
        <div className={`container px-6 mx-auto ${containerClass} `}>
            {children}
        </div>
    </section>
  )
}

export default Section