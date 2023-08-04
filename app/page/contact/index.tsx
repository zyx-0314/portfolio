import React from 'react'
import { ContactSubHeader } from './style'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledButton } from '@/components/buttons'
import { StyledParagraph } from '@/components/paragraph'
import { StyledContainer } from '@/components/container'

export function ContactSection ( { id }: { id: string } )
{
  return (
    <StyledContainer id={ id }>
      <SectionHeader number='.04' title='Say Hi, If Your Interested.' />
      <ContactSubHeader>
        <h1>Get In Touch</h1>
        <StyledParagraph textAlignment='center'>
          If you find my work appealing and there is a suitable position available within your company, please don&apos;t hesitate to reach out to me. I am eager to join your team and contribute my skills and expertise to make a positive impact. Thank you for considering my profile. Looking forward to the opportunity!
        </StyledParagraph>
        <StyledButton params={ { text: 'Wanna, Say Hello?', type: 'Link', design: 'PopUp', href: 'mailto:ramirezian037@gmail.com', designControl: { paddingXY: '1rem 1.3rem' } } } />
        <p>or Check my Resume</p>
        <StyledButton params={ { text: 'Resume', type: 'Download', filename: 'Ramirez_Ian_Cedric.pdf', design: 'PopUp', designControl: { paddingXY: '1rem 1.3rem' } } } />
      </ContactSubHeader>

    </StyledContainer>
  )
}
