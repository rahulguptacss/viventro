"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AwardsCertificatesData {
  title: string;
  images: string[];
}

export default function AwardsCertificates({ data }: { data: AwardsCertificatesData }) {
  return (
    <section className="bg-[#FAF9F6] py-6 md:py-10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 text-center flex flex-col items-center">
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
              className="text-[20px] sm:text-[32px] md:text-[40px] font-bold text-[#0B1221] mx-3 sm:mx-4 leading-tight tracking-tight text-center"
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.images.map((imageSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] w-full group overflow-hidden rounded-[12px] shadow-lg border-4 border-white bg-white"
            >
              <Image
                src={imageSrc}
                alt={`Certificate ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
