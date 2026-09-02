import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import TeamDetail from '../../../components/section/TeamDetail/page';
import { EventTemplateData } from '../../../components/types';

export const metadata = {
  title: 'Team Detail | Viventro',
  description: 'Learn more about our team members.',
};

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  
  const teamSection = fullData.categories.Event.sections.TeamPageGrid?.variants.EventTeamPageGrid;
  
  if (!teamSection) {
    return notFound();
  }

  const member = teamSection.members.find((m: any) => m.id.toString() === resolvedParams.id);
  
  if (!member) {
    return notFound();
  }

  return (
    <main>
      <TeamDetail data={member} />
    </main>
  );
}
