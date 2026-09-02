import fs from 'fs';
import path from 'path';
import PageBanner from "@/components/section/PageBanner/page";
import ServicesPageSection from "@/components/section/ServicesPage/page";
import { EventTemplateData } from '@/components/types';

export default async function ServicesPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.sections;

  const servicesData = sections.Services?.variants?.EventServices2;
  
  // Use the default banner data but override for the services page
  const baseBannerData = sections.PageBanner?.variants?.EventPageBanner2;
  const pageBannerData = baseBannerData ? {
    ...baseBannerData,
    title: "Services",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" }
    ]
  } : undefined;

  return (
    <main>
      {pageBannerData && <PageBanner data={pageBannerData} />}
      {servicesData && <ServicesPageSection data={servicesData} />}
    </main>
  );
}
