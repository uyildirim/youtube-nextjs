import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div className='flex gap-5 flex-col'>
      {
        [1, 2].map(i => (
          <Link className='flex gap-5' href="/blog/testID">
            <div className='relative h-[250px] w-[400px]'>
              <Image
                fill={true}
                src="https://images.pexels.com/photos/17102219/pexels-photo-17102219/free-photo-of-kent-kent-simgesi-sokak-bina.jpeg" />
            </div>
            <div className='flex flex-col justify-center'>
              <h1>Title</h1>
              <p>Desc</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
