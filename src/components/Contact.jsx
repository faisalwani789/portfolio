import React, { useState } from 'react'
import Title from './Title'
import TitleColor from './TitleColor'
import ContactCard from './ContactCard'
import { buttonSocialData, contactCardData, FormInfo,FormInfo2 } from '../Utils/Constants'
import SocialButton from './SocialButton'
import LinearBgButton from "./LinearBgButton"
import InputBox from './InputBox'
import IconButton from './IconButton'
import { FaTelegram } from 'react-icons/fa'
import Section from './Section'
import { useRef } from 'react'
import Popup from './Popup'
const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [message, setMessage] = useState("")
  const[error,setError]=useState(false)
  // const formRef=useRef(null)
  const nameRef = useRef(null)
  const messageRef = useRef(null)
  const subjectRef = useRef(null)
  const emailRef = useRef(null)

  // const submit=(e)=>{
  //   e.preventDefault()
  //   const data=new FormData(formRef.current)
  //   const values=FormInfo2.map((ele)=>data.get(ele.name)?? "")
  //   alert(JSON.stringify(values))
  // }
  const handleSubmitMessage = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://netmaxgptbkd-1.onrender.com/api/message', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: nameRef.current.value,
        Email: emailRef.current.value,
        Subject: subjectRef.current.value,
        Message: messageRef.current.value,
      })
    })
    const json = await res.json()
    console.log(json)
    if (json.success) {
      setMessageSent(true)
      setMessage(json.message)
    }
      nameRef.current.value = ""
      emailRef.current.value = ""
      subjectRef.current.value = ""
      messageRef.current.value = ""
      console.log(json)

    } catch (error) {
      setError(error.message)
    }
    
   
    }
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
            <form className='space-y-6 ' onSubmit={handleSubmitMessage} >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* {FormInfo2.map(input=><InputBox key={input.id} name={input.name} text={input.text}/>)} */}
                <InputBox ref={nameRef} name={'Name'} text={'Your Name'} />
                <InputBox ref={emailRef} name={'Email'} text={'Your Email'} />
              </div>

              <div>
                <InputBox ref={subjectRef} name={'Subject'} text={'Subject'} />
                <div>
                  <label htmlFor='Message' className='mb-2 block'>Your Message</label>
                  <textarea ref={messageRef} style={{ height: '123px' }} className='contact-input w-full rounded-lg focus:outline-none ' rows={'5'} id='Message' name='Message' required></textarea>
                </div>
              </div>
              <IconButton variant={'primary'} className='flex gap-2 items-center justify-center w-full' icon={FaTelegram}>Send Message</IconButton>
            </form>
          </div>
        </div>
        {messageSent && <Popup messageSent={messageSent} setMessageSent={setMessageSent} setMessage={setMessage} message={message} error={error} ></Popup>}
      </Section>
    )
  }

  export default Contact