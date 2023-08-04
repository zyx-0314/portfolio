import React from 'react'
import { LinedButton, PopButton } from './style'
import Link from 'next/link'

export interface ButtonProps
{
  text: string
  design: 'Lined' | 'PopUp'
  type: 'Link' | 'Download' | 'Action'
  onClick?: () => any | ( ( ...args: any[] ) => any );
  href?: string
  filename?: string
  designControl?: DesignControl
}

export interface DesignControl
{
  fontSize?: string
  paddingXY?: string
  width?: string
}

export function StyledButton (
  { params: { text, design, type, onClick, href, filename, designControl } }: { params: ButtonProps }
)
{
  const handleDownload = () =>
  {
    const filePath = `/${ filename }`;
    const link = document.createElement( "a" );
    link.href = filePath;
    link.download = filename ? filename : '';
    document.body.appendChild( link );
    link.click();
    document.body.removeChild( link );
  };

  switch ( type )
  {
    case 'Link':
      return (
        <Link href={ href ? href : '/construction' }>
          { StyleSelected( design, text, () => { }, designControl ) }
        </Link>
      )
    case 'Download':
      return StyleSelected( design, text, handleDownload, designControl )
    case 'Action':
      return StyleSelected( design, text, onClick, designControl )
  }
}

function StyleSelected ( style: 'Lined' | 'PopUp', text: string, onClick?: () => any, designControl?: DesignControl ): JSX.Element
{
  switch ( style )
  {
    case 'Lined':
      return <LinedButton onClick={ onClick } designControl={ designControl }>
        { text }
        <hr />
      </LinedButton>
    case 'PopUp':
      return <PopButton onClick={ onClick } designControl={ designControl }> { text } </PopButton>
  }
}