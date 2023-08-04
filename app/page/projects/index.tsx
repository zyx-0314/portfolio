import React from 'react'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledContainer } from '@/components/container'
import { StyledButton } from '@/components/buttons'
import { ContentHead, Cover, ProjectContainer, ProjectContent, ProjectContentContainer, ProjectNumber, TechStack, TechStackList } from './style'

export function ProjectsSection ( { id }: { id: string } )
{
  const projectList = [
    {
      title: 'SIMS - Student Information Management System',
      type: 'Web Application',
      description: 'A web-based application that manages the student information of a school. It has a feature that can generate a report of the student information.',
      image: 'SIMS.png',
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
      techs: [
        'Kotlin',
        'Python',
        'JavaScript'
      ]
    }
  ]

  return (
    <StyledContainer id={ id }>
      <SectionHeader number='.03' title='Some of my Works.' />
      { projectList.map( ( project, index ) => (
        <ProjectContainer value={ index } >
          <ProjectContentContainer image={ `/static/projects/${ project.image }` }>
            <Cover id='cover'>
              <ProjectNumber id='number'>{ index < 10 ? `0${ index + 1 }` : index + 1 }</ProjectNumber>
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
            </Cover>
          </ProjectContentContainer>
        </ProjectContainer>
      ) ) }
    </StyledContainer>
  )
}
