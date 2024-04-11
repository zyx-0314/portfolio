// props must accept 2 div
interface Props
{
  headerTag: string
  headerContent: string
  isMain?: boolean
  className?: string
}

const HeroHeader = (
  { headerTag, headerContent, isMain, className }: Props
) =>
{
  return (
    <div className={ className }>
      <div
        className='text-xl font-extralight opacity-70'
      >
        { headerTag }
      </div>
      <div
        className={ `${ isMain
          ? 'text-5xl md:text-3xl'
          : 'text-xl'
          } font-bold leading-normal` }
      >
        { headerContent }
      </div>
    </div>
  )
}

export default HeroHeader

