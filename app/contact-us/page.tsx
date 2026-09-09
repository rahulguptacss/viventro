import fs from 'fs';
import path from 'path';
import Contact from "@/components/section/Contact/page";
import { EventTemplateData } from '@/components/types';

export default async function ContactUsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  const sections = fullData.categories.Event.templateComponents["template-2"].sections;

  // Use the Contact section data we added to data.json
  const contactData = sections.Contact?.variants?.EventContact1;
  

  return (
    <main>
      {contactData && <Contact data={contactData} />}
    </main>
  );
}
