import React from 'react'
import Title from './Title'
import TitleColor from './TitleColor'
import ContactCard from './ContactCard'
import { buttonSocialData, contactCardData,FormData, FormData2 } from '../Utils/Constants'
import SocialButton from './SocialButton'
import LinearBgButton from "./LinearBgButton"
import InputBox from './InputBox'
import IconButton from './IconButton'
import {FaTelegram} from 'react-icons/fa'
import Section from './Section'

const Contact = () => {
  return (
    <Section background={'primary'} id={'Contact'}>
        <div className='mb-16'><Title title={'Get In'} ><TitleColor title={'Touch'} /></Title></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='font-bold text-2xl mb-6'>Contact Information</h2>
            <p className='text-slate-400 mb-8'>Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            <div className='space-y-6'>
              {contactCardData.map(cardData => <ContactCard key={cardData.id} icon={cardData.icon} iconName={cardData.iconName} iconData={cardData.iconData} />)}

            </div>
            <div className='mt-8'>
              <h2 className='font-bold mb-4'>Follow Me</h2>
              <div className='flex space-x-4'>
                {buttonSocialData.map(button => <SocialButton key={button.id} icon={button.icon} background={'social'} />)}
              </div>
            </div>


          </div>
          <div>
            <h2 className='font-bold text-2xl mb-6'>Send Me a Message</h2>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
               {FormData2.map(input=><InputBox key={input.id} name={input.name}/>)}
              </div>

              <div>
               {FormData.map(input=><InputBox key={input.id} name={input.name}/>)}
               <div>
                <label htmlFor='Message' className='mb-2 block'>Your Message</label>
                <textarea style={{height:'123px'}} className='contact-input w-full rounded-lg focus:outline-none ' rows={'5'} id='Message' required></textarea>
               </div>
              </div>
             <IconButton variant={'primary'} className='flex gap-2 items-center justify-center w-full' icon={FaTelegram}>Send Message</IconButton>
            </form>
          </div>
        </div>
    </Section>
  )
}

export default Contact