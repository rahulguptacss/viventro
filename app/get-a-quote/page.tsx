import fs from 'fs';
import path from 'path';
import PageBanner from '../../components/section/PageBanner/page';
import GetQuoteSection from '../../components/section/GetQuoteSection/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Get A Quote | Viventro',
  description: 'Share your event details with us and get a customized proposal.',
};

export default async function GetQuote() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as EventTemplateData;
  const pageData = (fullData as any).GetQuotePage;

  return (
    <main className="bg-[#f9fafc]">
      {pageData?.pageBanner && <PageBanner data={pageData.pageBanner} />}
      {pageData && <GetQuoteSection data={pageData} />}
    </main>
  );
}
