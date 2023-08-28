'use client'

import React, { Suspense } from 'react';
import { Floaters } from '@/components/ui/floaters'
import { StyledHeaderNavigation } from '@/components/ui/headNav'
import { StyledContainer } from '@/components/ui/container'
import styled from '@emotion/styled';
import Head from 'next/head';

const HeroSection = React.lazy( () => import( '@/components/non-reusable/landing/hero' ) );
const AboutSection = React.lazy( () => import( '@/components/non-reusable/landing/about' ) );
const ExperienceSection = React.lazy( () => import( '@/components/non-reusable/landing/experience' ) );
const ProjectsSection = React.lazy( () => import( '@/components/non-reusable/landing/projects' ) );
const ContactSection = React.lazy( () => import( '@/components/non-reusable/landing/contact' ) );

/**
 * Renders the home page of the website.
 * 
 * @returns The main layout of the home page, including the header, footer, and main content.
 */
export default function Home ()
{
  function addProductJsonLd ()
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
