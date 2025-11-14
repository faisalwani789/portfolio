import React from 'react'
import ToolCard from './ToolCard'
import Title from './Title'
import TitleColor from './TitleColor'

import { ToolCardData } from '../Utils/Constants'
const Tools = () => {
  
  return (
    <div className='mt-16'>
      
      <h2 className='text-xl font-bold mb-12 text-center'>Tools & <TitleColor title={'Technologies'}/></h2>
    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-6'>
      {ToolCardData.map(cardData=><ToolCard key={cardData.id} icon={cardData.icon} color={cardData.color} name={cardData.name} />)}
      
    </div>
    </div>
  )
}

export default Tools