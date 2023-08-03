import React from 'react'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledContainer } from '@/components/container'

export function ExperienceSection ( { id }: { id: string } )
{
  return (
    <StyledContainer id={ id }>
      <SectionHeader number='.02' title='Where I&apos;ve Been So Far?.' />
      <p>Currently underworks 🚧🏗️👷</p>

    </StyledContainer>
  )
}
