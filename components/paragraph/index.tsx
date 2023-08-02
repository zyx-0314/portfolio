import React from 'react'
import { ContentBody } from './style'

interface Props
{
  child: React.ReactNode
}

export function StyledParagraph ( { child }: Props )
{
  return (
    <ContentBody>{ child }</ContentBody>
  )
}
