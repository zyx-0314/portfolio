import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

const poppins = Poppins( { weight: "500", subsets: [ 'latin' ] } )

export const metadata: Metadata = {
  title: 'Ian Cedric Ramirez, Software Engineer - Unlocking Innovation with Code',
  description: 'Portfolio of Ian Cedric Ramirez, a software engineer.',
  keywords: [
    'Ramirez',
    'Cedric',
    'Zyx',
    'Ian',
    'Software',
    'Engineer',
    'Front-end',
    'Back-end',
    'Developer',
    'Full-stack',
    'Laravel',
    'React',
    'ReactJS',
    'React.js',
    'Next',
    'NextJS',
    'Next.js',
    'JS',
    'JavaScript',
    'TypeScript',
    'TS',
    'HTML',
    'CSS',
    'SCSS',
    'SASS',
    'Tailwind',
    'TailwindCSS',
    'Tailwind.css',
    'TailwindUI',
    'Tailwind UI',
    'TailwindUi',
    'Bootstrap',
    'Kotlin',
    'C++',
    'C#',
    'Python',
    'React Native',
    'ReactNative',
  ]
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
      <head>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M8ZG88N3RW" /> */ }
        <Script
          id="gtag-analytics"
          strategy='afterInteractive'
        >
          { `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8ZG88N3RW', {
              page_path: window.location.pathname,
            });
          ` }
        </Script>
        <link rel="icon" href="favicon.ico" type='image/x-icon' />
        <meta name="google-site-verification" content="45zB7vn-RNN5_tVKbrmX3ype7AiqKp52U7UOU5XkZZw" />
      </head>
      <body className={ `${ poppins.className } bg-slate-900` }>{ children }</body>
    </html>
  )
}
