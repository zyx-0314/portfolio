import HomeView from "@/components/sections/landing/homeView";
import { getAppContents } from "@/content/_app-content";
import { getProjectContents } from "@/content/_project-content";

/**
 * Renders the home page of the website.
 *
 * @returns The main layout of the home page, including the header, footer, and main content.
 */
export default async function Home ()
{
  const appContent = await getAppContents();
  const projectData = await getProjectContents();

  const experienceData = appContent.experience;

  return (
    <>
      <HomeView
        experienceData={ experienceData }
        projectData={ projectData }
      />
    </>
  );
}


