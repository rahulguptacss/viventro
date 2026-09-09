"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Trophy, Award, Users, Smile, Handshake } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface AwardsStatsData {
  title: string;
  items: StatItem[];
}

const statIconMap: Record<string, React.ReactNode> = {
  Trophy: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C46814]">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5c0 3-2.5 8-5 8s-5-5-5-8V4z" />
      <path d="M7 5H4.5a2.5 2.5 0 0 0 0 5H7" />
      <path d="M17 5h2.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M4 17.5c-1.5-2.5-1.5-5-1-7" />
      <path d="M20 17.5c1.5-2.5 1.5-5 1-7" />
      <path d="M4.5 14.5l-2 1.5" />
      <path d="M3.5 11l-2 1.5" />
      <path d="M19.5 14.5l2 1.5" />
      <path d="M20.5 11l2 1.5" />
    </svg>
  ),
  Award: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C46814]">
      <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
      <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
      <polygon points="12 5.5 13.5 8.5 16.5 9 14.5 11.5 15 14.5 12 13 9 14.5 9.5 11.5 7.5 9 10.5 8.5" />
      <path d="M8.5 14.5L5 22l3.5-2 3.5 2v-4.5" />
      <path d="M15.5 14.5L19 22l-3.5-2-3.5 2v-4.5" />
    </svg>
  ),
  Users: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C46814]">
      <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M5 21c0-3.5 3.5-6 7-6s7 2.5 7 6" />
      <path d="M6.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M2 17c0-2.5 2-4.5 4.5-5" />
      <path d="M17.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M22 17c0-2.5-2-4.5-4.5-5" />
    </svg>
  ),
  Smile: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C46814]">
      <circle cx="12" cy="12" r="10" />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M7.5 14.5c2 2.5 7 2.5 9 0" />
    </svg>
  ),
  Handshake: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C46814]">
      <path d="M12 21.5C12 21.5 3 15.5 3 9.5C3 6.5 5.5 4 8.5 4C10.5 4 12 5.5 12 5.5C12 5.5 13.5 4 15.5 4C18.5 4 21 6.5 21 9.5C21 15.5 12 21.5 12 21.5Z" />
      <path d="M7 11.5L10 14.5L17 7.5" />
      <path d="M9.5 14L13 17.5L18 12.5" />
    </svg>
  ),
};

function AnimatedCounter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AwardsStats({ data }: { data: AwardsStatsData }) {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center w-full justify-center"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="h-[1.5px] w-16 sm:w-28 bg-[#C46814] opacity-80" />
              <div className="text-[#C46814]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z" />
                </svg>
              </div>
            </div>

            <h2
              className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#0B1221] mx-3 sm:mx-4 leading-tight tracking-tight"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              {data.title}
            </h2>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="text-[#C46814]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z" />
                </svg>
              </div>
              <div className="h-[1.5px] w-16 sm:w-28 bg-[#C46814] opacity-80" />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 relative rounded-2xl border border-[#EACCA4] bg-white p-5 md:p-6 shadow-sm">
          {data.items.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Vertical Divider for desktop */}
              {index !== data.items.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-[#EACCA4]/60"></div>
              )}

              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 text-[#C46814]">
                {statIconMap[stat.icon]}
              </div>
              <span 
                className="text-[40px] md:text-[48px] font-light text-[#C46814] leading-none mb-2 tracking-tight"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-[#0B1221] text-[15px] md:text-[17px] font-bold font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
