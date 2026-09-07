import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import PageBanner from '../../components/section/PageBanner/page';
import { SitemapPageData } from '../../components/types';

export const metadata = {
  title: 'Sitemap | Viventro',
  description: 'Navigate through Viventro events and planners website.',
};

// Helper to render dynamic lucide icons
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return null;
  return <Icon className={className} strokeWidth={2} />;
};

export default function SitemapPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as any;
  const data = fullData.SitemapPage as SitemapPageData;

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* Banner */}
      <PageBanner data={data.pageBanner} />

      {/* Content */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.sections.map((section, index) => (
            <div key={index} className="flex flex-col h-full rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden bg-white border border-[#f3ead8]">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#fdf7e8] to-[#fcf3dc] py-5 px-6 flex items-center gap-4">
                <div className="text-[#d87d15]">
                  <IconComponent name={section.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1b3f] tracking-tight">
                  {section.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <ul className="flex flex-col space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="border-b border-gray-100 last:border-0 pb-1 last:pb-0 mb-1 last:mb-0">
                      <Link 
                        href={link.href}
                        className="group flex items-center gap-3 py-2 px-1 rounded-lg hover:bg-[#fdfaf5] transition-colors"
                      >
                        <LucideIcons.ChevronRight className="w-4 h-4 text-[#d87d15] shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                        <span className="text-[15px] font-bold text-[#1e2a4a] group-hover:text-[#d87d15] transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
