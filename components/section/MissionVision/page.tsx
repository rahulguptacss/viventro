"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, Target, Eye } from "lucide-react";
import { MissionVisionData } from "../../types";

interface MissionVisionProps {
  data: MissionVisionData;
}

export default function MissionVision({ data }: MissionVisionProps) {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");
  
  const currentData = activeTab === "mission" ? data.mission : data.vision;

  return (
    <section className="relative overflow-hidden bg-black pt-6 pb-20 text-white sm:pt-8 sm:pb-28">
      {/* Background Decoration */}
      <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="mb-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 flex flex-col items-center justify-center"
          >
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-[10px]">♦</span>
              <span className="text-sm sm:text-base font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                {data.subtitle}
              </span>
              <span className="text-[#D4AF37] text-[10px]">♦</span>
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
            <div className="flex items-center space-x-2 mt-0.5">
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-sm leading-none">✦</span>
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-7xl tracking-tight"
          >
            {data.title.split(' ')[0]} <span className="text-[#D4AF37]">{data.title.split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-8 flex max-w-md rounded-full border border-white/10 bg-[#050608] p-1">
          <button
            onClick={() => setActiveTab("mission")}
            className={`relative flex flex-1 items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors sm:text-base ${
              activeTab === "mission" ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {activeTab === "mission" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-[#D4AF37]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {data.mission.title}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`relative flex flex-1 items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors sm:text-base ${
              activeTab === "vision" ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {activeTab === "vision" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-[#D4AF37]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {data.vision.title}
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="relative mx-auto max-w-[1200px] mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-[#D4AF37]"
            >
              {/* Image Side */}
              <div className="relative aspect-[4/3] w-full lg:aspect-auto">
                <Image
                  src={currentData.image}
                  alt={currentData.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Side */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold sm:text-4xl">
                    <span className="text-[#D4AF37]">{currentData.title.split(' ')[0]}</span>{" "}
                    <span className="text-white">{currentData.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                </div>
                
                {/* Decoration */}
                <div className="mb-5 flex items-center space-x-2">
                  <div className="h-[1px] w-8 bg-gradient-to-l from-[#D4AF37] to-transparent" />
                  <span className="text-[#D4AF37] text-sm leading-none">✦</span>
                  <div className="h-[1px] w-32 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                </div>
                
                <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {currentData.description}
                </p>

                {/* Features Grid */}
                <div className="relative grid gap-y-6 gap-x-4 sm:grid-cols-2">
                  {/* Vertical separator for large screens */}
                  <div className="absolute left-1/2 top-0 bottom-0 hidden w-[1px] -translate-x-1/2 bg-white/10 sm:block" />
                  
                  {currentData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`flex items-start space-x-3 ${index % 2 !== 0 ? 'sm:pl-6' : 'sm:pr-6'}`}
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#D4AF37] bg-transparent text-[#D4AF37]">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-semibold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
