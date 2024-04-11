interface FeaturesSectionProps
{
  id: string
  content: string
  title: string
}

const SectionContent = (
  { id, content, title }: FeaturesSectionProps
) =>
{
  return (
    <div className="flex w-full justify-center items-start" id={ id }>
      <div className="flex gap-3 lg:w-[90vh]">
        <div
          className="h-fit text-xl font-light w-2/5 text-gray-500 flex flex-row items-center gap-3"
        >
          <hr className="w-1/4" />
          { title }
        </div>
        <div
          className="w-3/5 flex flex-col "
        >
          { content }
        </div>
      </div>
    </div>
  )
}

export default SectionContent