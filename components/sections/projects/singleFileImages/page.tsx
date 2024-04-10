import Image from "next/image"

interface BrickImageLibraryProps
{
  images: string[]
  folder: string
}

const SinlgeFileImages = (
  { images, folder }: BrickImageLibraryProps
) =>
{
  return (
    <div className="gap-3 flex flex-col">
      {
        images.map( ( image, index ) => (
          <div
            className="flex gap-8 flex-col aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover w-full items-center"
            key={ index }
          >
            <div
              className="relative w-4/5 md:w-full aspect-video rounded-md"
            >
              <Image
                alt={ 'main' }
                src={
                  images[ 0 ] ?
                    `/static/projects/` + folder + `/` + image :
                    `/static/projects/` + folder + `/placeholder.png`
                }
                fill
                loading="lazy"
                className="object-cover w-full rounded-md"
              />
            </div>
          </div>
        ) ) }
    </div>
  )
}

export default SinlgeFileImages