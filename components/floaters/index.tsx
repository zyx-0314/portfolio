import React from 'react'
import { FloaterBorder, FloaterContainer, PopupIcon } from './style'
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

/**
 * Renders a fixed-positioned bar at the bottom of a webpage, containing links to the developer's social media accounts and email address.
 * The purpose of this function is to provide easy access to the developer's contact information for users of the webpage.
 * 
 * @returns JSX element representing the fixed-positioned bar with social media links and email address.
 */
export function Floaters ()
{
  return (
    <FloaterContainer>
      <FloaterBorder className='px-10 w-full'>
        <div className='alignment'>
          <PopupIcon href='https://github.com/zyx-0314' target='_blank' rel='noopener noreferrer' title='Github Account'>
            <VscGithub alt='Github Icon' />
          </PopupIcon>
          <PopupIcon href='https://www.figma.com/@nyebecreations' target='_blank' rel='noopener noreferrer' title='Figma Account'>
            <FaFigma alt='Figma Icon' />
          </PopupIcon>
          <PopupIcon href='https://www.linkedin.com/in/ian-cedric-ramirez/' target='_blank' rel='noopener noreferrer' title='LinkedIn Account'>
            <AiOutlineLinkedin alt='LinkedIn Icon' />
          </PopupIcon>
          <PopupIcon href='mailto:ramirezian037@gmail.com' title='Email my Account'>
            <FiMail alt='Email Icon' />
          </PopupIcon>
        </div>

        <div className='alignment'>
          <a href='mailto:ramirezian037@gmail.com' title='Email my Account'>ramirezian037@gmail.com</a>
        </div>
      </FloaterBorder>
    </FloaterContainer>
  );
}
