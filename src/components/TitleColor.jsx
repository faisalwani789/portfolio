import React from 'react'

const TitleColor = ({title}) => {
  return (
    <span className={`bg-linear-to-r from-[#139FE8] via-[#139FE8] to-[#7B26CF] text-transparent bg-clip-text `}>
        {title}
    </span>
  )
}

export default TitleColor