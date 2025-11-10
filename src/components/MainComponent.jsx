import React, { useEffect, useRef, useState,  } from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"
import Buttons from './Buttons'

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
        <div className='bg-[#0F172A] flex md:flex-row flex-col justify-around items-center py-40 px-6 font-[Inter]'>
            <div className='text-white flex-1 '>
                <h2 className='text-6xl font-bold mb-4 '>
                    Hi, I'm <span className='bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF] text-transparent bg-clip-text'>Faisal Yousuf</span>
                </h2>
                <p className='text-3xl mb-6  font-semibold'>{position}</p>
                <p className='text-lg mb-8  w-140 font-extralight '>I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.</p>
                <Buttons button1={"Hire me"} button2={"View work"}/>
                <div className='flex space-x-4'>
                    <div className='bg-gray-700/85 h-10 w-10 flex items-center justify-center  rounded-4xl hover:bg-[#0EA5E9]'>
                         <FaGithub className='text-2xl text-white' />
                    </div>
                    <div className='bg-gray-700/85 h-10 w-10 flex items-center justify-center rounded-4xl hover:bg-[#2563EB]'> <FaLinkedin className='text-xl'/></div>
                    <div className='bg-gray-700/85 h-10 w-10 flex items-center justify-center rounded-4xl hover:bg-[#60A5FA]'><FaTwitter className='text-xl'/></div>
                   
                    
                    
                </div>
            </div>
            <div className='flex-1 flex justify-center'>
               <div className='w-90 h-90 rounded-[50%] animate-my_bounce duration-1000 ease-in-out'>
                <img className='w-full h-full object-cover object-top rounded-[50%] ' src="hero.jpg" alt="image" />
               </div>
            </div>
            
            
        </div>
    )
}

export default MainComponent