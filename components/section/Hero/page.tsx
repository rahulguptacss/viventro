"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { HeroData } from "../../types";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback to empty slides if data is malformed
  const slides = data.slides || [];
  const currentSlide = slides[currentIndex];

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <section className="relative w-full h-[75vh] md:h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay for header visibility and text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center">
        <div className="max-w-2xl mt-12 md:mt-24 relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              {currentSlide.subtitle && (
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-[11px] sm:text-[13px] md:text-[15px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-white uppercase">{currentSlide.subtitle}</span>
                  <div className="h-[1px] w-8 md:w-12 bg-[#e4a836]"></div>
                </div>
              )}

              {currentSlide.title && (
                <h1 className="text-[34px] sm:text-[45px] md:text-[55px] lg:text-[65px] font-bold font-serif leading-[1.1] text-white mb-4 md:mb-6 tracking-tight">
                  {currentSlide.title.replace('Feel', '').replace('Designing Your', 'Designing').replace('Memories To Last', 'Memories To')}
                  <br className="hidden md:block" />
                  {currentSlide.title.includes('Feel') ? 'Feel ' : currentSlide.title.includes('Designing Your') ? 'Your ' : currentSlide.title.includes('Memories To Last') ? 'Last ' : ''}
                  {currentSlide.titleHighlight && (
                    <span className="text-[#e4a836] italic font-medium">{currentSlide.titleHighlight}</span>
                  )}
                </h1>
              )}

              {currentSlide.description && (
                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-200 mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
                  {currentSlide.description}
                </p>
              )}

              {currentSlide.buttonText && currentSlide.buttonLink && (
                <div>
                  <Link 
                    href={currentSlide.buttonLink}
                    className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-[#D4AF37] to-[#e4a836] hover:from-[#c9922e] hover:to-[#d69620] text-black font-bold pl-6 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] group"
                  >
                    <span className="text-[14px] md:text-[16px]">{currentSlide.buttonText}</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" strokeWidth={2.5} />
                    </div>
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center items-center gap-2 md:gap-2.5 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full bg-white shadow-sm ${
              index === currentIndex 
                ? "w-[30px] h-[10px]" 
                : "w-[10px] h-[10px] opacity-80 hover:opacity-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
