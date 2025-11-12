import React from 'react'

const SkillBar = ({skill,strength}) => {
    return (
        <div className=''>
            <div className='flex justify-between mb-2'>
                <span>{skill}</span><span>{strength}</span>
             </div>
            <div className='skill-bar '>
                <div style={{width:`${strength}`}} className={`skill-progress`}></div>
            </div>
        </div>
    )
}

export default SkillBar