import React from 'react'

import { Headers, HeroTextContent } from './style'

import { Profile } from '@/components/ui/profile'
import { StyledButton } from '@/components/ui/buttons'
import { StyledParagraph } from '@/components/ui/paragraph'
import { StyledContainer } from '@/components/ui/container'
import AnimationContainer from '@/components/ui/animations/page'

/**
 * Renders the hero section of a webpage.
 * 
 * @param {string} id - The id of the container element.
 * @returns {JSX.Element} The hero section content.
 */
export default function HeroSection({ id }: { id: string }) {
  return (
    <StyledContainer id={id} specialType='Hero'>
      <HeroTextContent>
        <Headers>
          <AnimationContainer animation='Slide In Right'>
            <h1>Ian Cedric Ramirez</h1>
          </AnimationContainer>
          <AnimationContainer animation='Slide In Right'>
            <h2>Instructor and Software Engineer</h2>
          </AnimationContainer>
        </Headers>
        <AnimationContainer animation='Slide In Right'>
          <StyledParagraph>
            <span>Instructor</span> and <span>Freelance Software Engineer</span>. Passionate about building user-friendly, accessible digital experiences with a human-centered focus. Teaches and Lead Future Generations of Software Engineers.
            <br /><br />
            Let&apos;s connect and explore how I can make a positive impact!
          </StyledParagraph>
        </AnimationContainer>
        <AnimationContainer animation='Slide In Right'>
          <div className="w-fit">
            <StyledButton
              params={{ text: 'Wanna, Say Hello?', type: 'Link-InPage', design: 'PopUp', href: 'mailto:ramirezian037@gmail.com', designControl: { fontSize: "1rem", paddingXY: "1rem 1.5rem" } }}
            />
          </div>
        </AnimationContainer>
      </HeroTextContent>
      <AnimationContainer animation='Fade In Bottom'>
        <Profile />
      </AnimationContainer>
    </StyledContainer>
  )
}
