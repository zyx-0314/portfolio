'use client'

import React from 'react'

import { FullProjectData } from '@/types'
import { StyledContainer } from '@/components/ui/container'

import HeroSection from './hero/page'
import SectionContent from './sectionContent/page'
import SelectionImages from './selectionImages/page'
import SingleFileImages from './singleFileImages/page'
import CollaboratorsSection from './collaborators/page'
import Image from 'next/image'

interface Props {
  projectData: FullProjectData
}

const ProjectView = (
  { projectData, }: Props
) => {
  return (
    <div className='min-h-[100vh] h-fit pt-[5rem]'>
      <HeroSection
        ProjectData={projectData}
        folder={projectData.id}
      />

      <div className='h-[25vh] md:h-[30vh]' />
      <StyledContainer specialType='Main' className='pt-16'>
        <StyledContainer specialType='NoMargin'>
          <div className='text-center flex flex-row w-full justify-center items-center gap-2 '>
            <span className='lg:w-3/5 md:w-full'>
              {projectData.projectBackground}
            </span>
          </div>
        </StyledContainer>
        <div className='h-[1vh]' />
        <StyledContainer specialType='NoMargin'>
          <SelectionImages
            images={projectData.projectBackgroundImages}
            folder={projectData.id}
          />
        </StyledContainer>

        <div className='h-[25vh]' />
        <StyledContainer specialType='NoMargin'>
          <SectionContent
            id='challenges'
            title='Challenges'
            content={projectData.challenges}
          />
        </StyledContainer>
        <br className='pt-5' />
        <StyledContainer specialType='NoMargin'>
          <SectionContent
            id='proposal'
            title='Proposal'
            content={projectData.proposals}
          />
        </StyledContainer>
        <br className='pt-5' />
        <StyledContainer specialType='NoMargin'>
          <SingleFileImages
            images={projectData.proposalsImages}
            folder={projectData.id}
          />
        </StyledContainer>

        <div className='h-[25vh]' />
        <StyledContainer specialType='NoMargin'>
          <SectionContent
            id='design'
            title='Design'
            content={projectData.designPhase}
          />
        </StyledContainer>
        <br className='pt-5' />
        {
          projectData.designPhaseImages.length > 0 &&
          projectData.designPhaseImages.map((image, index) => (
            <Image
              key={index}
              src={`/static/projects/${projectData.id}/${image}`}
              alt={projectData.id + image}
              width={1920}
              height={1080}
              className='aspect-auto'
            />
          ))
        }

        <div className='h-[25vh]' />
        <StyledContainer specialType='NoMargin'>
          <SectionContent
            id='development'
            title='Development'
            content={projectData.developmentPhase}
          />
        </StyledContainer>
        <br className='pt-5' />
        {
          projectData.developmentPhaseImages.length > 0 &&
          projectData.developmentPhaseImages.map((image, index) => (
            <Image
              key={index}
              src={`/static/projects/${projectData.id}/${image}`}
              alt={projectData.id + image}
              width={1920}
              height={1080}
              className='rounded-xl aspect-auto'
            />
          ))
        }

        <div className='h-[40vh]' />
        <div
          className='text-4xl md:text-2xl font-bold text-center flex flex-row w-full  lg:justify-center md:justify-around items-center gap-2'
        >
          <hr className="w-1/4 " />
          Final Product
          <hr className="w-1/4" />
        </div>
        <br className='pt-5' />
        <StyledContainer specialType='NoMargin'>
          <div className='text-center flex flex-row w-full justify-center items-center gap-2 '>
            <span className='lg:w-3/5 md:w-full'>
              {projectData.final}
            </span>
          </div>
        </StyledContainer>
        {
          projectData.finalPhaseImages.length > 0 &&
          projectData.finalPhaseImages.map((image, index) => (

            <div
              key={index}
              className='flex flex-row justify-center items-center'
            >
              <Image
                src={`/static/projects/${projectData.id}/${image}`}
                alt={projectData.id + image}
                width={1920}
                height={1080}
                className='rounded-xl aspect-auto'
              />
            </div>
          ))
        }

        <div className='h-[25vh]' />
        {projectData.coAuthors && projectData.coAuthors.length > 0 && (
          <div
            className='text-3xl md:text-2xl  font-bold text-center flex flex-row w-full lg:justify-center md:justify-around items-center gap-2'
          >
            <hr className="w-1/4" />
            Collaborators
            <hr className="w-1/4" />
          </div>
        )}
        <CollaboratorsSection
          collaborators={projectData.coAuthors}
        />
      </StyledContainer>
      <div className='h-[30vh]' />
    </div >
  )
}

export default ProjectView