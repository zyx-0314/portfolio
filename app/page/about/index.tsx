import React from 'react'
import { StyledGridDisplay } from '@/components/grid'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledParagraph } from '@/components/paragraph'
import { StyledContainer } from '@/components/container'

/**
 * Renders a section of a webpage that provides information about the author, their skills, and their aspirations.
 * 
 * @param {string} id - The id of the container element for the section.
 * @returns {JSX.Element} The rendered section component.
 */
export default function AboutSection ( { id }: { id: string } ): JSX.Element
{
  // Arrays of strings representing the author's skills
  const listTechs = [
    'ReactJS',
    'Laravel',
    'React Native',
    'BootStrap CSS',
    'TailWind CSS',
    'Emotion CSS',
    'SASS/SCSS'
  ];

  const listLanguages = [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'SQL',
    'Python',
    'C++',
    'Kotlin'
  ];

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
  ];

  return (
    <StyledContainer id={ id }>
      <SectionHeader number=".01" title="About Me" />
      <div>
        <StyledParagraph>
          I&apos;m <span>Ian Cedric Ramirez</span>, an aspiring <span>Software Engineer</span> with a passion for creating things that live on the internet.
          <br /> <br />
          Recently graduated in <span>Computer Science</span>, I&apos;ve had the privilege of gaining practical experience as a <span>Software Engineer Intern</span> for <span>Four(4) Months</span>. I&apos;m Highly <span>Motivated</span>, <span>Result-Oriented</span>, and dedicated to <span>Continuous Growth</span>. My goal is to make a Significant Impact in the tech industry, and I thrive in Collaborating with teams within <span>Agile Development Environments</span>. As I explore opportunities, I&apos;m eager to contribute my skills and expertise to build accessible, inclusive products and digital experiences that leave a positive mark.
          <br /> <br />
          I&apos;m currently on the lookout for <span>Entry-Level Opportunities</span> to kickstart my professional journey.
          <br /> <br />
          If you have any openings or know of exciting opportunities, I&apos;d love to connect and discuss how I can be a valuable asset to your team. Let&apos;s make amazing things together!
          <br /> <br />
          Technologies I Currently Use:
        </StyledParagraph>
        <StyledGridDisplay list={ listTechs } />
        <br />
        <p>Languages I&apos;ve Tried</p>
        <StyledGridDisplay list={ listLanguages } />
        <br />
        <p>Tools I&apos;ve Used</p>
        <StyledGridDisplay list={ listTools } />
      </div>
    </StyledContainer>
  );
}
