import React, { useEffect } from 'react'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import About from './components/About'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  useEffect(()=>{
    console.log(document.documentElement.clientWidth)
    console.log(window.innerWidth)
    const raf=requestAnimationFrame(()=>{
 console.log(document.body.clientWidth)

 return ()=>cancelAnimationFrame(raf)
    })
   
  },[])
  return (
    <div>
        <Header/>
        <MainComponent/>
        {/* <TestMain/> */}
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App