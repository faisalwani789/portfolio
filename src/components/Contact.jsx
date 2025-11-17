import React, { useEffect, useState } from 'react'
import { createPortal } from "react-dom"
import Title from './Title'
import TitleColor from './TitleColor'
import ContactCard from './ContactCard'
import { buttonSocialData, contactCardData, FormInfo, FormInfo2 } from '../Utils/Constants'
import SocialButton from './SocialButton'
import InputBox from './InputBox'
import IconButton from './IconButton'
import { FaTelegram } from 'react-icons/fa'
import Section from './Section'
import Popup from './Popup'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({ mode: 'onChange' })
  const [showMsg, setShowMsg] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const handleSubmitMessage = async (data) => {

    try {
      const res = await fetch('https://netmaxgptbkd-1.onrender.com/api/message', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (res.ok) {
        if (json.success) {
          setSuccessMsg(json.message)
          setShowMsg(true)
          reset()// clear form on success

        }
        else {
          setError('root', { message: json.message })
        }
      }


    } catch (error) {
      setError('root', { message: 'Network Error' })
    }
  }
  useEffect(() => {
    let timer;
    if (showMsg) {
      timer = setTimeout(() => {
        setShowMsg(false)
      }, 7000)
    }
    return () => clearTimeout(timer)
  }, [showMsg])

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
              <InputBox {...register('Name', { required: "Name is required" })} error={errors.Name} name={'Name'} label={'Your Name'} type={'text'} />

              <InputBox {...register('Email', { required: 'email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'invalid email' } })} error={errors.Email} name={'Email'} label={'Your Email'} type={"email"} />

            </div>

            <div>
              <InputBox {...register('Subject', { required: "subject is required" })} error={errors.Subject} name={'Subject'} label={'Subject'} type={'text'} />
              <div>
                <label htmlFor='Message' className='mb-2 block'>Your Message</label>
                <textarea style={{ height: '123px' }}
                  {...register("Message", { required: "Message is required" })} className='contact-input w-full rounded-lg focus:outline-none ' rows={'5'} id='Message' name='Message' ></textarea>
                {errors.Message && <p className='text-red-600'>{errors.Message?.message}</p>}
              </div>
            </div>
            <IconButton variant={'primary'} type={'submit'} disabled={isSubmitting} className='flex gap-2 items-center justify-center w-full' icon={FaTelegram} >Send Message</IconButton>
            {errors.root && <p className='text-red-600'>{errors.root.message}</p>}
          </form>
        </div>
      </div>

      {isSubmitting && <Popup isSubmitSuccessful={isSubmitSuccessful} submitting={isSubmitting} ></Popup>}
      {showMsg && createPortal(
        <div className='fixed z-100 left-1/2 top-5 -translate-x-1/2  mx-auto p-1   bg-LinkPrimary text-white font-[Inter] rounded-lg text-center text-lg'>{successMsg}</div>
        , document.body)
      }
    </Section>
  )
}

export default Contact