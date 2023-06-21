import Link from 'next/link'
import React from 'react'

export default function Button({text,url}) {
  return (
    <Link href={url}>
    <button className='bg-green-900 max-w-max p-5 rounded text-white'>{text}</button>
    </Link>
  )
}
