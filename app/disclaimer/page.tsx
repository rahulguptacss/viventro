import fs from 'fs';
import path from 'path';
import PrivacyPolicySection from '../../components/section/PrivacyPolicySection/page';
import { DisclaimerPageData } from '../../components/types';

export const metadata = {
  title: 'Disclaimer | Viventro',
  description: 'Important disclaimer notice from Viventro regarding the accuracy and limitations of the information provided on our website.',
};

export default function DisclaimerPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath);
  const fullData = JSON.parse(fileContents.toString()) as any;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;
  const pageData = sections.DisclaimerPage as DisclaimerPageData;

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
