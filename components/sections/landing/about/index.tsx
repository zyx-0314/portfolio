import React from 'react'
import { GrMysql } from 'react-icons/gr'
import { VscGithub } from 'react-icons/vsc'
import { IoLogoTableau } from 'react-icons/io5'
import { AiOutlineAndroid } from 'react-icons/ai'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { RiBootstrapLine, RiFileExcel2Line } from 'react-icons/ri'
import { FaLaravel, FaReact, FaSass, FaPhp, FaFigma } from 'react-icons/fa'
import { TbBrandPython, TbBrandKotlin, TbBrandDocker } from 'react-icons/tb'
import { SiCplusplus, SiPostman, SiInsomnia, SiAdobexd } from 'react-icons/si'
import { TbBrandJavascript, TbBrandTypescript, TbBrandCss3, TbBrandHtml5 } from 'react-icons/tb'


import { StyledGridDisplay } from '@/components/ui/grid'
import { StyledParagraph } from '@/components/ui/paragraph'
import { StyledContainer } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/sectionHeader'
import AnimationContainer from '@/components/ui/animations/page'

import { CategoryHeadings } from './style'

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
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'React Native', icon: <FaReact /> },
    { name: 'BootStrap CSS', icon: <RiBootstrapLine /> },
    { name: 'TailWind CSS', icon: <BiLogoTailwindCss /> },
    { name: 'Emotion CSS', icon: <TbBrandCss3 /> },
    { name: 'SASS/SCSS', icon: <FaSass /> }
  ]

  const listLanguages = [
    { name: 'HTML/CSS', icon: <><TbBrandCss3 /><TbBrandHtml5 /></> },
    { name: 'JavaScript', icon: <TbBrandJavascript /> },
    { name: 'TypeScript', icon: <TbBrandTypescript /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'SQL', icon: <GrMysql /> },
    { name: 'Python', icon: <TbBrandPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Kotlin', icon: <TbBrandKotlin /> }
  ]

  const listTools = [
    { name: 'Git(Github)', icon: <VscGithub /> },
    { name: 'Docker', icon: <TbBrandDocker /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Insomnia', icon: <SiInsomnia /> },
    { name: 'Android Studio', icon: <AiOutlineAndroid /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Adobe XD', icon: <SiAdobexd /> },
    { name: 'Tableau', icon: <IoLogoTableau /> },
    { name: 'Excel', icon: <RiFileExcel2Line /> }
  ]

  return (
    <StyledContainer id={ id }>
      <AnimationContainer animation='Slide In Right'>
        <SectionHeader number=".01" title="About Me" />
      </AnimationContainer>
      <div>
        <AnimationContainer animation='Slide In Top'>
          <StyledParagraph>
            I&apos;m <span>Ian Cedric Ramirez</span>, an aspiring <span>Software Engineer</span> with a passion for creating things that live on the internet.
            <br /> <br />
            Recently graduated in <span>Computer Science</span>, I&apos;ve had the privilege of gaining practical experience as a <span>Software Engineer Intern</span> for <span>Four(4) Months</span>. I&apos;m Highly <span>Motivated</span>, <span>Result-Oriented</span>, and dedicated to <span>Continuous Growth</span>. My goal is to make a Significant Impact in the tech industry, and I thrive in Collaborating with teams within <span>Agile Development Environments</span>. As I explore opportunities, I&apos;m eager to contribute my skills and expertise to build accessible, inclusive products and digital experiences that leave a positive mark.
            <br /> <br />
            I&apos;m currently on the lookout for <span>Entry-Level Opportunities</span> to kickstart my professional journey.
            <br /> <br />
            If you have any openings or know of exciting opportunities, I&apos;d love to connect and discuss how I can be a valuable asset to your team. Let&apos;s make amazing things together!
            <br /> <br />
          </StyledParagraph>
        </AnimationContainer>
        <CategoryHeadings>
          Technologies I Currently Use:
        </CategoryHeadings>
        <StyledGridDisplay list={ listTechs } />
        <br />
        <CategoryHeadings>
          Languages I&apos;ve Tried
        </CategoryHeadings>
        <StyledGridDisplay list={ listLanguages } />
        <br />
        <CategoryHeadings>
          Tools I&apos;ve Used
        </CategoryHeadings>
        <StyledGridDisplay list={ listTools } />
      </div>
    </StyledContainer>
  );
}
