import fs from 'fs';
import path from 'path';
import Services from "@/components/section/Services/page";
import Stats from "@/components/section/Stats/page";
import { EventTemplateData } from '@/components/types';

export default async function ServicesPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents['template-2'].sections;

  const servicesData = sections.Services?.variants?.EventServices2;
  const statsData = sections.Stats?.variants?.EventStats2;
  

  return (
    <main>
      {servicesData && <Services data={servicesData} theme="light" />}
      {statsData && <Stats data={statsData} />}
    </main>
  );
}
