import fs from 'fs';
import path from 'path';
import Blog from '../../components/section/Blog/page';
import { EventTemplateData } from '../../components/types';

export default function BlogPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;

  const sections = fullData.categories.Event.templateComponents['template-2'].sections;
  const blogData = sections['Blog']?.variants['EventBlog2'];

  if (!blogData) return null;

  return (
    <main>
      <Blog data={blogData} showButton={false} />
    </main>
  );
}
