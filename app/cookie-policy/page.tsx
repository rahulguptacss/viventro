import fs from 'fs';
import path from 'path';
import PrivacyPolicySection from '../../components/section/PrivacyPolicySection/page';
import { CookiePolicyPageData } from '../../components/types';

export const metadata = {
  title: 'Cookie Policy | Viventro',
  description: 'Learn about how Viventro uses cookies to improve your browsing experience and how you can control your cookie preferences.',
};

export default function CookiePolicyPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as any;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;
  const pageData = sections.CookiePolicyPage as CookiePolicyPageData;

  const bannerData = {
    title: pageData.pageBanner.title,
    breadcrumbs: pageData.pageBanner.breadcrumbs,
    backgroundImage: pageData.pageBanner.backgroundImage,
  };

  return (
    <main className="bg-white">
      <PrivacyPolicySection data={pageData} />
    </main>
  );
}
