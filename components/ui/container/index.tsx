import React from 'react'
import PropTypes from 'prop-types';

import { HeroStyledSectionContainer, StyledSectionContainerNoMargin, StyledMainContainer, StyledSectionContainer } from './style'

interface ContainerProps
{
  children: React.ReactNode
  id?: string
  className?: string
  specialType?: 'Hero' | 'Main' | 'Top' | 'NoMargin'
}

/**
 * Returns a styled container component based on the value of the 'specialType' prop.
 * 
 * @param id - The id attribute of the container (optional).
 * @param children - The content of the container.
 * @param specialType - The type of container to be returned ('Main', 'Hero', or default 'Section') (optional).
 * @param className - The class attribute of the container (optional).
 * @returns A styled container component.
 */
export function StyledContainer ( { id, children, specialType, className }: ContainerProps )
{
  switch ( specialType )
  {
    case 'Main':
      return (
        <StyledMainContainer id={ id } className={ className }>
          { children }
        </StyledMainContainer>
      );
    case 'Hero':
      return (
        <HeroStyledSectionContainer id={ id } className={ className }>
          { children }
        </HeroStyledSectionContainer>
      );
    case 'NoMargin':
      return (
        <StyledSectionContainerNoMargin>
          { children }
        </StyledSectionContainerNoMargin>
      )
    default:
      return (
        <StyledSectionContainer id={ id } className={ className } >
          { children }
        </StyledSectionContainer>
      );
  }
}
