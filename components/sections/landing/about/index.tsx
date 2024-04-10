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
            Hello, I&apos;m <span>Ian Cedric Ramirez</span>, and I&apos;m excited to share a bit about myself with you.
            <br /> <br />
            I come from the picturesque town of <span>Echague in Isabela</span>, a place that has always been a source of inspiration for me.
            <br /> <br />
            I pursued my passion for technology by majoring in <span>Computer Science</span> at <span>Isabela State University</span>. This academic journey not only enriched my knowledge but also ignited my curiosity about the ever-evolving tech landscape. As part of my ongoing commitment to learning, I&apos;m currently working towards becoming an <span>AWS Certified Cloud Practitioner</span>, an endeavor that reflects my dedication to staying on the cutting edge of cloud technologies.
            <br /> <br />
            In my professional journey, I&apos;ve worn multiple hats in various project teams. My roles have ranged from <span>Backend Developer</span> to <span>Frontend Developer</span>, allowing me to contribute to projects from a technical perspective. I&apos;ve also taken on the responsibilities of a <span > Project Manager</span >, where I&apos;ve coordinated efforts and ensured the successful completion of projects. Additionally, I&apos;ve had the privilege of representing different organizations, both within my school and the local community, which has broadened my horizons and deepened my understanding of <span>teamwork</span> and <span>collaboration</span>.
            <br /> <br />
            One of my standout soft skills is <span>adaptability</span>. I thrive in dynamic environments and can swiftly adjust to new challenges and opportunities. My <span>proactive</span> approach enables me to anticipate issues and take the initiative to resolve them effectively.
            <br /> <br />
            Looking forward, my career goal is to make a mark in the world of <span>DevOps</span>. I firmly believe that a strong background in both <span>development</span> and <span>operations</span> is essential to bridging the gap between these critical aspects of software delivery. I am enthusiastic about the exciting possibilities that the DevOps field holds and am eager to contribute my skills and passion to a team that values innovation and continuous improvement.
            <br /> <br />
            Thank you for taking the time to get to know me better. I look forward to sharing more about my experiences and accomplishments through my portfolio projects.
            <br /> <br />
          </StyledParagraph>
        </AnimationContainer>
        <CategoryHeadings>
          Technologies I&apos;ve Use:
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
