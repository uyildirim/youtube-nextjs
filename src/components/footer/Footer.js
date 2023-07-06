import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center justify-between py-3'>
      <div>2023 Tüm hakları bana sahiptir.</div>
      <div className='flex items-center gap-2'>
      <Image alt='' width="15" height="15" src="/1.png" />
      <Image alt='' width="15" height="15" src="/2.png" />
      <Image alt='' width="15" height="15" src="/3.png" />
      <Image alt='' width="15" height="15" src="/4.png" />
      </div>
    </div>
  )
}
