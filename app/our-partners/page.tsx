import fs from 'fs';
import path from 'path';
import OurPartnersSection from "../../components/section/OurPartnersSection/page";
import { EventTemplateData, OurPartnersPageData } from '@/components/types';

export default async function OurPartnersPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;

  const pageData = sections.OurPartnersPage as unknown as OurPartnersPageData;

  return (
    <main>
      {pageData && <OurPartnersSection data={pageData} />}
    </main>
  );
}
