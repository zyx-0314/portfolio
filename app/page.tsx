'use client'
import { Floaters } from '@/components/floaters'
import { HeaderNavigation } from '@/components/headNav'
import HeroSection from './page/hero'
import { AboutSection } from './page/about'
import { ContactSection } from './page/contact'
import { ExperienceSection } from './page/experience'
import { ProjectsSection } from './page/projects'
import { StyledContainer } from '@/components/container'

export default function Home ()
{
  const date = new Date()

  return (
    <>
      <Floaters />
      <HeaderNavigation />
      <div className='px-10'>
        <StyledContainer specialType='Main' className="items-center">
          <HeroSection id='hero' />
          <AboutSection id='about' />
          <ExperienceSection id='experience' />
          <ProjectsSection id='projects' />
          <ContactSection id='contact' />
        </StyledContainer>
        <footer className='flex w-full justify-center pt-5 mt-5 text-xs'>Nyebe Creations - { date.getFullYear() } - v.0.1.2</footer>
      </div>
    </>
  )
}
