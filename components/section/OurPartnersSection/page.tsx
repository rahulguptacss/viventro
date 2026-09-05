"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as Icons from "lucide-react";
import { OurPartnersPageData } from "../../types";
import Stats from "../Stats/page";

interface OurPartnersSectionProps {
  data: OurPartnersPageData;
}

const IconComponent = ({ name, className, strokeWidth }: { name: string; className?: string; strokeWidth?: number }) => {
  const Icon = (Icons as any)[name] || Icons.HelpCircle;
  return <Icon className={className} strokeWidth={strokeWidth} />;
};

export default function OurPartnersSection({ data }: OurPartnersSectionProps) {
  return (
    <>
      {/* Top Section - Introduction & Features */}
      <section className="pt-8 pb-12 bg-[#FAFAFA] relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-10 md:mb-12"
          >
            <h3 className="text-[16px] md:text-[18px] font-bold text-[#D8621C] mb-3 uppercase tracking-[0.1em]">
              {data.subtitle}
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-2 w-full max-w-[280px]">
              <div className="h-[1.5px] flex-1 bg-[#D8621C]/60"></div>
              <div className="w-1 h-1 rotate-45 bg-[#D8621C]/60"></div>
              <Icons.Heart className="w-5 h-5 text-[#D8621C] mx-1" strokeWidth={1.5} />
              <div className="w-1 h-1 rotate-45 bg-[#D8621C]/60"></div>
              <div className="h-[1.5px] flex-1 bg-[#D8621C]/60"></div>
            </div>

            <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-serif mb-6 leading-[1.2] font-semibold text-[#0B1736]">
              {data.titlePart1}
              <br className="hidden md:block" />
              {data.titlePart2} <span className="text-[#D8621C]">{data.titleHighlight}</span>
            </h2>

            <p className="text-[#334155] max-w-3xl text-[16px] md:text-[18px] leading-[1.6] font-medium">
              {data.description}
            </p>
            
            <div className="flex items-center justify-center gap-3 mt-8 w-full max-w-[200px]">
              <div className="h-[1.5px] flex-1 bg-[#D8621C]"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D8621C]"></div>
              <div className="h-[1.5px] flex-1 bg-[#D8621C]"></div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 lg:flex lg:flex-row gap-3 sm:gap-6 lg:gap-0 max-w-6xl mx-auto relative z-10 lg:bg-[#FCF9F6] lg:rounded-[24px] lg:px-10 lg:py-8 lg:border lg:border-[#FDE6D5] lg:shadow-sm"
          >
            {data.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                className={`bg-[#FCF9F6] lg:bg-transparent rounded-[20px] sm:rounded-[24px] lg:rounded-none border border-[#FDE6D5] lg:border-none p-4 sm:p-6 md:p-8 lg:p-0 flex flex-col items-center text-center shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-all duration-300 group lg:flex-1 relative lg:px-4 ${
                  index !== data.features.length - 1 ? "lg:border-r lg:border-[#FDE6D5]/60" : ""
                }`}
              >
                {/* Custom Vertical Divider for Desktop */}
                {index !== data.features.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#FDE6D5]"></div>
                )}
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFF2E8] border border-[#FDE6D5] flex items-center justify-center mb-3 sm:mb-5 transition-colors duration-300 group-hover:bg-[#FDE6D5]"
                >
                  <IconComponent name={feature.icon} className="w-6 h-6 sm:w-8 sm:h-8 text-[#D8621C]" strokeWidth={1.5} />
                </motion.div>
                <h4 className="text-[#0B1736] font-semibold font-serif text-[14px] md:text-[16px] mb-1 lg:whitespace-nowrap">
                  {feature.title}
                </h4>
                <p className="text-[#0B1736] text-[12px] md:text-[13px] font-medium lg:whitespace-nowrap">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Esteemed Partners Section */}
      <section className="pt-4 pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-[32px] font-serif text-[#0B1736] font-bold mb-3">
              {data.partnersHeading}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-3 w-full max-w-[200px]">
              <div className="h-[1.5px] flex-1 bg-[#D8621C]/80"></div>
              <div className="w-2 h-2 rotate-45 bg-[#D8621C]"></div>
              <div className="h-[1.5px] flex-1 bg-[#D8621C]/80"></div>
            </div>
            <p className="text-[#0B1736] max-w-2xl text-[13px] md:text-[14px] font-medium leading-relaxed">
              {data.partnersDescription}
            </p>
          </motion.div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {data.partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(216, 98, 28, 0.1), 0 10px 10px -5px rgba(216, 98, 28, 0.04)",
                  borderColor: "#FDE6D5"
                }}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 flex items-center justify-center h-[90px] sm:h-[120px] shadow-sm transition-colors duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="max-w-[90%] max-h-[90%] sm:max-w-[100%] sm:max-h-[100%] object-contain transition-all duration-500 group-hover:scale-110 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <div className="pt-4 pb-12 bg-white">
        <Stats data={{ items: data.stats }} hideDualBackground={true} />
      </div>
    </>
  );
}
