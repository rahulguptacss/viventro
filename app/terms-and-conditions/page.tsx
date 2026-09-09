import fs from 'fs';
import path from 'path';
import PrivacyPolicySection from '../../components/section/PrivacyPolicySection/page';
import { TermsPageData } from '../../components/types';

export const metadata = {
  title: 'Terms & Conditions | Viventro',
  description: 'Read Viventro\'s Terms & Conditions to understand the legal agreement between you and our event management company.',
};

export default function TermsAndConditionsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as any;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;
  const pageData = sections.TermsPage as TermsPageData;

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
