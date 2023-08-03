import React from 'react'
import { HeroStyledSectionContainer, StyledSectionContainer } from './style'

interface ContainerProps
{
  id: string
  children: React.ReactNode
  hero?: boolean
}

export function StyledContainer ( { id, children, hero }: ContainerProps )
{
  if ( hero )
  {
    return (
      <HeroStyledSectionContainer id={ id } >
        { children }
      </HeroStyledSectionContainer>
    )
  }
  return (
    <StyledSectionContainer id={ id } >
      { children }
    </StyledSectionContainer>
  )
}
