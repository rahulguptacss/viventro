import fs from 'fs';
import path from 'path';
import FAQSection from "../../components/section/FAQ/page";

export default function FAQPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as any;
  const template2 = fullData.categories?.Event?.templateComponents?.['template-2'];
  const sections = template2?.sections ?? fullData;
  const pageData = sections.FAQPage ?? fullData.FAQPage;

  return (
    <main>
      <FAQSection data={pageData} />
    </main>
  );
}
