import React from 'react'
import { LinedButton, PopButton } from './style'
import Link from 'next/link'

export interface ButtonProps
{
  text: string
  type: string
  onClick?: () => void
  className?: string
  href?: string
  filename?: string
}

export function StyledButton (
  { params: { text, type, onClick, className, href, filename } }: { params: ButtonProps }
)
{


  switch ( type )
  {
    case 'link':
      return <LinedButton className={ className } >
        <a href={ href ? href : '/construction' }>{ text }</a>
        <hr />
      </LinedButton>

    case 'download':
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

      return <PopButton className={ className } onClick={ handleDownload }> { text } </PopButton>

    case 'button-link':
      return <PopButton className={ className } onClick={ onClick }>
        <Link href={ href ? href : '/construction' }>{ text }</Link>
      </PopButton>

  }



  return <p>This are the possible options 'button-link' | 'button-action' | 'submit' | 'reset' | 'link' | 'download'</p>
}
