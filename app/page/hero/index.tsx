import { Profile } from '@/components/profile/index'
import React from 'react'
import { Headers, HeroTextContent } from './style'
import { StyledButton } from '@/components/buttons'
import { StyledParagraph } from '@/components/paragraph'
import { StyledContainer } from '@/components/container'

export default function HeroSection ( { id }: { id: string } )
{
  return (
    <StyledContainer id={ id } hero >
      <HeroTextContent>
        <Headers>
          <h1>Ian Cedric Ramirez</h1>
          <h2>An Aspiring Software Engineer</h2>
        </Headers>

        <StyledParagraph>
          Aspiring <span>Software Engineer</span> and recent <span>Computer Science</span> graduate. Passionate about building user-friendly, accessible digital experiences with a human-centered focus.<br />
          Actively seeking <span>Entry-level Opportunities</span> in <span>Front-end and/or Back-end Development</span> to contribute to innovative projects. Let&apos;s connect and explore how I can make a positive impact!
        </StyledParagraph>

        <StyledButton params={ { text: 'Wanna, Say Hello?', type: 'button-link', href: 'mailto:ramirezian037@gmail.com', className: 'text-2xl' } } />
      </HeroTextContent>
      <div>
        <Profile />
      </div>
    </StyledContainer>
  )
}
