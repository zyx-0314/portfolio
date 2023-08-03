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
          <div className='flex gap-x-1'>
            <span>&gt;</span>
            <p> { word } </p>
          </div>
        </WordItemStyle>
      ) ) }
    </GridContainerStyle>
  )
}
