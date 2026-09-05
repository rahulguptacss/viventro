import fs from 'fs';
import path from 'path';
import PageBanner from "@/components/section/PageBanner/page";
import Contact from "@/components/section/Contact/page";
import { EventTemplateData } from '@/components/types';

export default async function ContactUsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.sections;

  // Use the Contact section data we added to data.json
  const contactData = sections.Contact?.variants?.EventContact1;
  
  // Use the default banner data but override for the contact page
  const baseBannerData = sections.PageBanner?.variants?.EventPageBanner2;
  const pageBannerData = baseBannerData ? {
    ...baseBannerData,
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact-us" }
    ]
  } : undefined;

  return (
    <main>
      {pageBannerData && <PageBanner data={pageBannerData} />}
      {contactData && <Contact data={contactData} />}
    </main>
  );
}
