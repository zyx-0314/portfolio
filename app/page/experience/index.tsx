import React, { useReducer } from 'react';
import { useCallback, useState } from 'react'
import { SectionHeader } from '@/components/sectionHeader'
import { StyledContainer } from '@/components/container'
import { ButtonProps, StyledButton } from '@/components/buttons'
import Image from 'next/image'
import { ExperienceContentContainer, ExperienceListContainer, ShowCardContainer, ShowCardContent, ShowCardHeaderContent, StyledShowCard, StyledShowCardHeader, StyledShowCardLogo, StyledUnorderList } from './style'

interface ExperienceData
{
  name: string
  logo: string
  description: string
  email: string
  content: string[]
}

/**
 * Renders a section displaying a list of companies and their details based on the user's selection.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the section.
 * @returns {JSX.Element} The rendered section.
 */
export default function ExperienceSection ( { id }: { id: string } )
{
  const initialState = { selected: 0 };

  function reducer ( state: any, action: any )
  {
    switch ( action.type )
    {
      case 'SELECT':
        return { selected: action.payload };
      default:
        throw new Error();
    }
  }

  const [ state, dispatch ] = useReducer( reducer, initialState );

  const companyListData: ExperienceData[] = [
    {
      name: 'Argon Software',
      logo: '/static/companies/Argon_Software.png',
      description: 'Software Service Provider',
      email: 'argonsoftware.info',
      content: [
        'March - June 2023( 4 Months )',
        '',
        'Software Engineering Intern',
        '',
        '- Works in actual Front-End Project. ( ReactJS / NextJS )',
        '- Improve website SEO.',
        '- Created Demo Projects with Laravel, React Native, ReactJS.TailWind, Docker, Insomnia and Git( Github )',
        '',
        'ReactJS / NextJS, TailWind CSS, Laravel, React Native, Docker, Git, Insomnia',
      ],
    },
  ];

  const selectionParams: ButtonProps = {
    text: '',
    design: 'PopUp',
    type: 'Action',
    designControl: { paddingXY: '.5rem 2.5rem', width: '100%' },
  };
  const design = [ '<h1>', '</h1 >' ];
  const companyLink: ButtonProps = {
    text: companyListData[ state.selected ].email,
    href: `mailto:${ companyListData[ state.selected ].email }`,
    design: 'Lined',
    type: 'Link',
    designControl: { paddingXY: '0', width: 'fit-content' },
  };

  function handleSelected ( index: number )
  {
    dispatch( { type: 'SELECT', payload: index } );
  }

  return (
    <StyledContainer id={ id }>
      <SectionHeader number=".02" title="Where I've Been So Far?." />
      <ExperienceContentContainer>
        <ExperienceListContainer>
          <StyledUnorderList>
            { companyListData.map( ( company, index ) => (
              <li key={ `${ company.name }-${ index }` }>
                <StyledButton
                  params={ {
                    ...selectionParams,
                    text: company.name,
                    onClick: useCallback( () => handleSelected( index ), [ index ] ),
                  } }
                />
              </li>
            ) ) }
          </StyledUnorderList>
        </ExperienceListContainer>
        <ShowCardContainer>
          <StyledShowCard>
            <StyledShowCardHeader>
              <StyledShowCardLogo>
                <Image
                  src={ companyListData[ state.selected ].logo }
                  width={ 150 }
                  height={ 0 }
                  alt={ companyListData[ state.selected ].name }
                />
              </StyledShowCardLogo>
              <ShowCardHeaderContent>
                <h1>{ companyListData[ state.selected ].name }</h1>
                <h2>{ companyListData[ state.selected ].description }</h2>
                <div>
                  <StyledButton params={ companyLink } />
                </div>
              </ShowCardHeaderContent>
            </StyledShowCardHeader>
            <ShowCardContent>
              <p>{ design[ 0 ] }</p>
              { companyListData[ state.selected ].content.map( ( content, index ) => (
                <p key={ index }>&emsp;|&emsp;{ content }</p>
              ) ) }
              <p>{ design[ 1 ] }</p>
            </ShowCardContent>
          </StyledShowCard>
        </ShowCardContainer>
      </ExperienceContentContainer>
    </StyledContainer>
  );
}
