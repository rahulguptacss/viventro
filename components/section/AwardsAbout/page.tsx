"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AwardsAboutData {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export default function AwardsAbout({ data }: { data: AwardsAboutData }) {


  return (
    <section className="bg-[#FAF9F6] py-8 md:py-12">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%]"
          >
            <div className="w-full">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto drop-shadow-sm"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          {/* Text Side */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left">
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start mb-4 lg:mb-3"
            >
              <div className="inline-flex flex-col items-center">
                <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-widest text-[#C46814] mb-1 font-sans">
                  {data.subtitle}
                </span>
                <div className="flex items-center w-full">
                  <div className="h-[1.5px] flex-1 bg-[#C46814] opacity-70" />
                  <div className="mx-3 text-[#C46814]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
                    </svg>
                  </div>
                  <div className="h-[1.5px] flex-1 bg-[#C46814] opacity-70" />
                </div>
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] sm:text-[44px] md:text-[58px] font-bold text-[#0B1221] mb-4 lg:mb-3 leading-[1.1] tracking-tight"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              {data.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
              <span className="text-[#C46814]">{data.title.split(' ').slice(-1).join(' ')}</span>
            </motion.h2>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[15px] leading-[1.8] text-[#4b5563] font-medium mb-6 lg:mb-6 space-y-2 whitespace-pre-line px-2 lg:px-0 lg:pr-4"
            >
              {data.description}
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                href={data.buttonLink || "#"}
                className="inline-flex items-center gap-4 rounded-full bg-[#C67023] py-2 pl-7 pr-2 text-[15px] font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#b05f19]"
              >
                <span>{data.buttonText}</span>
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#C67023]">
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
