import fs from 'fs';
import path from 'path';
import Mission from '../../components/section/Mission/page';
import Stats from '../../components/section/Stats/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Our Mission | Viventro',
  description: 'Learn more about Viventro Events & Planners mission and purpose.',
};

const componentMap: Record<string, any> = {
  "MissionVision": Mission,
  "Stats": Stats,
};

export default async function OurMission() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;

  const sections = fullData.categories.Event.templateComponents['template-2'].sections;
  const pages = fullData.categories.Event.templateComponents['template-2'].pages;
  const components = pages['our-mission']?.components || [];

  return (
    <main>
      {components.map((comp, index) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;

        const sectionData = sections[comp.key]?.variants[comp.component];
        if (!sectionData) return null;

        return <Component key={index} data={sectionData} />;
      })}
    </main>
  );
}
