import React from 'react'
import { FloaterBorder, PopupIcon } from './style'
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

export function Floaters ()
{
  return (
    <div className='w-full'>
      <FloaterBorder direction='right' className='px-10 w-full'>
        <div className='alignment'>
          <a href='mailto:ramirezian037@gmail.com'>ramirezian037@gmail.com</a>
        </div>
      </FloaterBorder>
      <FloaterBorder direction='left' className='px-10 w-full'>
        <div className='alignment'>
          <PopupIcon href="https://github.com/zyx-0314">
            <VscGithub style={ { fontSize: 25, } } />
          </PopupIcon>
          <PopupIcon href="https://www.linkedin.com/in/ian-cedric-ramirez/">
            <AiOutlineLinkedin style={ { fontSize: 25 } } />
          </PopupIcon>
          <PopupIcon href="mailto:ramirezian037@gmail.com">
            <FiMail style={ { fontSize: 25 } } />
          </PopupIcon>
        </div>
      </FloaterBorder>
    </div>
  )
}
