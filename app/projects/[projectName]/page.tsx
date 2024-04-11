import Error404 from "@/components/sections/errors/_404";
import ProjectView from "@/components/sections/projects/projectView";
import { getProjectContents } from "@/content/_project-content";

export async function generateStaticParams ()
{
  const projectsData = await getProjectContents();

  return projectsData.map( ( project ) =>
  {
    return {
      params: {
        projectName: project.id
      }
    }
  } )

}

interface Props
{
  params: {
    projectName: string
  }
}

export default async function ProjectsPage (
  { params: { projectName } }: Props
)
{
  const projectsData = await getProjectContents();

  const singleProjectData = projectsData.find(
    ( project ) => project.id === projectName
  );

  if ( !singleProjectData ) return <Error404 />;

  return (
    <>
      <ProjectView
        projectData={ singleProjectData }
      />
    </>
  )
}
