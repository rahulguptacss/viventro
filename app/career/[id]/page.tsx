import fs from 'fs';
import path from 'path';
import CareerDetail from '../../../components/section/CareerDetail/page';
import { EventTemplateData } from '../../../components/types';

export const metadata = {
  title: 'Career Detail | Viventro',
  description: 'View detailed job information and apply to join our team at Viventro.',
};

interface CareerDetailPageProps {
  params: {
    id: string;
  };
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  
  const sections = fullData.categories.Event.templateComponents['template-2'].sections;
  const careerDetailData = sections.CareerDetail?.variants?.CareerDetail1;

  // Ideally, we would fetch data specifically for the job ID
  // For now, we are displaying the sample Event Planner role from data.json

  return (
    <main className="bg-[#f9fafc]">
      {careerDetailData && <CareerDetail data={careerDetailData} />}
    </main>
  );
}
