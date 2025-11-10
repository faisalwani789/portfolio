import React from 'react'

const Buttons = ({button1,button2}) => {
    return (
        <div className='my-8 flex space-x-4 '>
            <button className='px-5 py-3 shadow-md cursor-pointer hover:shadow-md hover:shadow-sky-500/60  transition-all duration-500 rounded-3xl bg-linear-to-r  from-[#139FE8] via-[#139FE8] to-[#7B26CF] '>{button1}</button>
            <button className='px-5 py-3 shadow-md rounded-3xl outline-1 outline-[#0EA3E6] text-[#0EA3E6] hover:bg-[#0E263E]'>{button2} </button>
        </div>
    )
}

export default Buttons