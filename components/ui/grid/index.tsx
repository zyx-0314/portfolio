import React from 'react'
import PropTypes from 'prop-types'

import { GridContainerStyle, WordItemStyle } from './style'
  ;
import AnimationContainer from '@/components/ui/animations/page';

StyledGridDisplay.propTypes = {
  list: PropTypes.array.isRequired,
};

interface GridProps
{
  list: { name: string, icon: any }[]
}

/**
 * Renders a grid of words with a hover effect.
 * 
 * @param {Object} props - The component props.
 * @param {string[]} props.list - An array of strings representing the words to be displayed in the grid.
 * @returns {JSX.Element} The grid of words.
 */
export function StyledGridDisplay ( { list }: GridProps ): JSX.Element
{
  return (
    <AnimationContainer
      animation='Fade In Top'
    >
      <GridContainerStyle>
        { list.map( ( { name, icon }, index ) => (
          <WordItemStyle key={ index } className='grid-item'>
            <div className='container'>
              <div className='icon'>
                { icon }
              </div>
              <p> { name } </p>
            </div>
          </WordItemStyle>
        ) ) }
      </GridContainerStyle>
    </AnimationContainer>
  );
}
