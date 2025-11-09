import React from 'react'

const MainComponent = () => {
    return (
        <div className='flex md:flex-row flex-col items-center px-40 py-32 '>
            <div className='w-[385px] h-[431px]  flex justify-center items-center'>
                <div className="w-[258px] h-[259px] flex justify-center items-center relative z-20 gradient_img " >
    
                    <img className='z-10 relative mx-auto my-auto w-[165px] h-[223px]' src="hero.jpg" alt="" />
                    
                </div>
            </div>
            <div className='text-white -ml-10 font-[Preahvihear] relative z-25 tracking-widest'>
                <p className='absolute -top-32 -left-5 text-lg'>Hello! I am <span className='text-[#7127BA]'>Faisal Yousuf</span></p>
                <div className='absolute -left-25 -top-27'><img src="Vector.png" alt="" /></div>
                <img className='absolute bottom-5.5 right-34 ' src="Elipse.png" alt="" />
                <p className='text-lg underline'>A Developer who</p>
                <h2 className='text-5xl pb-2'>
                    judges a book 
                </h2>
                <h2 className='text-5xl leading-15 '>
                     by its <div className='text-[#7127BA] inline-block relative'>cover</div>...
                </h2>
                <p className='text-sm'>because if a cover cannot impress you what else can?</p>
            </div>
        </div>
    )
}

export default MainComponent