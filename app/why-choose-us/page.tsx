import fs from 'fs';
import path from 'path';
import WhyChooseUsDetail from "@/components/section/WhyChooseUsDetail/page";
import { EventTemplateData } from '@/components/types';

export default async function WhyChooseUsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents['template-2'].sections;

  // Since we haven't added this page specifically to the pages mapping,
  const detailData = sections.WhyChooseUsDetail?.variants?.EventWhyChooseUsDetail;

  return (
    <main>
      {detailData && <WhyChooseUsDetail data={detailData} />}
    </main>
  );
}
