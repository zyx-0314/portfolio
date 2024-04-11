import React from 'react'

const Footer = () =>
{
  return (
    <footer className='flex w-full justify-center pt-5 mt-5 text-xs pb-3'>
      Nyebe Creations - { new Date().getFullYear() } - v.1.0.8
    </footer>
  )
}

export default Footer