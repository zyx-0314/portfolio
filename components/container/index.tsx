import React from 'react'
import { HeroStyledSectionContainer, StyledMainContainer, StyledSectionContainer } from './style'

interface ContainerProps
{
  children: React.ReactNode
  id?: string
  className?: string
  specialType?: 'Hero' | 'Main'
}

export function StyledContainer ( { id, children, specialType, className }: ContainerProps )
{

  switch ( specialType )
  {
    case 'Main':
      return (
        <StyledMainContainer id={ id } className={ className }>
          { children }
        </StyledMainContainer>
      )
    case 'Hero':
      return (
        <HeroStyledSectionContainer id={ id } className={ className }>
          { children }
        </HeroStyledSectionContainer>
      )
  }
  return (
    <StyledSectionContainer id={ id } className={ className }>
      { children }
    </StyledSectionContainer>
  )
}
