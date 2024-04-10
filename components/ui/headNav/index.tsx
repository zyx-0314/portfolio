'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { CiMenuKebab } from "react-icons/ci";

import { ButtonProps, StyledButton } from '@/components/ui/buttons';
import MobileNav from '@/components/ui/mobileNav';

import { ButtonGroupStyles, HeaderStyles, LogoStyles, NavButton } from './style';

/**
 * Renders the header navigation bar of the website.
 * 
 * @returns JSX element representing the header navigation bar.
 */
export function StyledHeaderNavigation ( { buttonList }: { buttonList: ButtonProps[] } )
{

  const [ isMenuOpen, setIsMenuOpen ] = useState( false );
  const controls = useAnimation();

  function handleMenu ( params: boolean )
  {
    setIsMenuOpen( params );
  }

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

  if ( !buttonList ) return null;

  return (
    <>
      <HeaderStyles initial={ { y: 0 } } animate={ controls }>
        <LogoStyles>
          <Link href="/">
            <Image alt='Nyebe Logo' src={ '/static/images/nyebe_white_cutout.webp' } width={ 50 } height={ 0 } />
          </Link>
        </LogoStyles>
        <ButtonGroupStyles>
          { buttonList && buttonList.map( ( button, index ) => (
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

      {
        isMenuOpen &&
        <MobileNav
          buttonList={ buttonList }
          isMenuOpen={ isMenuOpen }
          handleMenu={ handleMenu }
        />

      }
    </>
  );
}
