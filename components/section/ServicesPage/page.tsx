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
}

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Briefcase: <Briefcase className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Music: <Music className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Cake: <Cake className="w-5 h-5 text-white" strokeWidth={2.5} />,
  Plane: <Plane className="w-5 h-5 text-white" strokeWidth={2.5} />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-white" strokeWidth={2.5} />,
};

export default function ServicesPageSection({ data }: ServicesProps) {
  return (
    <section className="py-12 lg:py-16 bg-white text-black overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-6 xl:gap-10">
          <div className="w-full xl:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <PartyPopper className="w-[18px] h-[18px] text-[#D36F15]" />
              <span className="text-[15px] font-extrabold tracking-[0.15em] text-[#D36F15] uppercase">{data.subtitle}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] sm:text-4xl md:text-[40px] xl:text-[42px] font-bold leading-[1.2] sm:leading-[1.1] tracking-tight text-[#0B1021]"
            >
              Explore Our Full Range of <br className="hidden sm:block" />
              <span className="text-[#D36F15]">Event Solutions</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex origin-left items-center gap-3"
            >
              <span className="h-[1.5px] w-[140px] bg-[#D36F15]/40" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#D36F15">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="h-[1.5px] w-[140px] bg-[#D36F15]/40" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-14 mt-4 xl:mt-0"
          >
            <p className="max-w-full sm:max-w-[400px] text-[#4b5563] leading-[1.7] text-[15px] font-medium">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {data.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-row bg-[#101010] border border-[#D36F15]/20 rounded-[24px] overflow-hidden hover:border-[#D36F15]/50 hover:shadow-[0_10px_30px_rgba(211,111,21,0.15)] transition-all h-[200px] lg:h-[240px]"
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
                  className="group/link inline-flex w-fit items-center gap-2 bg-[#D36F15] hover:bg-[#bd6313] py-1 pl-3 sm:pl-4 pr-1 rounded-full font-semibold transition-all text-white text-[12px] sm:text-[13px]"
                >
                  <span>See More</span>
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[#D36F15] shadow-sm transition-transform duration-300 group-hover/link:rotate-6">
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
                  <div className="absolute top-2 right-2 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#D36F15] flex items-center justify-center shadow-lg border-2 border-white/10">
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
