import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonGroupStyles, HeaderStyles, LogoStyles } from './style';
import { ButtonProps, StyledButton } from '../buttons';

export function HeaderNavigation ()
{
  const buttonList: ButtonProps[] = [
    { text: 'About', href: '#about', type: 'link' },
    { text: 'Experience', href: '#experience', type: 'link' },
    { text: 'Projects', href: '#projects', type: 'link' },
    { text: 'Contact', href: '#contact', type: 'link' },
    { text: 'Resume', filename: 'Ramirez_Ian_Cedric.pdf', type: 'download' }
  ]

  return (
    <HeaderStyles>
      <LogoStyles>
        <Link href="/">
          <Image alt='Nyebe Logo' src={ '/static/images/nyebe_white_cutout.png' } width={ 50 } height={ 0 } />
        </Link>
      </LogoStyles>
      <ButtonGroupStyles>
        { buttonList.map( ( button, index ) => (
          <StyledButton
            key={ index }
            params={ button }
          />
        ) ) }
      </ButtonGroupStyles>
    </HeaderStyles>
  );
};

