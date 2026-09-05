"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Briefcase, Music, Cake, Plane, HeartHandshake,
  ArrowUpRight, PartyPopper
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ServicesProps {
  data: {
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    items: ServiceItem[];
  };
  theme?: 'dark' | 'light';
}

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Briefcase: <Briefcase className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Music: <Music className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Cake: <Cake className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Plane: <Plane className="w-5 h-5 text-white" strokeWidth={2.5} />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-white" strokeWidth={2.5} />,
};

export default function Services({ data, theme = 'dark' }: ServicesProps) {
  const isLight = theme === 'light';
  
  return (
    <section className={`py-12 lg:py-16 overflow-hidden ${isLight ? 'bg-white text-[#0B1221]' : 'bg-[#0a0b0e] text-white'}`}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center mb-10 gap-6 xl:gap-10">
          <div className="w-full xl:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <PartyPopper className="w-[18px] h-[18px] text-[#D49A4D]" />
              <span className="text-[15px] font-medium tracking-wide text-[#D49A4D]">{data.subtitle}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-[40px] xl:text-[44px] font-bold leading-[1.2] sm:leading-[1.1] tracking-tight ${isLight ? 'text-[#0B1221]' : ''}`}
            >
              {data.title.split(' ').slice(0, -2).join(' ')} <br className="hidden sm:block" />
              <span className="text-[#D49A4D]">{data.title.split(' ').slice(-2).join(' ')}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex origin-left items-center gap-3"
            >
              <span className="h-[1.5px] w-[140px] bg-[#D49A4D]/40" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#D49A4D">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="h-[1.5px] w-[140px] bg-[#D49A4D]/40" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-14 mt-0"
          >
            <p className={`max-w-full sm:max-w-[340px] leading-[1.7] text-[15px] ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
              {data.description}
            </p>
            <Link
              href="#"
              className="group shrink-0 inline-flex items-center gap-4 bg-[#D49A4D] hover:bg-[#bd853e] py-2 pl-8 pr-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 text-black text-[16px] shadow-[0_0_25px_rgba(212,154,77,0.25)]"
            >
              <span>{data.buttonText}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#D49A4D] shadow-sm transition-transform duration-300 group-hover:rotate-6">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-row rounded-[24px] overflow-hidden transition-all h-[200px] lg:h-[240px] ${
                isLight 
                  ? 'bg-[#131926] border border-transparent hover:shadow-[0_0_20px_rgba(212,154,77,0.15)]' 
                  : 'bg-[#0c0d10] border border-[#D49A4D]/20 hover:border-[#D49A4D]/50 hover:shadow-[0_0_20px_rgba(212,154,77,0.1)]'
              }`}
            >
              {/* LEFT SIDE (TEXT) */}
              <div className="flex-[0.55] p-5 sm:p-6 pr-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] sm:text-[18px] font-medium text-white leading-[1.3] mb-3 sm:mb-4 pr-1 sm:pr-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="group/link inline-flex w-fit items-center gap-2 bg-[#D49A4D] hover:bg-[#bd853e] py-1 pl-3 sm:pl-4 pr-1 rounded-full font-semibold transition-all text-black text-[12px] sm:text-[13px]"
                >
                  <span>See More</span>
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[#D49A4D] shadow-sm transition-transform duration-300 group-hover/link:rotate-6">
                    <ArrowUpRight className="h-3 w-3" strokeWidth={3} />
                  </span>
                </Link>
              </div>

              {/* RIGHT SIDE (IMAGE) */}
              <div className="flex-[0.45] relative p-3 pl-0 h-full">
                <div className="relative h-full w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />

                  {/* OVERLAY ICON */}
                  <div className="absolute top-2 right-2 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#D49A4D]/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                    {iconMap[service.icon]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
