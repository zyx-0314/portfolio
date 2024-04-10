'use client'

import { LandingContainer } from './style'

import { ExperienceData, ProjectData } from '@/types'
import { StyledContainer } from '@/components/ui/container'
import HeroSection from '@/components/sections/landing/hero'
import AboutSection from '@/components/sections/landing/about'
import ContactSection from '@/components/sections/landing/contact'
import ProjectsSection from '@/components/sections/landing/projects'
import ExperienceSection from '@/components/sections/landing/experience'

interface HomeViewProps
{
  experienceData: ExperienceData[],
  projectData: ProjectData[],
}

const HomeView
  = (
    {
      experienceData,
      projectData,
    }: HomeViewProps
  ) =>
  {
    return (
      <LandingContainer>
        <StyledContainer specialType='Main' className="items-center">
          <HeroSection id='hero' />
          <AboutSection id='about' />
          <ExperienceSection
            id='experience'
            companyListData={ experienceData }
          />
          <ProjectsSection
            id='projects'
            projectList={ projectData }
          />
          <ContactSection id='contact' />
        </StyledContainer>
      </LandingContainer>
    )
  }

export default HomeView
