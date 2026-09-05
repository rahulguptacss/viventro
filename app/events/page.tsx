import fs from 'fs';
import path from 'path';
import PageBanner from "@/components/section/PageBanner/page";
import UpcomingEvents from "@/components/section/UpcomingEvents/page";
import { EventTemplateData } from '@/components/types';

export default async function EventsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.sections;

  const eventsData = sections.Events?.variants?.EventEvents2;
  
  // Use the default banner data but override for the events page
  const baseBannerData = sections.PageBanner?.variants?.EventPageBanner2;
  const pageBannerData = baseBannerData ? {
    ...baseBannerData,
    title: "Events",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Events", href: "/events" }
    ]
  } : undefined;

  return (
    <main>
      {pageBannerData && <PageBanner data={pageBannerData} />}
      {eventsData && <UpcomingEvents data={eventsData} theme="light" hideHeaderButton={true} />}
    </main>
  );
}
