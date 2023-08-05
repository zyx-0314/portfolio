import React from 'react'
import { FloaterBorder, PopupIcon } from './style'
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
    <div className='w-full'>
      <FloaterBorder className='px-10 w-full'>
        <div className='alignment'>
          <PopupIcon href={ process.env.GITHUB_ACCOUNT } target='_blank' rel='noopener noreferrer'>
            <VscGithub alt='Github Icon' />
          </PopupIcon>
          <PopupIcon href={ process.env.FIGMA_ACCOUNT } target='_blank' rel='noopener noreferrer'>
            <FaFigma alt='Figma Icon' />
          </PopupIcon>
          <PopupIcon href={ process.env.LINKEDIN_ACCOUNT } target='_blank' rel='noopener noreferrer'>
            <AiOutlineLinkedin alt='LinkedIn Icon' />
          </PopupIcon>
          <PopupIcon href='mailto:ramirezian037@gmail.com'>
            <FiMail alt='Email Icon' />
          </PopupIcon>
        </div>

        <div className='alignment'>
          <a href='mailto:ramirezian037@gmail.com'>ramirezian037@gmail.com</a>
        </div>
      </FloaterBorder>
    </div>
  );
}
