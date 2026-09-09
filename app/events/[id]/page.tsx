import fs from 'fs';
import path from 'path';
import EventDetail from "@/components/section/EventDetail/page";
import { EventTemplateData, EventItem } from '@/components/types';

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;

  const eventsData = sections.Events?.variants?.EventEvents2;
  const allEvents = eventsData?.items || [];
  
  const currentEvent = allEvents.find((s: EventItem) => s.id.toString() === resolvedParams.id) || allEvents[0];


  return (
    <main>
      {currentEvent && <EventDetail data={currentEvent} />}
    </main>
  );
}
