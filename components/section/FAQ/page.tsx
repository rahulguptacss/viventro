"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import * as Icons from "lucide-react";
import { FAQPageData, FAQItem } from "../../types";

interface FAQSectionProps {
  data: FAQPageData;
}

const AccordionItem = ({
  item,
  isOpen,
  onClick
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={`mb-4 rounded-[12px] border border-[#FDE6D5] overflow-hidden transition-all duration-300 ${isOpen ? "shadow-sm" : "hover:shadow-sm"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-md bg-[#d48c37] flex items-center justify-center text-white transition-transform duration-300">
            {isOpen ? <Icons.Minus className="w-4 h-4" /> : <Icons.Plus className="w-4 h-4" />}
          </div>
          <span className="font-bold text-[14px] sm:text-[15px] text-[#0B1736]">
            {item.question}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4 sm:p-6 pt-4 sm:pt-5 text-[#64748B] text-[13px] sm:text-[14px] leading-relaxed bg-[#FFF7F0]">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection({ data }: FAQSectionProps) {
  const [openLeftId, setOpenLeftId] = useState<number | null>(data.faqsLeft[0]?.id || null);
  const [openRightId, setOpenRightId] = useState<number | null>(data.faqsRight[0]?.id || null);

  return (
    <main className="w-full bg-white">
      {/* Hero Header */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover.png"
            alt="FAQ Header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            {data.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-white/80 text-[14px] font-medium"
          >
            <Icons.Home className="w-4 h-4 text-[#D8621C]" />
            <span className="text-[#D8621C]">Home</span>
            <span>/</span>
            <span>Frequently Asked Questions</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">

          {/* Top Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-6 lg:mb-24">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border-2 border-[#d68541]"
            >
              <Image
                src={data.image}
                alt="Event Planning"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col relative"
            >
              {/* Background dots pattern */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-24 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D8621C 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

              <div className="flex items-center gap-2 mb-3">
                <Icons.Target className="w-5 h-5 text-[#D8621C]" />
                <span className="text-[#D8621C] font-bold text-[13px] uppercase tracking-wider">
                  {data.faqHeading}
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] font-serif font-medium text-[#0B1736] leading-[1.1] mb-5 tracking-tight">
                {data.faqTitlePart1} <br className="hidden lg:block" /><span className="text-[#d48c37]">{data.faqTitleHighlight}</span> {data.faqTitlePart2}
              </h2>

              {/* Decorative Divider */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-[1.5px] bg-[#D8621C]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#D8621C]"></div>
              </div>

              <p className="text-[#64748B] text-[14px] md:text-[16px] font-medium leading-[1.8] mb-5 max-w-[480px]">
                {data.faqDescription}
              </p>

              <button className="bg-[#edaa38] text-white pl-6 sm:pl-8 pr-2 py-2 rounded-full font-medium text-[15px] sm:text-[16px] hover:shadow-lg transition-all duration-300 w-fit flex items-center gap-4 group">
                {data.faqButtonText}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icons.ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#edaa38] -rotate-45" strokeWidth={2.5} />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {data.faqsLeft.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openLeftId === item.id}
                  onClick={() => setOpenLeftId(openLeftId === item.id ? null : item.id)}
                />
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              {data.faqsRight.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openRightId === item.id}
                  onClick={() => setOpenRightId(openRightId === item.id ? null : item.id)}
                />
              ))}
            </motion.div>

          </div>

        </div>
      </section>
    </main>
  );
}
