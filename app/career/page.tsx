import fs from 'fs';
import path from 'path';
import CareerHero from '../../components/section/CareerHero/page';
import CareerJobs from '../../components/section/CareerJobs/page';
import { EventTemplateData } from '../../components/types';

export const metadata = {
  title: 'Career | Viventro',
  description: 'Join our team and build a meaningful career with Viventro.',
};

export default function CareerPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  
  const sections = fullData.categories.Event.templateComponents['template-2'].sections;
  const careerHeroData = sections.CareerHero?.variants?.CareerHero1;
  const careerJobsData = sections.CareerJobs?.variants?.CareerJobs1;

  return (
    <main className="bg-[#f9fafc]">
      {careerHeroData && <CareerHero data={careerHeroData} />}
      {careerJobsData && <CareerJobs data={careerJobsData} />}
    </main>
  );
}
