"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, Landmark, ConciergeBell, Music, Sparkles } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  data: {
    subtitle: string;
    title: string;
    description: string;
    image: string;
    features: Feature[];
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <CalendarDays className="w-9 h-9 text-[#D49A4D]" strokeWidth={2} />,
  MapPin: <Landmark className="w-9 h-9 text-[#D49A4D]" strokeWidth={2} />,
  Utensils: <ConciergeBell className="w-9 h-9 text-[#D49A4D]" strokeWidth={2} />,
  Music: <Music className="w-9 h-9 text-[#D49A4D]" strokeWidth={2} />,
};

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section className="pt-0 lg:pt-12 pb-4 lg:pb-8 bg-white text-black overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-start">

          {/* Left Image Section */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[350px] lg:h-[650px] w-full rounded-[32px] overflow-hidden"
            >
              <Image src={data.image} alt="Event setup" fill className="object-cover" />
            </motion.div>

            {/* Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 -left-4 lg:-left-8 bg-white rounded-[24px] p-6 pr-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-[#D49A4D]/20 flex items-center gap-5 max-w-[340px] z-10"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#D49A4D] flex items-center justify-center text-white">
                <Sparkles className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-gray-900 leading-[1.3] mb-1">Seamless Experiences, <br />Memories That Last</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">From concept to celebration,<br />we handle every detail with care.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-[55%] mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-1 mb-5"
            >
              <span className="text-[13px] font-bold tracking-[0.1em] text-[#D49A4D] uppercase">{data.subtitle}</span>
              <div className="flex items-center">
                <span className="h-[1.5px] w-14 bg-[#D49A4D]/70" />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#D49A4D" className="ml-2">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[46px] font-bold leading-[1.2] mb-1 text-gray-900 tracking-tight"
            >
              {data.title.split('Perfect Event').map((text, i) => (
                <span key={i}>
                  {text}
                  {i === 0 && <span className="text-[#D49A4D]">Perfect Event</span>}
                </span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-4 leading-relaxed text-[16px] max-w-xl"
            >
              {data.description}
            </motion.p>

            <div className="space-y-0">
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center py-1 border-b border-gray-100 last:border-0"
                >
                  <div className="w-[72px] h-[72px] shrink-0 rounded-[18px] flex items-center justify-center bg-[#FDF8F3] mr-3">
                    {iconMap[feature.icon]}
                  </div>
                  <span className="w-[1.5px] h-[40px] bg-[#D49A4D] mr-4 shrink-0"></span>
                  <div className="py-1">
                    <h4 className="text-[18px] font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-md">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}