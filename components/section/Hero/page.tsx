"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  data: {
    images: string[];
  };
}

export default function Hero({ data }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!data.images || data.images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.images]);

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
          style={{ backgroundImage: `url(${data.images[currentIndex]})` }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay for header visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />

      {/* Slider dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2.5 z-20">
        {data.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full bg-white ${
              index === currentIndex 
                ? "w-[30px] h-[10px]" 
                : "w-[10px] h-[10px] opacity-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
