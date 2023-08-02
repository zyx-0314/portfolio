import React from 'react'
import { StyleSectionHeader } from './style'

interface SectionHeaderProps
{
  number: string
  title: string
}

export function SectionHeader ( { number, title }: SectionHeaderProps )
{
  return (
    <StyleSectionHeader>
      <div className="number">
        <div className="overlap-group">
          <h1 className="element">{ number }</h1>
        </div>
      </div>
      <div className="frame">
        <div className="title">{ title }</div>
        <div className="line"></div>
      </div>
    </StyleSectionHeader>
  )
}
