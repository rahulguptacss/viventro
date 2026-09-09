import fs from 'fs';
import path from 'path';
import UpcomingEvents from "@/components/section/UpcomingEvents/page";
import { EventTemplateData } from '@/components/types';

export default async function EventsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents['template-2'].sections;

  const eventsData = sections.Events?.variants?.EventEvents2;
  

  return (
    <main>
      {eventsData && <UpcomingEvents data={eventsData} theme="light" hideHeaderButton={true} />}
    </main>
  );
}
