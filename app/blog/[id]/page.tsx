import fs from 'fs';
import path from 'path';
import BlogDetail from '../../../components/section/BlogDetail/page';
import { EventTemplateData } from '../../../components/types';
import { notFound } from 'next/navigation';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;

  const blogSection = fullData.categories.Event.templateComponents['template-2'].sections['Blog']?.variants['EventBlog2'];

  if (!blogSection) return notFound();

  const { id } = await params;
  const postId = parseInt(id, 10);
  const post = blogSection.items.find((item: any) => item.id === postId);

  if (!post) return notFound();

  // Sort by ID descending to simulate "recent" or just take top 3
  const recentPosts = [...blogSection.items].filter((item: any) => item.id !== postId).slice(0, 3);

  return (
    <main>
      <BlogDetail post={post} sidebar={blogSection.sidebar} recentPosts={recentPosts} />
    </main>
  );
}
