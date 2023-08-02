import React from 'react'
import { StyledProfile } from './style'
import Image from 'next/image'

export function Profile ()
{
  return (
    <StyledProfile>
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="cover" />
          <div className="image">
            <Image src='/images/Profile.jpg' alt='Ian Cedric Ramirez' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        </div>
      </div>
    </StyledProfile>
  )
}
