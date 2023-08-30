'use client'

import Head from 'next/head';
import styled from '@emotion/styled';
import React, { Suspense } from 'react';

import { Floaters } from '@/components/ui/floaters'
import { ButtonProps } from '@/components/ui/buttons';
import { StyledContainer } from '@/components/ui/container'
import { StyledHeaderNavigation } from '@/components/ui/headNav'

import HeroSection from '@/components/sections/landing/hero'
import AboutSection from '@/components/sections/landing/about'
import ContactSection from '@/components/sections/landing/contact'
import ProjectsSection from '@/components/sections/landing/projects'
import ExperienceSection from '@/components/sections/landing/experience'


/**
 * Renders the home page of the website.
 *
 * @returns The main layout of the home page, including the header, footer, and main content.
 */
export default function Home ()
{
  const addProductJsonLd = () =>
  {
    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Ian Ramirez",
        "jobTitle": "Software Engineer",
        "url": "https://ian-cedric-ramirez.vercel.app/",
        "description": "Passionate software engineer with expertise in crafting innovative solutions.",
        "sameAs": [
          "https://www.linkedin.com/in/ian-cedric-ramirez/",
          "https://github.com/zyx-0314"
        ]
      }`
    }
  }

  // Array of button objects for navigation buttons
  const buttonList: ButtonProps[] = [
    { text: 'About', href: '#about', type: 'Link-InPage', design: 'Lined' },
    { text: 'Experience', href: '#experience', type: 'Link-InPage', design: 'Lined' },
    { text: 'Projects', href: '#projects', type: 'Link-InPage', design: 'Lined' },
    { text: 'Contact', href: '#contact', type: 'Link-InPage', design: 'Lined' },
    { text: 'Resume', filename: 'Ramirez_Ian_Cedric.pdf', type: 'Download', design: 'PopUp' }
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ addProductJsonLd() }
          key="product-jsonld"
        />
      </Head>
      <Floaters />
      <StyledHeaderNavigation buttonList={ buttonList } />
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
        <footer className='flex w-full justify-center pt-5 mt-5 text-xs pb-3'>Nyebe Creations - { new Date().getFullYear() } - v.1.0.6</footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 .5rem;
`
