import React, { useEffect, useRef, useState,  } from 'react'
import { buttonSocialData } from '../Utils/Constants'
import SocialButton from './SocialButton'
import LinearBgButton from './LinearBgButton'

const MainComponent = () => {
    const [position,setPosition]=useState('Frontend Developer')
   
    const index=useRef(0)

    useEffect(()=>{
        const arr=['Frontend Developer','node.js Developer','MERN Developer']
        const timer=setInterval(()=>{
        index.current=(index.current+1)%3
        setPosition(arr[index.current])
        },3000)

        return ()=>clearInterval(timer)
    },[])
    return (
        <div className='bg-Primary mx-auto flex md:flex-row flex-col justify-between items-center py-55 px-6 font-[Inter]'>
            <div className='text-white md:w-1/2 mb-12 '>
            
                <h2 className='text-6xl font-bold mb-4  '>
                    Hi, I'm <span className='bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF] text-transparent bg-clip-text'>Faisal Yousuf</span>
                </h2>
                <p className='text-3xl mb-6  font-semibold'>{position}</p>
                <p className='text-lg mb-8  max-w-140 font-normal text-textDim '>I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.</p>
                <div  className='my-8 flex space-x-4 '>
                    <LinearBgButton variant='primary'>Hire Me</LinearBgButton>
                    {/* <BgButton button={'view work'}/> */}
                    <LinearBgButton variant='secondary'>View work</LinearBgButton>
                </div>
                
                
                <div className='flex space-x-4'>  
                   {buttonSocialData.map(button=><SocialButton icon={button.icon}/>)}     
                </div>
            </div>
            <div className=' flex-1 flex justify-center items-center'>
               <div className='w-90 h-90 rounded-[50%] animate-my_bounce duration-1000 ease-in-out'>
                <img className='w-full h-full object-cover object-top rounded-[50%] ' src="hero.jpg" alt="image" />
               </div>
            </div>
            
            
        </div>
    )
}

export default MainComponent