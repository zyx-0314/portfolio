import React from 'react'
import { GridContainerStyle, WordItemStyle } from './style'

interface GridProps
{
  list: string[]
}

export function GridDisplay ( { list }: GridProps )
{
  return (
    <GridContainerStyle>
      { list.map( ( word, index ) => (
        <WordItemStyle key={ index } className='grid-item'>
          <p>
            <span>&gt; </span>{ word }
          </p>
        </WordItemStyle>
      ) ) }
    </GridContainerStyle>
  )
}
