import fs from 'fs';
import path from 'path';
import PageBanner from "@/components/section/PageBanner/page";
import ServiceDetail from "@/components/section/ServiceDetail/page";
import { EventTemplateData, ServiceItem } from '@/components/types';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.sections;

  const servicesData = sections.Services?.variants?.EventServices2;
  const allServices = servicesData?.items || [];
  
  const currentService = allServices.find((s: ServiceItem) => s.id.toString() === resolvedParams.id) || allServices[0];

  return (
    <main>
      {currentService && <ServiceDetail data={currentService} allServices={allServices} />}
    </main>
  );
}
