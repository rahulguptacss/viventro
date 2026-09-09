import fs from 'fs';
import path from 'path';
import PrivacyPolicySection from '../../components/section/PrivacyPolicySection/page';
import { PrivacyPolicyPageData } from '../../components/types';

export const metadata = {
  title: 'Privacy Policy | Viventro',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as any;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;
  const pageData = sections.PrivacyPolicyPage as PrivacyPolicyPageData;

  // Map breadcrumb from data.json format to PageBanner format
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
