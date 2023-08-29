import React from 'react'
import { GridContainerStyle, WordItemStyle } from './style'
import PropTypes from 'prop-types';
import AnimationContainer from '../animations/page';

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
    <GridContainerStyle>
      { list.map( ( { name, icon }, index ) => (
        <AnimationContainer
          animation='Fade In Top'
          scale={ 1.3 }
          duration={ 0.3 * ( index + 1 ) }
          key={ index }
        >
          <WordItemStyle key={ index } className='grid-item'>
            <div className='container'>
              <div className='icon'>
                { icon }
              </div>
              <p> { name } </p>
            </div>
          </WordItemStyle>
        </AnimationContainer>
      ) ) }
    </GridContainerStyle>
  );
}
