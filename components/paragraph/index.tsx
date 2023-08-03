import React from 'react'
import { ContentBody } from './style'

interface Props
{
  children: React.ReactNode
  textAlignment?: 'left' | 'center' | 'right'
}

export function StyledParagraph ( { children, textAlignment }: Props )
{
  return (
    <ContentBody textAlignment={ textAlignment ? textAlignment : 'justify' }>{ children }</ContentBody>
  )
}
