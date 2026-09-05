"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface BlogProps {
  data: {
    subtitle: string;
    title: string;
    titleHighlight?: string;
    description: string;
    buttonText: string;
    readMoreText?: string;
    items: BlogItem[];
  };
  limit?: number;
  showButton?: boolean;
}

export default function Blog({ data, limit, showButton = true }: BlogProps) {
  const displayedItems = limit ? data.items.slice(0, limit) : data.items;
  return (
    <section className="pt-8 pb-8 lg:pt-10 lg:pb-10 bg-[#FAFAFA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
          <div className="max-w-2xl">
            {/* Subtitle Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-[#D4AF37]/10 w-fit px-3 py-1.5 rounded-[8px] mb-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              <span className="text-[12px] font-bold tracking-widest text-[#D4AF37] uppercase">{data.subtitle}</span>
            </motion.div>
            
            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.1] text-black tracking-tight"
            >
              {data.titleHighlight ? data.title.split(data.titleHighlight).map((text, i, arr) => (
                <span key={i}>
                  {text}
                  {i === 0 && arr.length > 1 && <span className="text-[#D4AF37]">{data.titleHighlight}</span>}
                </span>
              )) : data.title}
            </motion.h2>

            {/* Subtle Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mt-4"
            >
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end gap-6 max-w-sm text-left lg:text-right shrink-0"
          >
            <p className="text-gray-500 leading-relaxed text-[15px]">
              {data.description}
            </p>
            {showButton && (
              <div>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#b5952f] text-white pl-6 pr-1.5 py-1.5 rounded-[30px] font-bold transition-colors text-[15px] group shadow-lg shadow-[#D4AF37]/20"
                >
                  {data.buttonText}
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {displayedItems.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-[24px]">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                {/* Image Overlap Badge */}
                <div className="absolute bottom-4 left-4 bg-[#D4AF37]/95 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-wider shadow-lg">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[13px] text-gray-500 mb-3 font-medium px-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-[20px] font-bold mb-2 text-black leading-snug px-1 group-hover:text-[#D4AF37] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-[15px] mb-4 flex-1 line-clamp-3 leading-relaxed px-1">{post.description}</p>
                
                <div className="w-full h-[1px] bg-gray-100 mb-3"></div>
                
                <Link href={`/blog/${post.id}`} className="px-1 text-[14px] font-bold text-[#D4AF37] inline-flex items-center gap-2 group/link hover:text-[#b5952f] transition-colors">
                  {data.readMoreText || "Read More"}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
