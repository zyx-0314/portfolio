import React from 'react'
import { StyledProfile } from './style'
import Image from 'next/image'

/**
 * Renders a profile image with a cover effect and four rectangular borders.
 * 
 * @returns The JSX element representing the profile image.
 */
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
          <div className="image">
            <Image
              src='/static/images/Graduation-Profile-Pic.webp'
              alt='Ian Cedric Ramirez'
              fill
              loading="lazy"
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </StyledProfile>
  );
}
