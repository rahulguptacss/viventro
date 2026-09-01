"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CalendarDays, Award, Users, Handshake } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface StatsProps {
  data: {
    items: StatItem[];
  };
}

const statIconMap: Record<string, React.ReactNode> = {
  Calendar: <CalendarDays className="w-8 h-8 text-[#D49A4D]" strokeWidth={1.5} />,
  Award: <Award className="w-8 h-8 text-[#D49A4D]" strokeWidth={1.5} />,
  Users: <Users className="w-8 h-8 text-[#D49A4D]" strokeWidth={1.5} />,
  Handshake: <Handshake className="w-8 h-8 text-[#D49A4D]" strokeWidth={1.5} />,
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

export default function Stats({ data }: StatsProps) {
  return (
    <section className="relative w-full">
      {/* Dual Background for overlap effect */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-[#050505]"></div>
      </div>
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1A1814] border border-[#D49A4D]/40 rounded-[20px] py-10 px-2 sm:px-6 md:px-8 grid grid-cols-2 gap-y-10 gap-x-2 md:flex md:flex-row md:justify-between items-center md:gap-0">
          {data.items.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 sm:gap-4 md:gap-5 relative w-full md:flex-1 justify-center py-2 md:py-0"
            >
              {/* Vertical Divider for desktop */}
              {index !== data.items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#D49A4D]/30"></div>
              )}

              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-[#D49A4D] flex items-center justify-center shrink-0 bg-[#1A1814]">
                <div className="scale-75 sm:scale-90 md:scale-100">
                  {statIconMap[stat.icon]}
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-[28px] sm:text-[32px] md:text-[42px] font-bold text-[#D49A4D] leading-none mb-1 md:mb-2 tracking-tight">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-gray-100 text-[12px] sm:text-[14px] md:text-[16px] font-medium whitespace-nowrap">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
