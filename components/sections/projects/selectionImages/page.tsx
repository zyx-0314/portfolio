'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

interface SelectionImageProps
{
  images: string[]
  folder: string
}

const SelectionImage = (
  { images, folder }: SelectionImageProps
) =>
{
  const [ imageDisplay, setImageDisplay ] = useState( 0 )

  useEffect( () =>
  {
    const timer = setTimeout( () =>
    {
      setImageDisplay( ( imageDisplay + 1 ) % images.length )
    }, 10000 )
    return () => clearTimeout( timer )
  }, [ imageDisplay ] )

  return (
    <div className="gap-3 flex flex-col">
      <div className="gap-8 aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover w-full flex justify-center">
        <div
          className="relative w-4/5 md:w-full bg-white aspect-video rounded-md"
        >
          <Image
            alt={ 'main' }
            src={
              images[ 0 ] ?
                `/static/projects/` + folder + `/` + images[ imageDisplay ] :
                `/static/projects/` + folder + `/placeholder.png`
            }
            fill
            loading="lazy"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-3 w-4/5 md:w-full">
          { images.map( ( image, index ) => (
            <div
              key={ index }
              className={ `relative w-[12rem] md:w-[7rem] sm:w-[5rem] rounded-md  aspect-video border-2 bg-gray-100 cursor-pointer
            ${ imageDisplay === index
                  ? 'border-green-700'
                  : 'border-transparent' }` }
              onClick={ () => setImageDisplay( index ) }
            >
              <Image
                alt={ image }
                src={
                  `/static/projects/` + folder + `/` + image
                }
                fill
                loading="lazy"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ) ) }
        </div>
      </div>
    </div>
  )
}

export default SelectionImage