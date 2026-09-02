"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface MissionData {
  subtitle: string;
  title: string;
  mission: {
    title: string;
    description: string;
    image: string;
    features: FeatureItem[];
  }
}

export default function Mission({ data }: { data: MissionData }) {
  const missionData = data.mission;

  // Split titles to apply colors to the first word and the rest
  const titleWords = missionData.title ? missionData.title.split(' ') : ["Our", "Mission"];
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(' ');

  return (
    <section className="bg-white pt-8 pb-4 md:pt-12 md:pb-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-1.5 mb-2"
          >
            <div className="h-[1px] w-12 sm:w-16 bg-[#e4a836]" />
            <span className="text-[#e4a836] text-[10px] ml-1">♦</span>
            <span className="text-sm sm:text-base font-medium uppercase tracking-widest text-[#e4a836] mx-2">
              {data.subtitle}
            </span>
            <span className="text-[#e4a836] text-[10px] mr-1">♦</span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#e4a836]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold sm:text-6xl lg:text-[80px] tracking-tight text-[#131336]"
          >
            {firstWord} <span className="text-[#e4a836]">{restWords}</span>
          </motion.h2>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-4 md:p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group shadow-xl"
              >
                <Image
                  src={missionData.image}
                  alt={missionData.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-[40px] font-bold text-[#131336] mb-2">
                {firstWord} <span className="text-[#e4a836]">{restWords}</span>
              </h3>
              
              {/* Decoration Line */}
              <div className="mb-4 flex items-center space-x-2">
                <div className="h-[2px] w-16 rounded-full bg-[#e4a836]" />
                <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L8.85198 5.14802L14 7L8.85198 8.85198L7 14L5.14802 8.85198L0 7L5.14802 5.14802L7 0Z" fill="#e4a836"/>
                </svg>
                <div className="h-[2px] w-32 rounded-full bg-gradient-to-r from-[#e4a836] to-transparent" />
              </div>
              
              <p className="mb-6 text-[15px] sm:text-[17px] leading-[1.8] text-gray-600 font-medium max-w-xl">
                {missionData.description}
              </p>

              {/* Features Grid */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 sm:gap-x-12">
                {/* Vertical Divider */}
                <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gray-200" />
                
                {missionData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 relative z-10 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#e4a836] text-[#131336] bg-white transition-shadow group-hover:shadow-[0_0_15px_rgba(228,168,54,0.3)]"
                    >
                      <Check className="h-5 w-5" strokeWidth={3} />
                    </motion.div>
                    <div>
                      <h4 className="mb-1 text-[16px] font-bold text-[#131336] leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-gray-500 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
