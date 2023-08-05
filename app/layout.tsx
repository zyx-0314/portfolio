import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins( { weight: "500", subsets: [ 'latin' ] } )

export const metadata: Metadata = {
  title: 'Ian Cedric Ramirez',
  description: 'Portfolio of Ian Cedric Ramirez, a software engineer.',
}

/**
 * RootLayout is a React component that serves as a layout wrapper for the entire application.
 * It provides a consistent layout structure for all pages and components within the application.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the RootLayout component.
 * @returns {React.ReactNode} - The HTML structure with the consistent layout for all pages and components.
 */
export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode
} )
{
  return (
    <html lang="en">
      <body className={ `${ poppins.className } bg-slate-900` }>{ children }</body>
    </html>
  )
}
