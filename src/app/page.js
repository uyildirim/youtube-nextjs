import Image from 'next/image'
import Hero from "public/hero.png"
import Button from '../components/button/Button'

export default function Home() {
  return (
    <div className='flex'>
      <div className='flex-1 flex flex-col gap-12'>
        <h1 className='bg-clip-text text-transparent font-bold text-7xl bg-gradient-to-b from-green-900 to-white'>Better design for your digital products.</h1>
        <p className='text-2xl font-light'>Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
        <Button url="/home" text="See Our Works" />
      </div> 
      <div className='flex-1'>
        <Image className='w-full h-full object-cover' alt='' src={Hero} />
      </div>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
