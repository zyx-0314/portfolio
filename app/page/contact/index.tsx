import React from 'react'
import { ContactSubHeader } from './style'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledButton } from '@/components/buttons'
import { StyledParagraph } from '@/components/paragraph'
import { StyledContainer } from '@/components/container'

/**
 * Renders a section of a webpage that displays the contact information of the user.
 * 
 * @param {string} id - The id of the section.
 * @returns {JSX.Element} The rendered contact section.
 */
export default function ContactSection ( { id }: { id: string } ): JSX.Element
{
  const content = {
    title: 'Get In Touch',
    mainDescription: 'If you find my work appealing and there is a suitable position available within your company, please don\'t hesitate to reach out to me. I am eager to join your team and contribute my skills and expertise to make a positive impact. Thank you for considering my profile. Looking forward to the opportunity!',
    subDescription: 'or Check my Resume'
  }

  return (
    <StyledContainer id={ id }>
      <SectionHeader number=".04" title="Say Hi, If You're Interested." />
      <ContactSubHeader>
        <h3>{ content.title }</h3>
        <StyledParagraph textAlignment="center">
          { content.mainDescription }
        </StyledParagraph>
        <StyledButton params={ { text: 'Wanna, Say Hello?', type: 'Link-InPage', design: 'PopUp', href: 'mailto:ramirezian037@gmail.com', designControl: { paddingXY: '1rem 1.5rem' } } } />
        <p>{ content.subDescription }</p>
        <StyledButton params={ { text: 'Resume', type: 'Download', filename: 'Ramirez_Ian_Cedric.pdf', design: 'PopUp', designControl: { paddingXY: '1rem 3.5rem' } } } />
      </ContactSubHeader>
    </StyledContainer>
  );
}
