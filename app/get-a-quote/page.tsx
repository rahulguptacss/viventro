import fs from 'fs';
import path from 'path';
import GetQuoteSection from '../../components/section/GetQuoteSection/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Get A Quote | Viventro',
  description: 'Share your event details with us and get a customized proposal.',
};

export default async function GetQuote() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as any;
  const template2 = fullData.categories?.Event?.templateComponents?.['template-2'];
  const sections = template2?.sections ?? fullData;
  const pageData = sections.GetQuotePage ?? fullData.GetQuotePage;

  return (
    <main className="bg-[#f9fafc]">
      {pageData && <GetQuoteSection data={pageData} />}
    </main>
  );
}
