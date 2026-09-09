import fs from 'fs';
import path from 'path';
import PrivacyPolicySection from '../../components/section/PrivacyPolicySection/page';
import { RefundPolicyPageData } from '../../components/types';

export const metadata = {
  title: 'Refund & Cancellation Policy | Viventro',
  description: 'Read Viventro\'s refund and cancellation policy to understand your rights and our commitment to fair and transparent service.',
};

export default function RefundPolicyPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as any;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;
  const pageData = sections.RefundPolicyPage as RefundPolicyPageData;

  const bannerData = {
    title: pageData.pageBanner.title,
    breadcrumbs: pageData.pageBanner.breadcrumbs,
    backgroundImage: pageData.pageBanner.backgroundImage,
  };

  return (
    <main className="bg-white">      <PrivacyPolicySection data={pageData} />
    </main>
  );
}
