import { Profile } from '@/components/profile/index'
import React from 'react'
import { ContentBody, Headers, HeroContainer, HeroTextContent } from './style'
import { StyledButton } from '@/components/buttons'

export default function HeroSection ()
{
  return (
    <HeroContainer className='w-2/3'>
      <HeroTextContent>
        <Headers>
          <h1>Ian Cedric Ramirez</h1>
          <h2>An Aspiring Software Engineer</h2>
        </Headers>

        <ContentBody>
          Aspiring <span>Software Engineer</span> and recent <span>Computer Science</span> graduate. Passionate about building user-friendly, accessible digital experiences with a human-centered focus.<br />
          Actively seeking <span>Entry-level Opportunities</span> in <span>Front-end and/or Back-end Development</span> to contribute to innovative projects. Let's connect and explore how I can make a positive impact!
        </ContentBody>

        <StyledButton params={ { text: 'Wanna, Say Hello?', type: 'button-link', href: 'mailto:ramirezian037@gmail.com', className: 'text-2xl' } } />
      </HeroTextContent>
      <div>
        <Profile />
      </div>
    </HeroContainer>
  )
}
