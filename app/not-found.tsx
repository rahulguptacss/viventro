import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { ArrowUpRight, ArrowRight, PartyPopper } from 'lucide-react';
import { NotFoundPageData } from '../components/types';

export const metadata = {
  title: '404 - Page Not Found | Viventro',
  description: 'Oops! The page you are looking for does not exist.',
};

export default function NotFound() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as any;
  const data = fullData.NotFoundPage as NotFoundPageData;

  return (
    <main className="min-h-[70vh] md:min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${data.backgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto pt-8 md:pt-40 pb-8 md:pb-32">
        
        {/* 404 Text */}
        <div className="relative inline-block mb-2 md:mb-4">
          <h1 className="text-[120px] sm:text-[140px] md:text-[180px] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#C71585] drop-shadow-2xl select-none flex items-center justify-center">
            <span>4</span>
            <span className="relative flex items-center justify-center w-[0.8em]">
              0
              {/* Party Popper inside 0 */}
              <PartyPopper className="absolute w-[35%] h-[35%] text-[#D4AF37] z-20" strokeWidth={2} />
            </span>
            <span>4</span>
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6 md:mb-8 tracking-tight">
          {data.title}
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center w-full max-w-xs mb-8 md:mb-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
          <div className="mx-3 text-[#D4AF37] rotate-45 transform w-2 h-2 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)] shrink-0"></div>
          <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-6">
          <Link 
            href={data.primaryButton.href}
            className="group relative flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#e4a836] hover:from-[#c9922e] hover:to-[#d69620] text-black font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="text-[17px]">{data.primaryButton.label}</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.5} />
            </div>
          </Link>

          <Link 
            href={data.secondaryButton.href}
            className="group flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors duration-300 text-[16px] font-medium mt-2"
          >
            {data.secondaryButton.label}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </main>
  );
}
