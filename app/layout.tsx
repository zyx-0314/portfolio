import './globals.css'

import Script from 'next/script'
import { StrictMode } from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({ weight: "500", subsets: ['latin'] })

import { Floaters } from '@/components/ui/floaters'
import { ButtonProps } from '@/components/ui/buttons'
import { StyledHeaderNavigation } from '@/components/ui/headNav'
import Footer from '@/components/ui/footer/page'


export const metadata: Metadata = {
  generator: 'NextJS',
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
  ],
  colorScheme: 'dark',
  publisher: 'Ian Cedric Ramirez',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: './favicon',
    shortcut: './favicon.ico',
    apple: './favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: '45zB7vn-RNN5_tVKbrmX3ype7AiqKp52U7UOU5XkZZw',
    other: {
      me: ['ramirezian037@gmail.com'],
    },
  },
}

/**
 * RootLayout is a React component that serves as a layout wrapper for the entire application.
 * It provides a consistent layout structure for all pages and components within the application.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the RootLayout component.
 * @returns {React.ReactNode} - The HTML structure with the consistent layout for all pages and components.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const addProductJsonLd = () => {
    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Ian Ramirez",
        "jobTitle": "Software Engineer",
        "url": "https://ian-cedric-ramirez.vercel.app/",
        "description": "Passionate software engineer with expertise in crafting innovative solutions.",
        "sameAs": [
          "https://www.linkedin.com/in/ian-cedric-ramirez/",
          "https://github.com/zyx-0314"
        ]
      }`
    }
  }

  // Array of button objects for navigation buttons
  const buttonList: ButtonProps[] = [
    { text: 'About', href: '/#about', type: 'Link-InPage', design: 'Lined' },
    { text: 'Experience', href: '/#experience', type: 'Link-InPage', design: 'Lined' },
    { text: 'Projects', href: '/#projects', type: 'Link-InPage', design: 'Lined' },
    { text: 'Contact', href: '/#contact', type: 'Link-InPage', design: 'Lined' },
    { text: 'Resume', filename: 'Ramirez_Ian_Cedric.pdf', type: 'Download', design: 'PopUp' }
  ];

  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M8ZG88N3RW" />
        <Script
          id="gtag-analytics"
          strategy='afterInteractive'
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8ZG88N3RW', {
              page_path: window.location.pathname,
            });
          ` }
        </Script>
      </head>
      <body className={`${poppins.className} bg-teal-950`}>
        <StrictMode>
          <Floaters />
          <StyledHeaderNavigation buttonList={buttonList} />
          {children}
          <SpeedInsights />
          <Footer />
        </StrictMode>
      </body>
    </html>
  )
}
