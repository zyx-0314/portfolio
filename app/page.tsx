'use client'
import { Floaters } from '@/components/floaters'
import { HeaderNavigation } from '@/components/headNav'
import HeroSection from './page/hero'
import { AboutSection } from './page/about'
import { ContactSection } from './page/contact'
import { ExperienceSection } from './page/experience'
import { ProjectsSection } from './page/projects'

export default function Home ()
{
  const date = new Date()

  return (
    <>
      <Floaters />
      <div className='px-10 pt-5'>
        <HeaderNavigation />
        <main className="flex min-h-screen flex-col items-center justify-between px-24">
          <HeroSection id='hero' />
          <AboutSection id='about' />
          <ExperienceSection id='experience' />
          <ProjectsSection id='projects' />
          <ContactSection id='contact' />
        </main>
        <footer className='flex w-full justify-center pt-5 mt-5 text-xs'>Nyebe Creations - { date.getFullYear() } - v.0.1.2</footer>
      </div>
    </>
  )
}
