import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

import { ButtonProps, StyledButton } from '@/components/ui/buttons';
import { CiMenuKebab } from "react-icons/ci";

import { ButtonGroupStyles, HeaderStyles, LogoStyles, MenuCloseButton, MenuContainer, NavButton } from './style';

/**
 * Renders the header navigation bar of the website.
 * 
 * @returns JSX element representing the header navigation bar.
 */
export function StyledHeaderNavigation ()
{
  // Array of button objects for navigation buttons
  const buttonList: ButtonProps[] = [
    { text: 'About', href: '#about', type: 'Link-InPage', design: 'Lined' },
    { text: 'Experience', href: '#experience', type: 'Link-InPage', design: 'Lined' },
    { text: 'Projects', href: '#projects', type: 'Link-InPage', design: 'Lined' },
    { text: 'Contact', href: '#contact', type: 'Link-InPage', design: 'Lined' },
    { text: 'Resume', filename: 'Ramirez_Ian_Cedric.pdf', type: 'Download', design: 'PopUp' }
  ];

  // State and controls for mobile menu button and header animation
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );
  const controls = useAnimation();

  // Function to handle mobile menu button click
  function handleMenu ( params: boolean )
  {
    setIsMenuOpen( params );
  }

  // Effect to handle header animation on scroll
  useEffect( () =>
  {
    let prevScrollY = window.scrollY;

    const handleScroll = () =>
    {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < prevScrollY;
      prevScrollY = currentScrollY;

      if ( currentScrollY === 0 )
      {
        controls.start( { y: 0 } );
      } else
      {
        controls.start( { y: scrollingUp ? 0 : -100 } );
      }
    };

    window.addEventListener( 'scroll', handleScroll );

    return () => window.removeEventListener( 'scroll', handleScroll );
  }, [ controls ] );

  // JSX element representing the header navigation bar
  return (
    <>
      <HeaderStyles initial={ { y: 0 } } animate={ controls }>
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
        <NavButton onClick={ () => handleMenu( true ) }>
          <CiMenuKebab style={ { fontSize: 25 } } />
        </NavButton>
      </HeaderStyles>

      <MenuContainer isOpen={ isMenuOpen }>
        <MenuCloseButton onClick={ () => handleMenu( false ) }>X</MenuCloseButton>
        <ul className='flex flex-col items-center'>
          { buttonList.map( ( button, index ) => (
            <li key={ index } onClick={ () => handleMenu( false ) }>
              <StyledButton
                params={ button }
              />
            </li>
          ) ) }
        </ul>
      </MenuContainer>
      {
        isMenuOpen &&
        <div
          className='bg-white opacity-25  w-full h-[100vh] fixed z-50'
          onClick={ () => handleMenu( false ) }
        />
      }
    </>
  );
}
