import React, { useState } from 'react'
import Title from './Title'
import TitleColor from './TitleColor'
import ContactCard from './ContactCard'
import { buttonSocialData, contactCardData, FormInfo,FormInfo2 } from '../Utils/Constants'
import SocialButton from './SocialButton'
import InputBox from './InputBox'
import IconButton from './IconButton'
import { FaTelegram } from 'react-icons/fa'
import Section from './Section'
import Popup from './Popup'
import {useForm} from 'react-hook-form'
const Contact = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const [messageSent, setMessageSent] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  
  const[submitting,setSubmitting]=useState(false)
  // const formRef=useRef(null)
  // const nameRef = useRef(null)
  // const messageRef = useRef(null)
  // const subjectRef = useRef(null)
  // const emailRef = useRef(null)

  // const email=watch('email')
  // const name=watch('name')
  // const subject=watch('subject')
  // const message=watch('message')

  // const submit=(e)=>{
  //   e.preventDefault()
  //   const data=new FormData(formRef.current)
  //   const values=FormInfo2.map((ele)=>data.get(ele.name)?? "")
  //   alert(JSON.stringify(values))
  // }
  const handleSubmitMessage = async (data) => {
    // e.preventDefault()
    console.log('form data'+data)
    setSubmitting(true)
    
    try {
      const res = await fetch('https://netmaxgptbkd-1.onrender.com/api/message', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    console.log(json)
    if (json.success) {
      setMessageSent(true)
      setSuccessMsg(json.message)
     
    }
      // nameRef.current.value = ""
      // emailRef.current.value = ""
      // subjectRef.current.value = ""
      // messageRef.current.value = ""
      console.log(json)

    } catch (error) {
      console.log(error)
    }
    finally{
       setSubmitting(false)
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
            <form className='space-y-6 ' onSubmit={handleSubmit(handleSubmitMessage)} >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* {FormInfo2.map(input=><InputBox key={input.id} name={input.name} text={input.text}/>)} */}
                <InputBox {...register('name',{required:"Name is required"})}  error = {errors.name?.message} name={'Name'} label={'Your Name'} type={'text'}  />
               
                <InputBox {...register('email',{required:'email is required',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'invalid email'}})}  error = {errors.email?.message}  name={'Email'} label={'Your Email'} type={"email"} />
                
              </div>

              <div>
                <InputBox {...register('subject',{required:"subject is required"})}  error = {errors.subject?.message} name={'Subject'} label={'Subject'} type={'text'} />
                <div>
                  <label htmlFor='Message' className='mb-2 block'>Your Message</label>
                  <textarea {...register("msg",{required:"msg is required"})} style={{ height: '123px' }} className='contact-input w-full rounded-lg focus:outline-none ' rows={'5'} id='Message' name='Message' ></textarea>
                  {errors.msg &&<p>{errors.msg?.message}</p>}
                </div>
              </div>
              <IconButton variant={'primary'} type={'submit'} className='flex gap-2 items-center justify-center w-full' icon={FaTelegram} >Send Message</IconButton>
            </form>
          </div>
        </div>
    
        {messageSent && <Popup messageSent={messageSent} setMessageSent={setMessageSent} setMessage={setSuccessMsg} successMsg={successMsg}  submitting={submitting} ></Popup>}
      </Section>
    )
  }

  export default Contact