import fs from 'fs';
import path from 'path';
import AwardsAbout from '../../components/section/AwardsAbout/page';
import AwardsStats from '../../components/section/AwardsStats/page';
import AwardsCertificates from '../../components/section/AwardsCertificates/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Awards & Certificate | Viventro',
  description: 'Learn more about Viventro Events & Planners awards and certificates.',
};

const componentMap: Record<string, any> = {
  "AwardsAbout": AwardsAbout,
  "AwardsStats": AwardsStats,
  "AwardsCertificates": AwardsCertificates,
};

export default async function Awards() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  
  const sections = fullData.categories.Event.sections;
  const pages = fullData.categories.Event.templateComponents['template-2'].pages;
  const components = pages['awards']?.components || [];

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
