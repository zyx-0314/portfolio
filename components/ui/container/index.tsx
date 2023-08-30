import React from 'react'
import PropTypes from 'prop-types';

import { HeroStyledSectionContainer, StyledMainContainer, StyledSectionContainer } from './style'

StyledContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  specialType: PropTypes.oneOf( [ 'Hero', 'Main' ] ),
};

interface ContainerProps
{
  children: React.ReactNode
  id?: string
  className?: string
  specialType?: 'Hero' | 'Main'
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
  }
  return (
    <StyledSectionContainer id={ id } className={ className }>
      { children }
    </StyledSectionContainer>
  );
}
