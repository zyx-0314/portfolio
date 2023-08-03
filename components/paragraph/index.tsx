import React from 'react'
import { ContentBody } from './style'

interface Props
{
  children: React.ReactNode
  textAlignment?: 'left' | 'center' | 'right' | 'justify'
}

export function StyledParagraph ( { children, textAlignment = 'justify' }: Props )
{
  return (
    <ContentBody textAlignment={ textAlignment }>{ children }</ContentBody>
  )
}
