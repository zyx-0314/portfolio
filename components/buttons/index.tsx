import React from 'react'
import { LinedButton, PopButton } from './style'
import Link from 'next/link'
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

StyledButton.propTypes = {
  params: PropTypes.shape( {
    text: PropTypes.string.isRequired,
    design: PropTypes.oneOf( [ 'Lined', 'PopUp' ] ).isRequired,
    type: PropTypes.oneOf( [ 'Link-NewTab', 'Link-InPage', 'Download', 'Action' ] ).isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    filename: PropTypes.string,
    designControl: PropTypes.shape( {
      fontSize: PropTypes.string,
      paddingXY: PropTypes.string,
      width: PropTypes.string,
    } )
  } ).isRequired,
};

export interface ButtonProps
{
  text: string
  design: 'Lined' | 'PopUp'
  type: 'Link-NewTab' | 'Link-InPage' | 'Download' | 'Action'
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

/**
 * Renders a button component with customizable design and behavior based on the input parameters.
 * 
 * @param params - An object containing the button parameters.
 * @returns A button component with customizable design and behavior.
 */
export function StyledButton ( { params: { text, design, type, onClick, href, filename, designControl } }: { params: ButtonProps } )
{
  /**
   * Handles the download functionality when the button is clicked.
   */
  function handleDownload ()
  {
    if ( !filename || !/^[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+$/.test( filename ) )
    {
      console.error( 'Invalid filename' );
      return;
    }
    const filePath = `/${ filename }`;
    saveAs( filePath, filename );
  };

  switch ( type )
  {
    case 'Link-NewTab':
      return (
        <Link href={ href ? href : '/construction' } target='_blank' rel='noopener noreferrer' title={ text }>
          { getStyleSelected( design, text, () => { }, designControl ) }
        </Link>
      )
    case 'Link-InPage':
      return (
        <Link href={ href ? href : '/construction' } title={ text }>
          { getStyleSelected( design, text, () => { }, designControl ) }
        </Link>
      )
    case 'Download':
      return getStyleSelected( design, text, handleDownload, designControl )
    case 'Action':
      return getStyleSelected( design, text, onClick, designControl )
  }
}

function getStyleSelected ( style: 'Lined' | 'PopUp', text: string, onClick?: () => any, designControl?: DesignControl ): JSX.Element
{

  text = text.replaceAll( 'https://', '' ).replace( '/', '' );
  switch ( style )
  {
    case 'Lined':
      return <LinedButton onClick={ onClick } designControl={ designControl }>{ text }<hr /></LinedButton>
    case 'PopUp':
      return <PopButton onClick={ onClick } designControl={ designControl }> { text } </PopButton>
  }
}