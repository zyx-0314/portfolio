import { StyledButton } from "@/components/ui/buttons"
import { CoAuthorData } from "@/types"
import Image from "next/image"

interface CollaboratorsSectionProps {
  collaborators: CoAuthorData[]
}

const CollaboratorsSection = (
  { collaborators }: CollaboratorsSectionProps
) => {
  return (
    <div
      className="w-full flex flex-row items-center justify-center gap-16 md:gap-10 flex-wrap mt-8 z-10 "
    >
      {
        collaborators.map((collaborator, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-between gap-4 p-4 rounded-md w-64 h-96 md:w-54 md:h-80 border-2 border-emerald-800'
          >
            <div className="flex flex-wrap relative h-36 w-36 md:h-24 md:w-24 rounded-full">
              <Image
                alt={collaborator.name}
                src={collaborator.photoLink ? "/static/profiles/" + collaborator.photoLink : `/static/projects/placeholder.png`}
                loader={() => collaborator.photoLink ? "/static/profiles/" + collaborator.photoLink : `/static/projects/placeholder.png`}
                fill
                loading="lazy"
                className="object-fill w-full h-full rounded-full"
              />
            </div>
            <h3 className='text-xl md:text-md font-bold text-center '>
              {collaborator.name}
            </h3>
            <h4 className='text-md md:text-sm text-center font-medium'>
              {collaborator.role}
            </h4>
            <div className="h-2" />
            <StyledButton
              params={{ text: 'View Profile', design: 'PopUp', type: 'Link-NewTab', href: collaborator.link }}
            />
          </div>
        ))
      }

    </div>
  )
}

export default CollaboratorsSection