"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { TestimonialsPageGridData } from "../../types";
import { useState } from "react";

interface TestimonialsPageGridProps {
  data: TestimonialsPageGridData;
}

export default function TestimonialsPageGrid({ data }: TestimonialsPageGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.items.length / itemsPerPage);

  const paginatedItems = data.items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="pt-8 pb-8 md:pt-10 md:pb-12 bg-[#FAFAFA] relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-8 md:mb-10"
        >
          <h3 className="text-[18px] md:text-[22px] font-bold text-[#D8621C] mb-3 uppercase tracking-[0.1em]">
            {data.subtitle}
          </h3>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1.5px] w-16 bg-[#D8621C]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D8621C]"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D8621C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D8621C]"></div>
            <div className="h-[1.5px] w-16 bg-[#D8621C]"></div>
          </div>

          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-serif text-[#0B1736] mb-6 leading-[1.2] font-semibold whitespace-pre-line">
            {data.titlePart1} <span className="text-[#D8621C]">{data.titleHighlight}</span>
          </h2>

          <p className="text-[#1A2B4C] max-w-2xl text-[16px] md:text-[18px] leading-[1.6] font-medium whitespace-pre-line">
            {data.description}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 w-full max-w-[200px]">
            <div className="h-[1.5px] flex-1 bg-[#D8621C]"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#D8621C" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <div className="h-[1.5px] flex-1 bg-[#D8621C]"></div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {paginatedItems.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full hover:shadow-[0_8px_30px_rgba(216,98,28,0.08)] transition-shadow duration-300 cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 shadow-sm">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex flex-1 justify-center gap-1 sm:gap-1.5 flex-wrap sm:flex-nowrap">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D8621C] text-[#D8621C]" />
                    ))}
                  </div>
                  <div className="text-[#D8621C] font-serif text-5xl sm:text-6xl leading-none mt-2">
                    “
                  </div>
                </div>
              </div>

              {/* Quote text */}
              <p className="text-[#1A2338] text-[15px] sm:text-[16px] leading-relaxed mb-6 flex-grow font-medium">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="h-[1px] w-1/2 bg-gray-200 mb-6"></div>

              {/* Author Info */}
              <div>
                <h4 className="text-[#0B1736] font-serif font-bold text-[18px] sm:text-[20px] mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[#334155] text-[14px] sm:text-[16px]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-[#D8621C] hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                return (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-medium transition-colors ${currentPage === page ? 'bg-[#D8621C] text-white' : 'text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                );
              }
              if (page === currentPage - 2 || page === currentPage + 2) {
                return <div key={`ellipsis-${page}`} className="text-gray-400 px-1">...</div>;
              }
              return null;
            })}

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-[#D8621C] hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
