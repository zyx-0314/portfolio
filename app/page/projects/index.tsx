import React from 'react'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledContainer } from '@/components/container'

export function ProjectsSection ( { id }: { id: string } )
{
  return (
    <StyledContainer id={ id }>
      <SectionHeader number='.03' title='What I&apos;ve Been Working On.' />
      <p>Currently underworks 🚧🏗️👷</p>
    </StyledContainer>
  )
}
