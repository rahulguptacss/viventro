"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CareerHeroData } from "../../types";

interface CareerHeroProps {
  data: CareerHeroData;
}

export default function CareerHero({ data }: CareerHeroProps) {
  return (
    <section className="pt-10 pb-12 lg:pt-16 lg:pb-20 bg-white text-black overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#d38c2a]" />
              <span className="text-[#d38c2a] font-bold tracking-widest text-[13px] uppercase">
                {data.smallTitle}
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#d38c2a]" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] sm:text-[44px] lg:text-[46px] xl:text-[52px] font-bold text-[#0d1430] leading-[1.08] tracking-tight font-serif mb-6 whitespace-pre-line"
            >
              {data.title}
              <span className="text-[#c28e23] block">{data.highlightTitle}</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="h-[2px] w-12 bg-[#c28e23] opacity-60"></div>
              <div className="w-2.5 h-2.5 rotate-45 bg-[#c28e23]"></div>
              <div className="h-[2px] w-12 bg-[#c28e23] opacity-60"></div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#3b406e] leading-relaxed text-[16px] mb-10 max-w-lg whitespace-pre-line"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="#open-positions" 
                className="inline-flex items-center justify-center gap-3 bg-[#c28e23] hover:bg-[#b06616] text-white px-8 py-4 rounded-lg font-bold transition-colors text-[16px] shadow-lg shadow-[#c28e23]/30 w-fit"
              >
                {data.buttonText}
                <ArrowRight className="w-5 h-5 font-bold" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[54%] relative h-[350px] sm:h-[400px] lg:h-[460px] xl:h-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image 
                src={data.image} 
                alt="Career at Viventro"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
