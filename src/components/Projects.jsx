import React from 'react'
import Title from "./Title"
import TitleColor from "./TitleColor"
import ProjectCard from './ProjectCard'
import { ProjectCardData } from '../Utils/Constants'
import Section from './Section'
const Projects = () => {
    return (
        <Section background={'secondary'} id={"Projects"}>
                <div className='mb-16'>
                    <Title title={'My'} ><TitleColor title={'Projects'} /></Title>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {ProjectCardData.map(cardData=><ProjectCard key={cardData.id} image={cardData.image} heading={cardData.heading} description={cardData.description} span1={cardData.span1} span2={cardData.span2} span3={cardData.span3} to={cardData.to}/>)}
   
                </div>
                
          </Section>
    )
}

export default Projects