import fs from 'fs';
import path from 'path';
import PageBanner from "@/components/section/PageBanner/page";
import WhyChooseUsDetail from "@/components/section/WhyChooseUsDetail/page";
import { EventTemplateData } from '@/components/types';

export default async function WhyChooseUsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.sections;

  // Since we haven't added this page specifically to the pages mapping,
  const detailData = sections.WhyChooseUsDetail?.variants?.EventWhyChooseUsDetail;
  const pageBannerData = sections.PageBanner?.variants?.EventPageBannerWhyChooseUs;

  return (
    <main>
      <PageBanner data={pageBannerData} />
      {detailData && <WhyChooseUsDetail data={detailData} />}
    </main>
  );
}
