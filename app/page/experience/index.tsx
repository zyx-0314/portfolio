import { useState } from 'react'
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

export function ExperienceSection ( { id }: { id: string } )
{
  const [ selected, setSelected ] = useState( 0 )

  const companyListData: ExperienceData[] = [ {
    name: 'Argon Software',
    logo: '/static/companies/Argon_Software.png',
    description: 'Software Service Provider',
    email: 'argonsoftware.info',
    content: [
      "March - June 2023( 4 Months )", "",
      "Software Engineering Intern", "",
      "- Works in actual Front-End Project. ( ReactJS / NextJS )",
      "- Improve website SEO.",
      "- Created Demo Projects with Laravel, React Native, ReactJS.TailWind, Docker, Insomnia and Git( Github )", "",
      "ReactJS / NextJS, TailWind CSS, Laravel, React Native, Docker, Git, Insomnia"
    ]
  },
  ]

  const selectionParams: ButtonProps = {
    text: "",
    design: 'PopUp',
    type: 'Action',
    designControl: { paddingXY: '.5rem 2.5rem', width: '100%' },
  }
  const design = [ "<h1>", "</h1 >" ]
  const companyLink: ButtonProps = {
    text: companyListData[ selected ].email,
    href: `mailto:${ companyListData[ selected ].email }`,
    design: 'Lined',
    type: 'Link',
    designControl: { paddingXY: '0', width: 'fit-content' },
  }

  function handleSelected ( index: number )
  {
    setSelected( index )
  }

  return (
    <StyledContainer id={ id }>
      <SectionHeader number='.02' title='Where I&apos;ve Been So Far?.' />
      <ExperienceContentContainer>
        <ExperienceListContainer>
          <StyledUnorderList>
            { companyListData.map( ( company, index ) => (
              <li key={ index }>
                <StyledButton params={ { ...selectionParams, text: company.name, onClick: () => handleSelected( index ) } } />
              </li>
            ) ) }
          </StyledUnorderList>
        </ExperienceListContainer>
        <ShowCardContainer>
          <StyledShowCard>
            <StyledShowCardHeader>
              <StyledShowCardLogo>
                <Image src={ companyListData[ selected ].logo } width={ 150 } height={ 0 } alt={ companyListData[ selected ].name } />
              </StyledShowCardLogo>
              <ShowCardHeaderContent>
                <h1>{ companyListData[ selected ].name }</h1>
                <h2>{ companyListData[ selected ].description }</h2>
                <div>
                  <StyledButton params={ companyLink } />
                </div>
              </ShowCardHeaderContent>
            </StyledShowCardHeader>
            <ShowCardContent>
              <p>{ design[ 0 ] }</p>
              { companyListData[ selected ].content.map( ( content, index ) => (
                <p key={ index }>&emsp;|&emsp;{ content }</p>
              ) ) }
              <p>{ design[ 1 ] }</p>
            </ShowCardContent>
          </StyledShowCard>
        </ShowCardContainer>
      </ExperienceContentContainer>

    </StyledContainer>
  )
}
