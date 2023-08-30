import React from 'react'
import PropTypes from 'prop-types';

import { ContentBody } from './style'

StyledParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  textAlignment: PropTypes.oneOf( [ 'left', 'center', 'right', 'justify' ] ),
};

interface Props
{
  children: React.ReactNode
  textAlignment?: 'left' | 'center' | 'right' | 'justify'
}

/**
 * Renders a styled paragraph component with customizable text alignment and children content.
 * 
 * @param children - The content of the paragraph.
 * @param textAlignment - The desired text alignment of the paragraph. Defaults to 'justify'.
 * @returns A styled paragraph component.
 */
export function StyledParagraph ( { children, textAlignment = 'justify' }: Props )
{
  return (
    <ContentBody textAlignment={ textAlignment }>{ children }</ContentBody>
  );
}
