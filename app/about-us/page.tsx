import fs from 'fs';
import path from 'path';
import About from '../../components/section/About/page';
import MissionVision from '../../components/section/MissionVision/page';
import Services from '../../components/section/Services/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'About Us | Viventro',
  description: 'Learn more about Viventro Events & Planners.',
};

export default async function AboutUs() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents['template-2'].sections;

  const aboutData = sections.About?.variants?.EventAbout2;
  const missionVisionData = sections.MissionVision?.variants?.EventMissionVision2;
  const servicesData = sections.Services?.variants?.EventServices2;

  return (
    <main>
      {aboutData && <About data={aboutData} />}
      {missionVisionData && <MissionVision data={missionVisionData} />}
      {servicesData && <Services data={servicesData} />}
    </main>
  );
}
