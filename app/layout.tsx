import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins( { weight: "500", subsets: [ 'latin' ] } )


export const metadata: Metadata = {
  title: 'Ian Cedric Ramirez',
  description: 'Portfolio of Ian Cedric Ramirez, a software engineer.',
}

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
