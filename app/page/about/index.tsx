import React from 'react'
import { AboutContainer } from './style'
import { ContentBody } from '@/components/paragraph/style'
import { GridDisplay } from '@/components/grid'
import { SectionHeader } from '@/components/sectionHeader'

export function AboutSection ( props: any )
{
  const listTechs = [
    'BootStrap',
    'TailWind',
    'ReactJS',
    'Laravel',
    'SASS/SCSS'
  ]

  const listLanguages = [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'SQL',
    'Python',
    'C++',
    'Kotlin'
  ]

  const listTools = [
    'Git(Github)',
    'Docker',
    'Postman',
    'Insomnia',
    'Android Studio',
    'Figma',
    'Adobe XD',
    'Tableau',
    'Excel'
  ]

  return (
    <AboutContainer className='w-2/3'>
      <SectionHeader number='.01' title='About Me' />
      <div>
        <ContentBody>
          I'm <span>Ian Cedric Ramirez</span>, an aspiring <span>Software Engineer</span> with a passion for creating things that live on the internet.
          <br /> <br />
          Recently graduated in <span>Computer Science</span>, I've had the privilege of gaining practical experience as a <span>Software Engineer Intern</span> for <span>Four(4) Months</span>. I'm Highly <span>Motivated</span>, <span>Result-Oriented</span>, and dedicated to <span>Continuous Growth</span>. My goal is to make a Significant Impact in the tech industry, and I thrive in Collaborating with teams within <span>Agile Development Environments</span>. As I explore opportunities, I'm eager to contribute my skills and expertise to build accessible, inclusive products and digital experiences that leave a positive mark.
          <br /> <br />
          I'm currently on the lookout for <span>Entry-Level Opportunities</span> to kickstart my professional journey.
          <br /> <br />
          If you have any openings or know of exciting opportunities, I'd love to connect and discuss how I can be a valuable asset to your team. Let's make amazing things together!
          <br /> <br />
          Technologies I Currently Use:
        </ContentBody>
        <GridDisplay list={ listTechs } />
        <br />
        <p>Languages I've Tried</p>
        <GridDisplay list={ listLanguages } />
        <br />
        <p>Tools I've Used</p>
        <GridDisplay list={ listTools } />
      </div>

    </AboutContainer>
  )
}
