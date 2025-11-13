import React from 'react'
import Title from './Title'
import TitleColor from './TitleColor'
import SkillBar from './SkillBar'
import Tools from './Tools'
import Section from './Section'
const Skills = () => {
    return (
        <Section background={'Primary'}>
            <div className='mb-16'>
                <Title title={'My'}> <TitleColor title={'Skills'} /></Title>
            </div>

            <div className='container mx-auto px-6'>



                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className=''>
                        <h1 className='mb-6 text-2xl font-bold'>Technical Skills</h1>
                        <div className='space-y-6'>

                            <SkillBar skill={'HTML/CSS'} strength={"95%"} />
                            <SkillBar skill={'Javascript'} strength={"85%"} />
                            <SkillBar skill={'React'} strength={"80%"} />
                            <SkillBar skill={'Node.js'} strength={"80%"} />

                        </div>
                    </div>
                    <div>
                        <h1 className='mb-6 text-2xl font-bold'>Professional Skills</h1>
                        <div className='space-y-6'>
                            <SkillBar skill={'Communication'} strength={"85%"} />
                            <SkillBar skill={'Teamwork'} strength={"90%"} />
                            <SkillBar skill={'Problem Solving'} strength={"90%"} />
                            <SkillBar skill={'Creativity'} strength={"75%"} />
                        </div>
                    </div>
                </div>

                <Tools/>
            </div>
       </Section>
    )
}

export default Skills