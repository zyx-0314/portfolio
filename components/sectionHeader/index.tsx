import React from 'react'
import { SectionHeaderStyles, SectionHeaderNumberStyles, SectionHeaderTitleStyles } from './style'
import PropTypes from 'prop-types';

SectionHeader.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

interface SectionHeaderProps
{
  number: string | number
  title: string
}

/**
 * Renders a section header component with a number and a title.
 * 
 * @param {string} number - The number to be displayed in the section header.
 * @param {string} title - The title to be displayed in the section header.
 * @returns {JSX.Element} The rendered section header component.
 */
export function SectionHeader ( { number, title }: SectionHeaderProps )
{
  return (
    <SectionHeaderStyles>
      <SectionHeaderNumberStyles>
        <div>
          <span>{ number }</span>
        </div>
      </SectionHeaderNumberStyles>
      <SectionHeaderTitleStyles>
        <h2>{ title }</h2>
        <span></span>
      </SectionHeaderTitleStyles>
    </SectionHeaderStyles>
  );
}
