"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Calendar } from "lucide-react";
import { FaUserCircle, FaRegCalendarAlt, FaRegComments } from "react-icons/fa";

interface ContentBlock {
  type: string;
  text?: string;
  items?: { title: string; description: string }[];
}

interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  comments?: string;
  content?: ContentBlock[];
}

interface BlogSidebar {
  recentPostsTitle: string;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

interface BlogDetailProps {
  post: BlogItem;
  sidebar: BlogSidebar;
  recentPosts: BlogItem[];
}

export default function BlogDetail({ post, sidebar, recentPosts }: BlogDetailProps) {
  return (
    <section className="pt-10 pb-20 bg-[#FAFAFA] text-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Content Area */}
          <div className="lg:w-[73%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm"
            >
              {/* Hero Image */}
              <div className="relative h-[400px] sm:h-[500px] w-full">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="p-8 sm:p-10">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 text-[15px] mb-6 font-bold text-[#23254e]">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="w-5 h-5 text-[#cc7000]" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-gray-400 text-[16px] font-normal leading-none mb-[2px]">›</span>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="w-5 h-5 text-[#cc7000]" />
                    <span>{post.date}</span>
                  </div>
                  {post.comments && (
                    <>
                      <span className="text-gray-400 text-[16px] font-normal leading-none mb-[2px]">›</span>
                      <div className="flex items-center gap-2">
                        <FaRegComments className="w-5 h-5 text-[#cc7000]" />
                        <span>{post.comments}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-[36px] sm:text-[46px] font-bold text-[#111827] mb-6 leading-tight font-serif tracking-tight">
                  {post.title}
                </h1>
                
                {/* Divider */}
                <div className="flex items-center mb-10">
                  <div className="h-[2px] w-16 bg-[#d97706]"></div>
                  <div className="w-2 h-2 rotate-45 bg-[#d97706] mx-1"></div>
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[#d97706] to-transparent opacity-50"></div>
                </div>

                {/* Dynamic Content */}
                <div className="space-y-8">
                  {post.content ? post.content.map((block, index) => {
                    if (block.type === 'paragraph') {
                      return (
                        <p key={index} className="text-gray-600 leading-relaxed text-[15px]">
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === 'numbered-list' && block.items) {
                      return (
                        <div key={index} className="space-y-10 pt-4">
                          {block.items.map((item, i) => (
                            <div key={i} className="flex gap-6">
                              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#fdf3e8] flex items-center justify-center text-[#c28e23] font-bold text-[18px]">
                                {String(i + 1).padStart(2, '0')}
                              </div>
                              <div className="pt-1">
                                <h3 className="text-[22px] font-bold text-[#111827] mb-2 font-serif tracking-tight">{item.title}</h3>
                                <p className="text-[#3b406e] leading-relaxed text-[16px] pr-4">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    if (block.type === 'blockquote') {
                      return (
                        <div key={index} className="relative bg-[#fcf9f2] rounded-xl p-8 my-10 overflow-hidden border border-[#f3e5c8]">
                          <div className="absolute top-4 left-6 text-[#d4af37] opacity-40">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.714 4.026-6.695 4.993-6.695v3.608c-2.257 0-2.36 2.006-2.36 3.447h2.36v7.031h-4.993zm-9.017 0v-7.391c0-5.714 4.026-6.695 4.993-6.695v3.608c-2.257 0-2.36 2.006-2.36 3.447h2.36v7.031h-4.993z"/></svg>
                          </div>
                          <p className="relative z-10 text-[18px] sm:text-[20px] font-bold text-[#1a1a2e] italic ml-12 pr-16 leading-relaxed">
                            {block.text}
                          </p>
                          <div className="absolute -bottom-10 -right-10 opacity-10">
                            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 22 22 12 22Z"/></svg>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }) : (
                    <p className="text-gray-600 leading-relaxed text-[15px]">{post.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:w-[27%] space-y-10 sticky top-32 self-start">
            
            {/* Recent Posts Widget */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-6">{sidebar.recentPostsTitle}</h3>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
                <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
                <div className="h-[2px] flex-1 bg-gray-100"></div>
              </div>

              <div className="space-y-6">
                {recentPosts.slice(0, 3).map((recent) => (
                  <Link key={recent.id} href={`/blog/${recent.id}`} className="flex gap-4 group">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      <Image 
                        src={recent.image} 
                        alt={recent.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[15px] font-bold text-[#1a1a2e] group-hover:text-[#D4AF37] transition-colors leading-tight mb-2 line-clamp-2">
                        {recent.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[12px] text-gray-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{recent.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* CTA Widget */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#fff9f0] rounded-[16px] p-10 text-center shadow-sm"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-orange-100/50">
                <FaRegCalendarAlt className="w-8 h-8 text-[#c28e23]" />
              </div>
              
              <h3 className="text-[28px] font-bold text-[#111827] mb-6 whitespace-pre-line leading-tight font-serif tracking-tight">
                {sidebar.cta.title}
              </h3>
              
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1.5px] w-12 bg-[#c28e23] opacity-60"></div>
                <div className="w-2 h-2 rotate-45 bg-[#c28e23] mx-1"></div>
                <div className="h-[1.5px] w-12 bg-[#c28e23] opacity-60"></div>
              </div>

              <p className="text-[#3b406e] font-medium text-[15px] leading-relaxed mb-8 px-2">
                {sidebar.cta.description}
              </p>

              <Link 
                href={sidebar.cta.buttonHref} 
                className="inline-flex items-center justify-center gap-2 bg-[#cc781b] hover:bg-[#b06616] text-white px-8 py-3.5 rounded-lg font-bold transition-colors text-[16px] shadow-lg shadow-[#cc781b]/30 w-full"
              >
                {sidebar.cta.buttonText}
                <ArrowRight className="w-4 h-4 font-bold" strokeWidth={3} />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
