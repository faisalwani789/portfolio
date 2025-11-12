import {Route,Link} from "react-router-dom"
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faGithub} from "@fortawesome/free-brands-svg-icons"

const ProjectCard = ({image,heading,description,span1,span2,span3,to}) => {
  return (
    <div className="rounded-xl font-[Inter] text-white overflow-hidden project-card hover-card transition duration-500 ease-in ">
        <div className='h-48 '>
            <img className='h-full w-full object-cover object-top' src={image} alt={image} />
        </div>
        <div className='p-4  bg-Primary '>
            <h2 className="text-white text-2xl font-bold mb-2">{heading}</h2>
            <p className="font-normal mb-4 text-textDim">{description}</p>
            <div className="mb-4 flex gap-2">
                <span className='bg-slate-700 px-4 py-1 rounded-full'>{span1}</span>
                <span className='bg-slate-700 px-4 py-1 rounded-full' >{span2}</span>
                <span className='bg-slate-700 px-4 py-1 rounded-full'>{span3}</span>
            </div>
            <div className="flex space-x-3">
                <Link to={to} className="text-LinkPrimary hover:text-purple-600" ><FontAwesomeIcon icon={faUpRightFromSquare}/>Live Demo</Link>
                <Link className="text-LinkPrimary hover:text-purple-600" ><FontAwesomeIcon icon={faGithub}/>Code</Link>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default ProjectCard