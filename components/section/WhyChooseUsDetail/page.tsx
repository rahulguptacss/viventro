"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Star, 
  Award, 
  Lightbulb, 
  ClipboardList, 
  Users, 
  User,
  ShieldCheck, 
  CircleDollarSign, 
  CheckCircle2 
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsDetailProps {
  data: {
    topSection: {
      subtitle: string;
      titlePart1: string;
      titlePart2: string;
      description: string;
      image: string;
      goal: {
        title: string;
        text: string;
        description?: string;
      };
    };
    features: Feature[];
    commitmentSection: {
      subtitle: string;
      title: string;
      description: string;
      mainImage: string;
      secondaryImage: string;
      list: string[];
    };
  };
}

const iconMap: Record<string, React.ElementType> = {
  Award,
  Lightbulb,
  ClipboardList,
  Users,
  ShieldCheck,
  CircleDollarSign
};

export default function WhyChooseUsDetail({ data }: WhyChooseUsDetailProps) {
  const { topSection, features, commitmentSection } = data;

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white text-black overflow-hidden relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Left Content */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative w-8 h-8 rounded-full bg-[#FFF0E0] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#D36F15] -ml-1 -mt-1 opacity-40"></div>
                <Star className="w-4 h-4 text-[#D36F15] fill-[#D36F15] z-10" />
              </div>
              <span className="text-[14px] sm:text-[15px] font-extrabold tracking-[0.15em] text-[#D36F15] uppercase">
                {topSection.subtitle}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight mb-5 text-[#0B1021]"
            >
              {topSection.titlePart1} <br />
              <span className="text-[#D36F15]">{topSection.titlePart2}</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[2px] w-16 sm:w-24 bg-[#D36F15]/60 rounded-full" />
              <div className="text-[#D36F15]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                </svg>
              </div>
              <div className="h-[2px] w-16 sm:w-24 bg-[#D36F15]/60 rounded-full" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#4b5563] mb-0 lg:mb-8 leading-[1.8] text-[16px] lg:text-[18px] max-w-lg"
            >
              {topSection.description}
            </motion.p>
          </div>

          {/* Right Image Container */}
          <div className="relative mb-8 sm:mb-10 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[350px] sm:h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-hidden"
            >
              <Image 
                src={topSection.image} 
                alt="Event Decoration" 
                fill 
                className="object-cover" 
              />
            </motion.div>
            
            {/* Our Goal Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-16 left-2 sm:-bottom-10 sm:-left-6 lg:-bottom-12 lg:-left-16 bg-[#D36F15] text-white rounded-[24px] sm:rounded-[32px] py-4 px-3 sm:py-6 sm:px-4 lg:py-8 lg:px-4 w-[190px] sm:w-[230px] lg:w-[250px] shadow-[0_20px_40px_rgba(211,111,21,0.3)] z-10 text-center border-[4px] sm:border-[5px] border-white"
            >
              <div className="relative w-12 h-10 sm:w-16 sm:h-12 mx-auto mb-2 sm:mb-3 text-white">
                <div className="flex items-center justify-center w-full h-full mt-1.5 sm:mt-2">
                  <User className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
                </div>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute top-0 left-1/2 -translate-x-1/2" strokeWidth={2} />
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 absolute top-3 sm:top-4 left-1 sm:left-1.5" strokeWidth={2} />
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 absolute top-3 sm:top-4 right-1 sm:right-1.5" strokeWidth={2} />
              </div>
              
              <h4 className="text-[18px] sm:text-[24px] font-bold mb-1.5 sm:mb-2">{topSection.goal.title}</h4>
              
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="h-[1.5px] w-8 sm:w-12 bg-white/80 rounded-full" />
                <svg width="8" height="8" className="sm:w-[10px] sm:h-[10px]" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
                </svg>
                <div className="h-[1.5px] w-8 sm:w-12 bg-white/80 rounded-full" />
              </div>

              <p className="text-[12px] sm:text-[15px] leading-[1.6] sm:leading-[1.8] text-white font-medium">
                {(topSection.goal.description || topSection.goal.text).split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>
            </motion.div>
          </div>

        </div>


        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12 lg:mb-16">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 rounded-[24px] p-6 lg:p-8 flex gap-5 items-start cursor-pointer"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#FFF4E8] group-hover:bg-[#D36F15] transition-colors duration-300 flex items-center justify-center">
                  <Icon className="w-9 h-9 text-[#D36F15] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>

                <div className="flex-1">
                  <h4 className="text-[22px] lg:text-[24px] font-bold text-[#0B1021] mb-3 leading-[1.3] pr-4">
                    {feature.title}
                  </h4>
                  <div className="flex items-center gap-0 mb-4">
                    <div className="h-[2.5px] w-5 bg-[#D36F15] rounded-l-full" />
                    <div className="h-[2.5px] w-8 bg-[#D36F15]/20 rounded-r-full" />
                  </div>
                  <p className="text-[#64748b] text-[14.5px] leading-[1.7] font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* ================= COMMITMENT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Composite Image */}
          <div className="relative mb-4 lg:mb-0">
            {/* Dot Pattern Background */}
            <div className="absolute top-12 -left-8 w-32 h-32 opacity-20 pointer-events-none flex flex-wrap gap-2 z-0 hidden sm:flex">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C46814]" />
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[280px] sm:h-[350px] lg:h-[400px] w-full sm:w-[85%] sm:ml-auto rounded-[32px] overflow-hidden z-10"
            >
              <Image 
                src={commitmentSection.mainImage} 
                alt="Commitment main" 
                fill 
                className="object-cover" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 left-4 sm:left-0 lg:-bottom-12 lg:-left-4 w-[65%] sm:w-[60%] h-[180px] sm:h-[200px] lg:h-[250px] rounded-[24px] overflow-hidden border-8 border-white z-20 shadow-xl"
            >
              <Image 
                src={commitmentSection.secondaryImage} 
                alt="Commitment secondary" 
                fill 
                className="object-cover" 
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-[15px] sm:text-[16px] font-extrabold tracking-[0.1em] text-[#D36F15] uppercase">
                {commitmentSection.subtitle}
              </span>
              <div className="flex items-center gap-0 mt-3">
                <div className="h-[2.5px] w-8 bg-[#D36F15] rounded-l-full" />
                <div className="h-[2.5px] w-12 bg-[#D36F15]/20 rounded-r-full" />
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-[1.3] mb-5 text-[#0A1024] max-w-[480px]"
            >
              {commitmentSection.title}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#4b5563] mb-8 leading-[1.8] text-[15.5px] font-medium max-w-[500px]"
            >
              {commitmentSection.description}
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3.5"
            >
              {commitmentSection.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D36F15]" strokeWidth={2.5} />
                  <span className="text-[#0B1021] font-medium text-[15px] sm:text-[15.5px]">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

        </div>

      </div>
    </section>
  );
}
