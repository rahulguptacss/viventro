"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaBriefcase, FaRegCalendarAlt, FaMapMarkerAlt, FaBullhorn, FaUsers, FaRegClipboard } from "react-icons/fa";
import { FiMapPin, FiBriefcase, FiCalendar } from "react-icons/fi";
import { CareerJobsData, CareerJobItem } from "../../types";

interface CareerJobsProps {
  data: CareerJobsData;
}

const getJobIcon = (id: number) => {
  switch (id) {
    case 1:
      return <FaBriefcase className="w-6 h-6" />;
    case 2:
      return <FaRegClipboard className="w-6 h-6" />;
    case 3:
      return <FaBullhorn className="w-6 h-6" />;
    case 4:
      return <FaUsers className="w-6 h-6" />;
    default:
      return <FaBriefcase className="w-6 h-6" />;
  }
};

export default function CareerJobs({ data }: CareerJobsProps) {
  return (
    <section id="open-positions" className="pt-0 md:pt-8 pb-0 md:pb-10 bg-[#f9fafc] text-black">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-[#d38c2a]" />
            <span className="text-[#d38c2a] font-bold tracking-[0.15em] text-[13px] uppercase">
              {data.smallTitle}
            </span>
            <div className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-[#d38c2a]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[36px] lg:text-[38px] font-bold text-[#0d1430] font-serif tracking-tight leading-[1.1] mb-5"
          >
            {data.title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <div className="h-[1.5px] w-14 bg-gradient-to-l from-[#d38c2a] to-transparent opacity-70"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[#d38c2a]"></div>
            <div className="h-[1.5px] w-14 bg-gradient-to-r from-[#d38c2a] to-transparent opacity-70"></div>
          </motion.div>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-3.5">
          {data.items.map((job: CareerJobItem, index: number) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-[14px] p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between border border-[#fbebd4] shadow-[0px_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0px_12px_30px_rgba(211,140,42,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              
              {/* Left Side: Icon & Title */}
              <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-[48%] lg:pr-8 pb-5 lg:pb-0">
                <div className="w-[60px] h-[60px] rounded-full bg-[#fff4e6] flex items-center justify-center shrink-0 text-[#d38c2a] group-hover:bg-[#d38c2a] group-hover:text-white transition-colors duration-300">
                  {getJobIcon(job.id)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[25px] font-bold text-[#0d1430] mb-1.5 font-serif">{job.title}</h3>
                  <p className="text-[#4b5563] text-[15px] leading-[1.4] pr-4">{job.description}</p>
                </div>
              </div>

              {/* Middle Side: Details */}
              <div className="flex flex-col justify-center gap-3 w-full lg:w-[32%] lg:px-8 lg:border-l border-t lg:border-t-0 border-[#fbebd4] py-5 lg:py-1">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-[#d38c2a] text-[20px]" />
                  <span className="text-[#3a4468] text-[15.5px] font-medium">{job.location}</span>
                </div>
                <div className="w-full border-t border-dashed border-[#fbdcae]"></div>
                <div className="flex items-center gap-3">
                  <FiBriefcase className="text-[#d38c2a] text-[20px]" />
                  <span className="text-[#3a4468] text-[15.5px] font-medium">{job.type}</span>
                </div>
                <div className="w-full border-t border-dashed border-[#fbdcae]"></div>
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-[#d38c2a] text-[20px]" />
                  <span className="text-[#3a4468] text-[15.5px] font-medium">{job.experience}</span>
                </div>
              </div>

              {/* Right Side: Button */}
              <div className="w-full lg:w-[20%] flex items-center justify-center lg:pl-8 lg:border-l border-t lg:border-t-0 border-[#fbebd4] pt-5 lg:pt-1">
                <Link href={`/career/${job.id}`} className="cursor-pointer group/btn flex items-center justify-center gap-2 bg-transparent hover:bg-[#d38c2a] border border-[#d38c2a] text-[#d38c2a] hover:text-white px-6 py-2.5 rounded-lg font-bold transition-colors text-[14.5px] w-full">
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
