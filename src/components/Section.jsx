import React from 'react'

const Section = ({children,background}) => {
  return (
    <section className={`py-20 text-white font-[Inter] bg-${background}`}>
        <div className='container px-6 mx-auto'>
            {children}
        </div>
    </section>
  )
}

export default Section