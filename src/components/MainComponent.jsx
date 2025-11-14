import React, { useEffect, useRef, useState,  } from 'react'
import { buttonSocialData } from '../Utils/Constants'
import SocialButton from './SocialButton'
import LinearBgButton from './LinearBgButton'
import Section from "./Section"
import TitleColor from "./TitleColor"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const MainComponent = () => {
    const [position,setPosition]=useState('Frontend Developer')
   const [scrolled, setScrolled] = useState(false)
    const index=useRef(0)

    const scrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(()=>{
        const arr=['Frontend Developer','node.js Developer','MERN Developer']
        const timer=setInterval(()=>{
        index.current=(index.current+1)%3
        setPosition(arr[index.current])
        },3000)

        return ()=>clearInterval(timer)
    },[])

    useEffect(() => {
    const handleScroll = () => {

      setScrolled(window.scrollY > 400)
     
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
    return (
        <Section  background={'primary'} className={' flex items-center min-h-screen'} id={'Home'} paddingTop={'20'} containerClass={'flex md:flex-row flex-col justify-between items-center'}>  
            <div className=' md:w-1/2 mb-12 md:mb-0 '>
            
                <h1 className='text-4xl md:text-6xl font-bold mb-4  '>
                    Hi, I'm <TitleColor title={"Faisal Yousuf"}/>
                </h1>
                <h2 className='text-2xl md:text-3xl  mb-6 font-semibold text-slate-300'>{position}</h2>
                <p className='text-lg mb-8  max-w-lg font-normal text-slate-400 '>I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.</p>
                <div  className=' flex space-x-4 '>
                    <LinearBgButton variant='primary'>Hire Me</LinearBgButton>
                    <LinearBgButton variant='secondary'>View work</LinearBgButton>
                    
                </div>
                
                
                <div className=' mt-8 flex space-x-4'>  
                   {buttonSocialData.map(button=><SocialButton icon={button.icon} background={'social'}/>)}     
                </div>
            </div>
            <div className=' flex-1 flex justify-center items-center'>
               <div className='w-64 h-64 md:w-90 md:h-90 lg:w-96 lg:h-96 rounded-[50%] animate-my_bounce duration-1000 ease-in-out'>
                <img className='w-full h-full object-cover object-top rounded-[50%] ' src="hero.jpg" alt="image" />
               </div>
            </div>
            {scrolled && <div onClick={scrollTop} className={` fixed bottom-5 right-10 bg-LinkPrimary h-10 w-10 flex items-center justify-center  rounded-4xl`}>
              <FontAwesomeIcon className='text-2xl text-white' icon={faArrowUp}/>
            </div> }
            
         
        </Section>
    )
}

export default MainComponent