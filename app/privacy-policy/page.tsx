import fs from 'fs';
import path from 'path';
import PageBanner from '../../components/section/PageBanner/page';
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
  const pageData = fullData.PrivacyPolicyPage as PrivacyPolicyPageData;

  // Map breadcrumb from data.json format to PageBanner format
  const bannerData = {
    title: pageData.pageBanner.title,
    breadcrumbs: pageData.pageBanner.breadcrumbs,
    backgroundImage: pageData.pageBanner.backgroundImage,
  };

  return (
    <main className="bg-white">
      <PageBanner data={bannerData} />
      <PrivacyPolicySection data={pageData} />
    </main>
  );
}
