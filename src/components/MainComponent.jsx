import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"
const MainComponent = () => {
    return (
        <div className='bg-[#0F172A] flex justify-around items-center py-40 px-6 font-[Inter]'>
            <div className='text-white flex-1 '>
                <h2 className='text-6xl font-bold mb-4 '>
                    Hi, I'm <span className='bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF] text-transparent bg-clip-text'>Faisal Yousuf</span>
                </h2>
                <p className='text-3xl mb-6  font-semibold'>Frontend Developer</p>
                <p className='text-lg mb-8  w-140 font-extralight '>I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.</p>
                <div className='my-8 flex space-x-4 '>
                    <button className='px-5 py-3 shadow-md cursor-pointer hover:shadow-md hover:shadow-sky-500/60  transition-all duration-500 rounded-3xl bg-linear-to-r  from-[#139FE8] via-[#139FE8] to-[#7B26CF] '>Hire me</button>
                    <button className='px-5 py-3 shadow-md rounded-3xl outline-1 outline-[#0EA3E6] text-[#0EA3E6] hover:bg-[#0E263E]'>view work </button>
                </div>
                <div className='flex space-x-4'>
                    <div className='bg-gray-700/85 h-10 w-10 flex items-center justify-center  rounded-4xl hover:bg-[#0EA5E9]'>
                         <FaGithub className='text-2xl text-white' />
                    </div>
                    <div className='bg-gray-700/85 h-10 w-10 flex items-center justify-center rounded-4xl hover:bg-[#2563EB]'> <FaLinkedin className='text-xl'/></div>
                    <div className='bg-gray-700/85 h-10 w-10 flex items-center justify-center rounded-4xl hover:bg-[#60A5FA]'><FaTwitter className='text-xl'/></div>
                   
                    
                    
                </div>
            </div>
            <div className='flex-1 flex justify-center'>
               <div className='w-90 h-90 rounded-[50%]'>
                <img className='w-full h-full object-cover object-top rounded-[50%] ' src="hero.jpg" alt="image" />
               </div>
            </div>
            
            
        </div>
    )
}

export default MainComponent