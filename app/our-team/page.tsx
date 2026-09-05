import fs from 'fs';
import path from 'path';
import TeamPageGrid from '../../components/section/TeamPageGrid/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Our Team | Viventro',
  description: 'Meet the passionate team behind your perfect events.',
};

const componentMap: Record<string, any> = {
  "TeamPageGrid": TeamPageGrid,
};

export default async function OurTeam() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;

  const sections = fullData.categories.Event.sections;
  const pages = fullData.categories.Event.templateComponents['template-2'].pages;
  const components = pages['our-team']?.components || [];

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
