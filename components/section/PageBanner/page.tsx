"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageBannerData } from "../../types";
import { Home, ChevronRight } from "lucide-react";

interface PageBannerProps {
  data: PageBannerData;
}

export default function PageBanner({ data }: PageBannerProps) {
  return (
    <section 
      className="relative flex h-[350px] w-full items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${data.backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          {data.title}
        </motion.h1>

        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex items-center space-x-2 text-sm font-medium md:text-base text-white/80"
        >
          {data.breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index === 0 && <Home className="mr-2 h-4 w-4 text-[#D4AF37]" />}
              <Link 
                href={crumb.href} 
                className="hover:text-[#D4AF37] transition-colors"
              >
                {crumb.label}
              </Link>
              {index < data.breadcrumbs.length - 1 && (
                <span className="mx-2 text-white/50">/</span>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
