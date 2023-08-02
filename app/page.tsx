'use client'
import { Floaters } from '@/components/floaters'
import { HeaderNavigation } from '@/components/headNav'

export default function Home ()
{
  return (
    <>
      <Floaters />
      <div className='px-10 pt-5'>
        <HeaderNavigation />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
        <footer></footer>
      </div>
    </>
  )
}
