import React from 'react'
import Image from 'next/image'

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

import { ProjectData } from '@/types'
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
export default function ProjectsSection ( { id, projectList }: { id: string, projectList: ProjectData[] } )
{
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
            <ProjectContentContainer
              itemProp='image'
              href={ `/projects/${ project.id }` }
              title={ project.title }
            >
              <Image
                alt={ project.title }
                src={ `/static/projects/${ project.id }/${ project.wallpaper }` }
                fill
                loading="lazy"
                className='object-cover aspect-video'
              />
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
