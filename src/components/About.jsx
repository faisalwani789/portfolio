import React from 'react'
import TitleColor from './TitleColor'
import Title from './Title'
const About = () => {
    return (
        <div className='bg-[#020617]'>
            <Title title={'About'}> <TitleColor title={'Me'} /></Title>
          <div>
            <div className='w-100 h-100'>
                <img className='w-full h-full' src="hero.jpg" alt="" />
            </div>
          </div>
        </div>
    )
}

export default About