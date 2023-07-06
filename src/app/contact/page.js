import Button from '@/src/components/button/Button'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <div className=''>
      <h1 className='text-6xl mb-24 text-center font-semibold'>Let's Keep in Touch</h1>
      <div className='flex gap-5'>
        <div className='flex-1 relative h-[500px]'>
          <Image src="/contact.png" fill={true} alt=''/>
        </div>
        <form className='flex-1 flex flex-col gap-5'>
          <input className='p-5 bg-transparent border' type='text' placeholder='Name' />
          <input className='p-5 bg-transparent border' type='text' placeholder='Email' />
          <textarea className='p-5 bg-transparent border' cols="30" rows="10" placeholder='Message'></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}
