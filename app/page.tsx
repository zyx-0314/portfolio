'use client'
import { Floaters } from '@/components/floaters'
import { HeaderNavigation } from '@/components/headNav'
import HeroSection from './page/hero'
import { AboutSection } from './page/about'
import { ContactSection } from './page/contact'

export default function Home ()
{
  return (
    <>
      <Floaters />
      <div className='px-10 pt-5'>
        <HeaderNavigation />
        <main className="flex min-h-screen flex-col items-center justify-between px-24">
          <HeroSection id='hero' />
          <AboutSection id='about' />
          <ContactSection id='contact' />
        </main>
        <footer></footer>
      </div>
    </>
  )
}
