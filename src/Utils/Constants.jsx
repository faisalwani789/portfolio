import {faHtml5 ,faCss3,faGitAlt,faJs,faReact,faNodeJs,faFigma,faNpm, faGithub, faSass} from "@fortawesome/free-brands-svg-icons"
import {faTerminal,faDatabase} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn,faTwitter } from '@fortawesome/free-brands-svg-icons'
export const buttonSocialData=[
  {
    icon:faGithub
  },
   {
    icon:faLinkedinIn
  },
   {
    icon:faTwitter
  },
]
export const ToolCardData=[
    {
      icon:faHtml5,
      color:'text-orange-500',
      name:"HTML",

    },
    {
      icon:faCss3,
      color:'text-blue-500',
      name:"CSS",
      
    },
    {
      icon:faJs,
      color:'text-yellow-400',
      name:"Javascript",
      
    },
    {
      icon:faReact,
      color:'text-blue-400',
      name:"React",
      
    },
    {
      icon:faNodeJs,
      color:'text-orange-500',
      name:"Node.Js",
      
    },
    {
      icon:faDatabase,
      color:'text-blue-500',
      name:"mongoDB",
      
    },
     {
      icon:faNpm,
      color:'text-red-500',
      name:"mongoDB",
      
    },
    {
      icon:faGitAlt,
      color:'text-orange-600',
      name:"Git",
      
    },
    {
      icon:faFigma,
      color:'text-purple-500',
      name:"Figma",
      
    },
    {
      icon:faTerminal,
      color:'text-gray-300',
      name:"VS Code",
      
    },
     {
      icon:faGithub,
      color:'text-gray-200',
      name:"Github",
      
    },
     {
      icon:faSass,
      color:'text-pink-500',
      name:"Sass",
      
    },
  ]

export const ProjectCardData=[
  {
    image:'netmax.png',
    heading:"Netmax-Gpt",
    description:'Netmax GPT is a web application inspired by Netflix, designed to showcase comprehensive movie information, including trailers, cast details, and synopses.',
    span1:"React",
    span2:'Firebase',
    span3:'Redux',
    to:"https://netmax-gpt-ic3d.vercel.app"
  },
  {
    image:'school.png',
    heading:"School Website",
    description:'A simple and intuitive school website, designed to showcase school information, including teachers, infrastructure etc.',
    span1:"HTML",
    span2:'CSS',
    span3:'Javascript',
    to:'https://myschool-0xnd.onrender.com/home'
  },
   {
    image:'portfolio.png',
    heading:"My portfolio",
    description:'Personel developer Portfolio , highlighting Contact Information, developer projects ,tools and technologies',
    span1:"React",
    span2:'Tailwind',
    span3:'react-router',
    to:'https://myschool-0xnd.onrender.com/home'
  }
]

export const contactCardData=[
  {
    icon:faLocationDot,
    iconName:'Location',
  iconData:'Anantnag, Jammu & Kashmir'
  },
  {
    icon:faPhone,
    iconName:'Email',
    iconData:'faisalYousuf7799@gmail.com'
  },
  {
    icon:faEnvelope,
    iconName:'Phone',
    iconData:'93939393939'
  }
]
export const FormData=[
  {
    name:'Subject',

  }
  
]
export const FormData2=[
  {
    name:'Your Name',

  },
  {
    name:"Your Email"
  }
  
]
export const LinkData=[
   {
    text:"Home",
    isActive:true
   },
    {
    text:"About"
   },
    {
    text:"Skills"
   },
    {
    text:"Projects"
   },
    {
    text:"Contact"
   },
]