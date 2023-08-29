import React from 'react'

import
{
  TechStack,
  ContentHead,
  CoverStyled,
  TechStackList,
  ProjectNumber,
  ProjectContent,
  ProjectContainer,
  ProjectContentContainer,
} from './style'

import { StyledContainer } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/sectionHeader'
import AnimationContainer from '@/components/ui/animations/page'

/**
 * Renders a section displaying a list of projects with their details.
 * Each project is rendered in a container with a cover and hover effect.
 * 
 * @param id - The id of the container element.
 * @returns A container element with a section header and a list of project containers.
 */
export default function ProjectsSection ( { id }: { id: string } )
{
  const projectList = [
    {
      title: 'SIMS - Student Information Management System',
      type: 'Web Application',
      description: 'A web-based application that manages the student information of a school. It has a feature that can generate a report of the student information.',
      image: 'SIMS.png',
      link: '',
      techs: [
        'PHP',
        'MySQL',
        'Bootstrap CSS',
      ],
      schema: 'WebApplication'
    }, {
      title: 'Path Utility Guide System',
      type: 'Android Application - Experimental (Research)',
      description: 'An android application that can guide the user in their path by using Neural Networks Algorithms inbeded in the Application. It has a feature that can detect the objects spatial location, approximate distance, Danger Guage and Object Class by using Neural Networks Algorithms inbeded in the Application.',
      image: 'PUGS.png',
      link: '',
      techs: [
        'Kotlin',
        'Python',
        'JavaScript',
        'TensorFlow'
      ],
      schema: 'MobileApplication'
    }, {
      title: 'ECommerce CMS',
      type: 'Sample Demo for Full Stack Development',
      description: 'I\'ve crafted a Next.js E-Commerce CMS demo highlighting my full-stack skills.The frontend offers dynamic product listings, a smooth cart experience, synced perfectly with the Node.js backend. Expertise in APIs, security, and efficiency showcased.',
      image: 'Ecommerce_CMS.png',
      link: '',
      techs: [
        'NextJS',
        'MySQL',
        'Prisma',
        'Tailwind CSS',
        'Stripe - Clerk'
      ],
      schema: 'MobileApplication'
    }, {
      title: 'ECommerce',
      type: 'Sample Demo for Full Stack Development',
      description: 'I\'ve created an E-Commerce store using Next.js.The frontend boasts dynamic product listings, an intuitive cart, and seamless API integration. Backed by a secure Node.js backend, it showcases my prowess in full - stack development for efficient and dynamic online shopping platforms.',
      image: 'Ecommerce.png',
      link: '',
      techs: [
        'NextJS',
        'Tailwind CSS',
        'Stripe'
      ],
      schema: 'MobileApplication'
    },
  ]

  /**
   * Formats the project number.
   * 
   * @param index - The index of the project.
   * @returns The formatted project number.
   */
  function formatProjectNumber ( index: number ): string
  {
    return index < 10 ? `0${ index + 1 }` : `${ index + 1 }`;
  }

  return (
    <StyledContainer id={ id }>
      <AnimationContainer animation='Slide In Right'>
        <SectionHeader number='.03' title='Some of my Works.' />
      </AnimationContainer>
      { projectList.map( ( project, index ) => (
        <AnimationContainer animation={ index % 2 ? 'Slide In Right' : 'Slide In Left' } key={ index }>
          <ProjectContainer value={ index } itemScope itemType={ `https://schema.org/${ project.schema }` }>
            {/* <ProjectContainer value={ index } key={ index } href={ project.link ? project.link : undefined } target='_blank' rel='noopener noreferrer' title={ project.title }> */ }
            <ProjectContentContainer image={ `/static/projects/${ project.image }` } itemProp='image'>
              <CoverStyled id='cover'>
                <ProjectNumber id='number'>{ formatProjectNumber( index ) }</ProjectNumber>
                <ProjectContent id='content'>
                  <ContentHead>
                    <h3 itemProp='applicationCategory'>{ project.type }</h3>
                    <h2 itemProp='name'>{ project.title }</h2>
                  </ContentHead>
                  <p id='hidden' itemProp='about'>{ project.description }</p>
                  <TechStackList id='hidden'>
                    { project.techs.map( ( tech, index ) => (
                      <TechStack key={ index }>{ tech }</TechStack>
                    ) ) }
                  </TechStackList>
                </ProjectContent>
              </CoverStyled>
            </ProjectContentContainer>
          </ProjectContainer>
        </AnimationContainer>
      ) ) }
    </StyledContainer>
  )
}
