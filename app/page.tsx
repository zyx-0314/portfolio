'use client'

import React, { Suspense } from 'react';
import { Floaters } from '@/components/floaters'
import { StyledHeaderNavigation } from '@/components/headNav'
import { StyledContainer } from '@/components/container'
import styled from '@emotion/styled';

const HeroSection = React.lazy( () => import( './page/hero' ) );
const AboutSection = React.lazy( () => import( './page/about' ) );
const ExperienceSection = React.lazy( () => import( './page/experience' ) );
const ProjectsSection = React.lazy( () => import( './page/projects' ) );
const ContactSection = React.lazy( () => import( './page/contact' ) );

/**
 * Renders the home page of the website.
 * 
 * @returns The main layout of the home page, including the header, footer, and main content.
 */
export default function Home ()
{
  return (
    <>
      <Floaters />
      <StyledHeaderNavigation />
      <Container>
        <StyledContainer specialType='Main' className="items-center">
          <Suspense fallback={ <div>Loading....</div> }>
            <HeroSection id='hero' />
            <AboutSection id='about' />
            <ExperienceSection id='experience' />
            <ProjectsSection id='projects' />
            <ContactSection id='contact' />
          </Suspense>
        </StyledContainer>
        <footer className='flex w-full justify-center pt-5 mt-5 text-xs pb-3'>Nyebe Creations - { new Date().getFullYear() } - v.0.2.1</footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 .5rem;
`
