import React from 'react'
import TitleColor from './TitleColor'
import Title from './Title'

import LinearBgButton from './LinearBgButton'
const About = () => {
  return (
    <div className='bg-secondary font-[Inter] text-white py-20'>
      <div className='mx-auto px-6 container'>
        <div className='mb-16'>
          <Title title={'About'}> <TitleColor title={'Me'} /></Title>
        </div>
        <div className='flex md:flex-row flex-col items-center'>
          <div className='md:w-1/3 mb-12 md:mb-0 flex justify-center'>
            <div className='w-64 h-64 relative rounded-2xl '>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
              <img className=' relative w-full h-full object-cover object-top rounded-2xl border-4 border-slate-800' src="hero.jpg" alt="" />
            </div>
          </div>

          <div className='md:w-2/3 md:pl-12 '>
            <h2 className='text-2xl font-bold mb-6'>Who am I?</h2>
            <p className='font-normal mb-6 text-textDim'>I'm a passionate Full Stack Developer  creating modern web applications. I specialize in JavaScript ecosystems including React, Node.js, and modern CSS frameworks.</p>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mb-8'>
              <div className='font-semibold space-y-2'>
                <h4 className='' >Name:<span>Faisal Yousuf</span></h4>
                <h4>Email:<span>faisaly7799@gmail.com</span></h4>
                <h4>Phone:<span>345643333</span></h4>
              </div>
              <div className='font-semibold space-y-2'>
                <h4>Age:<span>25</span></h4>
                <h4>Experiance:<span>1 Year</span></h4>
                <h4>Location:<span>Anantnag, India</span></h4>
              </div>
            </div>
            <div className='my-8 flex space-x-4 '>
              <LinearBgButton variant='primary' >Download CV</LinearBgButton>
              <LinearBgButton variant='secondary'>Contact Me</LinearBgButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About