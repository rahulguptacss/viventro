import fs from 'fs';
import path from 'path';
import TestimonialsPageGrid from '../../components/section/TestimonialsPageGrid/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Testimonials | Viventro',
  description: 'Stories of happiness from our amazing clients.',
};

const componentMap: Record<string, any> = {
  "TestimonialsPageGrid": TestimonialsPageGrid,
};

export default async function TestimonialsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;

  const sections = fullData.categories.Event.templateComponents['template-2'].sections;
  const pages = fullData.categories.Event.templateComponents['template-2'].pages;
  const components = pages['testimonials']?.components || [];

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
