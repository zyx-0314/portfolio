'use client'

import Image from 'next/image'
import { useReducer } from 'react';

import {
StyledShowCard,
ShowCardContent,
StyledUnorderList,
ShowCardContainer,
StyledShowCardLogo,
StyledShowCardHeader,
ShowCardHeaderContent,
ExperienceListContainer,
ExperienceContentContainer,
} from './style'

import { ExperienceData } from '@/types';
import { StyledContainer } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/sectionHeader'
import AnimationContainer from '@/components/ui/animations/page';
import { ButtonProps, StyledButton } from '@/components/ui/buttons'




/**
 * Renders a section displaying a list of companies and their details based on the user's selection.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the section.
 * @returns {JSX.Element} The rendered section.
 */
export default function ExperienceSection({ id, companyListData }: { id: string, companyListData: ExperienceData[] }) {
  const initialState = { selected: 0 };


  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'SELECT':
        return { selected: action.payload };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const selectionParams: ButtonProps = {
    text: '',
    design: 'PopUp',
    type: 'Action',
    designControl: { paddingXY: '.5rem 2.5rem', width: '100%' },
  };

  const design = ['<h1>', '</h1 >'];

  const companyLink: ButtonProps = {
    text: companyListData[state.selected].email,
    href: `${companyListData[state.selected].email}`,
    design: 'Lined',
    type: 'Link-NewTab',
    designControl: { paddingXY: '0', width: 'fit-content' },
  };

  function handleSelected(index: number) {
    dispatch({ type: 'SELECT', payload: index });
  }

  return (
    <AnimationContainer animation='Fade In Top' duration={1}>
      <StyledContainer id={id}>
        <SectionHeader number=".02" title="Where I've Been So Far?." />
        <ExperienceContentContainer>
          <ExperienceListContainer>
            <StyledUnorderList>
              {companyListData.map((company, index) => (
                <li key={`${company.name}-${index}`}>
                  <StyledButton
                    params={{
                      ...selectionParams,
                      text: company.name,
                      onClick: () => handleSelected(index),
                    }}
                  />
                </li>
              ))}
            </StyledUnorderList>
          </ExperienceListContainer>
          <ShowCardContainer>
            <StyledShowCard>
              <StyledShowCardHeader>
                <StyledShowCardLogo>
                  <Image
                    src={companyListData[state.selected].logo}
                    width={150}
                    height={0}
                    alt={companyListData[state.selected].name}
                    className=''
                  />
                </StyledShowCardLogo>
                <ShowCardHeaderContent>
                  <h2>{companyListData[state.selected].name}</h2>
                  <h3>{companyListData[state.selected].description}</h3>
                  <div>
                    <StyledButton params={companyLink} />
                  </div>
                </ShowCardHeaderContent>
              </StyledShowCardHeader>
              <ShowCardContent>
                <p>{design[0]}</p>
                {companyListData[state.selected].content.map((content, index) => (
                  <p key={index}>&emsp;|&emsp;{content}</p>
                ))}
                <p>{design[1]}</p>
              </ShowCardContent>
            </StyledShowCard>
          </ShowCardContainer>
        </ExperienceContentContainer>
      </StyledContainer>
    </AnimationContainer>
  );
}
