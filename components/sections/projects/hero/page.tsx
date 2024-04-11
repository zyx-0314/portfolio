import { StyledContainer } from "@/components/ui/container"
import { FullProjectData } from "@/types"
import Image from "next/image"
import { ProjectHeroContainer } from "../style"
import HeroHeader from "@/components/ui/hero-header"

interface Props {
  ProjectData: {
    title: string
    type: string
    responsibility: string
    association: string
    wallpaper: string
    description: string
  }
  folder: string
}

const HeroSection = (
  { ProjectData, folder }: Props
) => {
  ProjectData.wallpaper = ProjectData.wallpaper ? ProjectData.wallpaper : 'placeholder.webp'

  return (
    <div className='lg:h-[70vh] md:h-[55vh] relative w-full'>
      <Image
        alt={'ProjectData.title'}
        src={
          `/static/projects/${folder}/${ProjectData.wallpaper
            ? `${ProjectData.wallpaper}`
            : 'placeholder.webp'}`
        }
        fill
        loading="lazy"
        className='aspect-video w-full opacity-80 object-cover'
      />
      <StyledContainer specialType='NoMargin' className="items-center">
        <div className="flex items-center justify-center">
          <ProjectHeroContainer
            className='items-center relative min-h-[70vh] flex justify-center lg:w-[90vh]'
          >
            <div className="bg-black/70 rounded-lg p-5 relative text-white flex flex-col gap-5 lg:w-full md:w-[85%]">
              <HeroHeader
                headerTag={ProjectData.type}
                headerContent={ProjectData.title}
                isMain
              />
              <br />
              <div className="flex gap-5">
                <HeroHeader
                  headerTag='Responsibility'
                  headerContent={ProjectData.responsibility}
                  className='text-2xl flex flex-col justify-between w-full'

                />
                <HeroHeader
                  headerTag='Association'
                  headerContent={ProjectData.association}
                  className='text-2xl flex flex-col w-full'
                />
              </div>
              <div className="text-center mt-5">
                {ProjectData.description}
              </div>
            </div>
          </ProjectHeroContainer>
        </div>
      </StyledContainer>
    </div>
  )
}

export default HeroSection