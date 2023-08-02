'use client'
import { Floaters } from '@/components/floaters'
import { HeaderNavigation } from '@/components/headNav'
import HeroSection from './page/hero'

export default function Home ()
{
  return (
    <>
      <Floaters />
      <div className='px-10 pt-5'>
        <HeaderNavigation />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <HeroSection />
        </main>
        <footer></footer>
      </div>
    </>
  )
}
