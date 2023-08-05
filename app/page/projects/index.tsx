import React from 'react'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledContainer } from '@/components/container'
import { StyledButton } from '@/components/buttons'
import { ContentHead, CoverStyled, ProjectContainer, ProjectContent, ProjectContentContainer, ProjectNumber, TechStack, TechStackList } from './style'

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
      ]
    }, {
      title: 'Path utility Guide System',
      type: 'Android Application - Experimental (Research)',
      description: 'A web-based application that can sell products online. It has a feature that can generate a report of the sales.',
      image: 'PUGS.png',
      link: '',
      techs: [
        'Kotlin',
        'Python',
        'JavaScript'
      ]
    }
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
      <SectionHeader number='.03' title='Some of my Works.' />
      { projectList.map( ( project, index ) => (
        <ProjectContainer value={ index } key={ index } href={ project.link ? project.link : undefined }>
          <ProjectContentContainer image={ `/static/projects/${ project.image }` }>
            <CoverStyled id='cover'>
              <ProjectNumber id='number'>{ formatProjectNumber( index ) }</ProjectNumber>
              <ProjectContent id='content'>
                <ContentHead>
                  <h2>{ project.type }</h2>
                  <h1>{ project.title }</h1>
                </ContentHead>
                <p id='hidden'>{ project.description }</p>
                <TechStackList id='hidden'>
                  { project.techs.map( ( tech, index ) => (
                    <TechStack key={ index }>{ tech }</TechStack>
                  ) ) }
                </TechStackList>
              </ProjectContent>
            </CoverStyled>
          </ProjectContentContainer>
        </ProjectContainer>
      ) ) }
    </StyledContainer>
  )
}
