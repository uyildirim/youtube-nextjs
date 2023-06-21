import Button from '@/src/components/button/Button';
import Image from 'next/image';
import React from 'react'

export default function page({ params }) {
  console.log(params);
  return (
    <div className='grid gap-5'>
      <h1>{params.category}</h1>
      {
        [1, 2, 3].map(i => (
          <div className='flex gap-12 odd:flex-row-reverse'>
            <div className='flex-1 flex flex-col gap-5 justify-center'>
              <h1>Creative Portfolio</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
              <Button text="See More" url="#" />
            </div>
            <div className='relative flex-1 h-[500px]'>
              <Image
                className='object-cover'
                fill={true}
                src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                alt=''
              />
            </div>
          </div>
        ))
      }

    </div>
  )
}
