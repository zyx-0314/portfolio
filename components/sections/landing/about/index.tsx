import { DiSqllite } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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
export default function AboutSection({ id }: { id: string }): JSX.Element {
  // Arrays of strings representing the author's skills

  const listTechs = [
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'NextJS', icon: <TbBrandNextjs /> },
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
    { name: 'MySQL', icon: <GrMysql /> },
    { name: 'SQLite', icon: <DiSqllite /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
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
    <StyledContainer id={id}>
      <AnimationContainer animation='Slide In Right'>
        <SectionHeader number=".01" title="About Me" />
      </AnimationContainer>
      <div>
        <AnimationContainer animation='Slide In Top'>
          <StyledParagraph>
            Hello, I&apos;m <span>Ian Cedric Ramirez</span>, an instructor and freelance developer currently based in Manila. Let me share a bit about myself.
            <br /> <br />
            Originally from the picturesque town of <span>Echague in Isabela</span>, I embarked on my journey in technology by pursuing a degree in <span>Computer Science at Isabela State University</span>. This educational path not only broadened my knowledge but also ignited a deep curiosity about the ever-evolving tech landscape. As part of my commitment to continuous learning, I am currently pursuing a <span>Master&apos;s degree in IT (MIT) at PUP-Manila</span>, while also honing my skills through freelance development work.
            <br /> <br />
            In my professional journey, I&apos;ve embraced various roles within project teams, from <span>Backend Developer</span> to <span>Frontend Developer</span>. These experiences have provided me with a holistic understanding of project dynamics and the importance of effective collaboration. Additionally, my involvement in representing different organizations has enriched my perspective on teamwork and community engagement.
            <br /> <br />
            Adaptability is a key strength of mine. I thrive in dynamic environments and can swiftly adjust to new challenges and opportunities. My proactive approach allows me to anticipate issues and take decisive action to address them effectively.
            <br /> <br />
            Looking ahead, my career aspiration remains focused on making a significant impact in the DevOps field. I firmly believe that a strong foundation in both development and operations is vital for driving innovation and continuous improvement in software delivery. As I continue to refine my skills and pursue further education, such as my AWS Cloud Practitioner training with Edukasyon.ph, I am eager to contribute my expertise to a team that values innovation and embraces the DevOps philosophy.
            <br /> <br />
            Thank you for taking the time to learn more about me. I am excited about the opportunities ahead and look forward to sharing my portfolio projects and experiences with you.
            <br /> <br />
          </StyledParagraph>
        </AnimationContainer>
        <CategoryHeadings>
          Technologies I&apos;ve Use:
        </CategoryHeadings>
        <StyledGridDisplay list={listTechs} />
        <br />
        <CategoryHeadings>
          Languages I&apos;ve Tried
        </CategoryHeadings>
        <StyledGridDisplay list={listLanguages} />
        <br />
        <CategoryHeadings>
          Tools I&apos;ve Used
        </CategoryHeadings>
        <StyledGridDisplay list={listTools} />
      </div>
    </StyledContainer>
  );
}
