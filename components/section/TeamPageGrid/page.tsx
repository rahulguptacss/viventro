"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

import { TeamData } from "../../types";

interface TeamPageGridProps {
  data: TeamData;
}

export default function TeamPageGrid({ data }: TeamPageGridProps) {
  return (
    <section className="pt-4 pb-10 md:pt-8 md:pb-16 bg-[#FAF9F6] text-black">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3 bg-[#C46814]/10 rounded-full px-4 py-1.5"
          >
            <Users className="w-4 h-4 text-[#C46814]" />
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] text-[#C46814] uppercase font-sans">
              {data.subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] text-[#0B1221] tracking-tight mb-3"
            style={{ fontFamily: '"Inter", "Inter Fallback", sans-serif' }}
          >
            Meet The Team Behind <br className="hidden sm:block" /> Your{" "}
            <span className="text-[#C46814]">Perfect Event</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-[1px] w-12 sm:w-16 bg-[#C46814]" />
            <div className="text-[#C46814]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
              </svg>
            </div>
            <div className="h-[1px] w-12 sm:w-16 bg-[#C46814]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#4b5563] text-[15px] max-w-2xl font-medium"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.members.map((member, index) => (
            <Link href={`/our-team/${member.id}`} key={member.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[16px] overflow-hidden shadow-md group hover:-translate-y-2 transition-all duration-500 cursor-pointer h-full"
              >
                <div className="relative w-full aspect-[4/5] xl:aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-[24px] font-bold text-[#0B1221] mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-[#C46814] text-[15px] font-bold">{member.role}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
