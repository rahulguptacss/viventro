"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Star, Plus } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialsProps {
  data: {
    subtitle: string;
    title: string;
    description: string;
    image: string;
    items: Testimonial[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  return (
    <section className="py-10 lg:py-16 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">

          {/* Left Column: Content & Cards (50%) */}
          <div className="w-full lg:w-[50%] flex flex-col relative z-20">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 shrink-0">
                <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V15C20 16.1046 19.1046 17 18 17H8L4 21V6Z" fill="#D4AF37"/>
                <rect x="7" y="8.5" width="10" height="5" rx="1.5" fill="#050505"/>
                <circle cx="10" cy="11" r="1.2" fill="#D4AF37"/>
                <circle cx="14" cy="11" r="1.2" fill="#D4AF37"/>
              </svg>
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.15em] text-[#D4AF37] uppercase mt-0.5">
                {data.subtitle.split(' ').slice(0, 2).join(' ')} <span className="text-white">{data.subtitle.split(' ').slice(2).join(' ')}</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] sm:text-[46px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.1] mb-6 tracking-tight max-w-2xl lg:pr-10"
            >
              {data.title.split('Celebrated.').map((text, i, arr) => (
                <span key={i}>
                  {text}
                  {i === 0 && arr.length > 1 && <span className="text-[#D4AF37]">Celebrated.</span>}
                </span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-10 leading-relaxed max-w-2xl text-[15px] sm:text-[16px] lg:pr-10"
            >
              {data.description}
            </motion.p>

            {/* Testimonial Cards Carousel (Embla) */}
            <div className="mt-auto overflow-hidden pb-6 pt-2 lg:-mr-[80px] xl:-mr-[120px]" ref={emblaRef}>
              <div className="flex -ml-4 lg:-ml-6 cursor-grab active:cursor-grabbing">
                {data.items.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4 lg:pl-6 cursor-pointer"
                  >
                    <div className="bg-[#050505] p-6 lg:p-8 rounded-[20px] border border-[#D4AF37]/30 flex flex-col justify-between h-full shadow-2xl">
                      <div>
                        <div className="flex items-center gap-1.5 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D4AF37] text-[#D4AF37]" />
                          ))}
                        </div>

                        <p className="text-gray-300 mb-8 leading-relaxed text-[13px] sm:text-[14px]">
                          {testimonial.quote}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4">
                        <div className="flex items-center gap-3 lg:gap-4">
                          <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-[#D4AF37]/50 shrink-0">
                            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-[15px] lg:text-[17px]">{testimonial.name}</h4>
                            <p className="text-[#D4AF37] text-[13px] lg:text-[14px]">{testimonial.role}</p>
                          </div>
                        </div>

                        {/* Outline Quote Icon */}
                        <div className="shrink-0 opacity-80">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 lg:w-12 lg:h-12">
                            <path d="M10 11h-4a3 3 0 0 1 -3 -3v-4a3 3 0 0 1 3 -3h3a3 3 0 0 1 3 3v6c0 2.667 -1.333 4.333 -4 5" />
                            <path d="M19 11h-4a3 3 0 0 1 -3 -3v-4a3 3 0 0 1 3 -3h3a3 3 0 0 1 3 3v6c0 2.667 -1.333 4.333 -4 5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Single Image (50%) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-[50%] h-[500px] sm:h-[600px] lg:h-auto relative mt-6 lg:mt-0 rounded-[16px] lg:rounded-[24px] overflow-hidden relative z-10 shrink-0"
          >
            <Image
              src={data.image}
              alt="Celebration"
              fill
              className="object-cover"
            />

            {/* 12k+ Review Box (Top Right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.6 },
                scale: { duration: 0.5, delay: 0.6, type: "spring", bounce: 0.4 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } 
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-[120px] lg:w-[150px] aspect-square rounded-[16px] lg:rounded-[20px] border border-[#D4AF37]/30 bg-[#0a0a0a]/80 backdrop-blur-md flex flex-col items-center justify-center gap-3 lg:gap-4 p-2 shadow-2xl z-10"
            >
              <div className="text-center leading-tight">
                <span className="text-[#D4AF37] font-bold text-[18px] lg:text-[22px]">12k+</span>
                <span className="text-white font-medium text-[13px] lg:text-[15px] ml-1">Review</span>
              </div>
              <div className="flex items-center -space-x-2">
                {data.items.slice(0, 3).map((testimonial, i) => (
                  <div key={testimonial.id} className="relative w-7 h-7 lg:w-9 lg:h-9 rounded-full border border-[#D4AF37] overflow-hidden shrink-0 z-20" style={{ zIndex: 10 - i }}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative w-7 h-7 lg:w-9 lg:h-9 rounded-full border border-transparent bg-[#D4AF37] flex items-center justify-center z-10 shrink-0">
                  <Plus className="w-3 h-3 lg:w-4 lg:h-4 text-black" strokeWidth={3} />
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
