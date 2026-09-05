"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface TeamProps {
  data: {
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    members: TeamMember[];
  };
}

export default function Team({ data }: TeamProps) {
  return (
    <section className="py-8 lg:py-10 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
          <div className="max-w-2xl">
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-[#D4AF37]/10 w-fit px-3 py-1.5 rounded-[8px] mb-3"
            >
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[12px] font-bold tracking-widest text-[#D4AF37] uppercase">{data.subtitle}</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.1] text-black tracking-tight"
            >
              {data.title.split('Perfect Event').map((text, i, arr) => (
                <span key={i}>
                  {text}
                  {i === 0 && arr.length > 1 && <span className="text-[#D4AF37]">Perfect Event</span>}
                </span>
              ))}
            </motion.h2>

            {/* Subtle Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mt-4"
            >
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end gap-6 max-w-sm text-left lg:text-right shrink-0"
          >
            <p className="text-gray-500 leading-relaxed text-[15px]">
              {data.description}
            </p>
            <div>
              <Link
                href="#"
                className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#b5952f] text-white pl-6 pr-1.5 py-1.5 rounded-[30px] font-bold transition-colors text-[15px] group shadow-lg shadow-[#D4AF37]/20"
              >
                {data.buttonText}
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-[320px] lg:h-[340px] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-[22px] font-bold text-[#0A1128] mb-1.5 tracking-tight">{member.name}</h3>
                <p className="text-[#C68A3C] text-[15px] font-semibold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
