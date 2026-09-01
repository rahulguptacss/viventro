"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Clock, CalendarCheck, Cake, Music } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  category?: string;
  description: string;
  buttonText?: string;
  image: string;
  date: string;
  month: string;
  day?: string;
  location: string;
  time: string;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "WEDDING": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="5"></circle>
      <path d="M12 10L14 7L12 4L10 7L12 10Z"></path>
    </svg>
  ),
  "BIRTHDAY": <Cake className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />,
  "LIVE CONCERT": <Music className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
};

interface EventsProps {
  data: {
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    items: EventItem[];
  };
}

export default function UpcomingEvents({ data }: EventsProps) {
  return (
    <section className="pt-12 pb-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="border border-[#D4AF37] rounded-md p-1 flex items-center justify-center">
                <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
              </div>
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#D4AF37] uppercase">UPCOMING EVENTS</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[28px] sm:text-4xl md:text-[52px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight text-white"
            >
              Discover Memorable And <br />
              Exciting <span className="text-[#D4AF37]">Events</span> Near You
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex items-center mt-4 md:mt-8 gap-3 origin-left"
            >
              <span className="h-[2px] w-12 bg-[#D4AF37]/80 rounded-full"></span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="h-[2px] w-32 bg-[#D4AF37]/80 rounded-full"></span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start md:items-end gap-3 md:gap-5 max-w-[380px] text-left md:text-right"
          >
            <p className="text-gray-400 leading-relaxed text-[15px]">
              {data.description}
            </p>
            <div>
              <Link 
                href="#" 
                className="group shrink-0 inline-flex items-center gap-4 bg-[#D4AF37] hover:bg-[#bd853e] py-2 pl-8 pr-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 text-black text-[16px] shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
              >
                <span>{data.buttonText}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-transform duration-300 group-hover:rotate-6">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-6">
          {data.items.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-row bg-[#050505] border border-[#D4AF37]/30 rounded-[16px] md:rounded-[24px] p-2 sm:p-3 md:px-4 md:py-2.5 gap-2 sm:gap-4 xl:gap-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 hover:border-[#D4AF37]/80 hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.25)]"
            >
              {/* Event Image */}
              <div className="relative h-[140px] sm:h-[160px] lg:h-[180px] w-[110px] sm:w-[140px] lg:w-[280px] xl:w-[320px] rounded-[10px] md:rounded-[16px] overflow-hidden shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Right Content Wrapper (Content + Meta) */}
              <div className="flex-1 flex flex-row gap-3 sm:gap-4 md:gap-6 min-w-0 py-1 lg:py-2">
                
                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-start lg:justify-center min-w-0 xl:pr-2">
                  <div>
                    <div className="flex items-center gap-1.5 lg:gap-2 mb-1.5 lg:mb-2">
                      <div className="scale-75 lg:scale-100 origin-left">
                        {event.category && categoryIcons[event.category] ? categoryIcons[event.category] : categoryIcons["WEDDING"]}
                      </div>
                      <span className="text-[10px] sm:text-[11px] lg:text-[13px] font-semibold lg:font-bold text-[#D4AF37] tracking-wider lg:tracking-widest uppercase truncate">{event.category || "EVENT"}</span>
                    </div>
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[22px] font-medium lg:font-bold text-white mb-1.5 lg:mb-1.5 leading-snug lg:truncate">{event.title}</h3>
                    <p className="text-gray-400 text-[11px] sm:text-[12px] xl:text-[15px] font-light lg:font-normal leading-snug lg:leading-relaxed mb-2 lg:mb-4 line-clamp-3 lg:line-clamp-none pr-2 lg:pr-0 max-w-xl">{event.description}</p>
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center gap-1 lg:gap-2 text-[12px] sm:text-[13px] lg:text-[15px] text-[#D4AF37] font-semibold group/link w-max"
                  >
                    {event.buttonText || "Buy Ticket"}
                    <ArrowUpRight className="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Divider (Hidden on very small screens, visible on lg+) */}
                <div className="hidden lg:block w-[1px] self-stretch bg-[#D4AF37]/20 lg:bg-white/10 my-2 lg:my-4"></div>

                {/* Event Details (Date/Location) */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-3 sm:gap-4 lg:gap-6 xl:gap-10 shrink-0 w-[80px] sm:w-[90px] lg:w-auto xl:pr-6 lg:pl-2 py-0 lg:py-0">
                  
                  {/* Date Box */}
                  <div className="flex flex-col items-center justify-center w-full lg:w-[120px] xl:w-[130px] h-[75px] sm:h-[75px] lg:h-[140px] xl:h-[150px] rounded-[6px] lg:rounded-[16px] border border-[#D4AF37]/20 lg:border-[#D4AF37]/30 bg-[#050505] shrink-0">
                    <span className="text-[22px] sm:text-[24px] lg:text-[46px] xl:text-[52px] font-semibold lg:font-bold text-[#D4AF37] leading-none mb-0.5 lg:mb-2">{event.date}</span>
                    <span className="text-[9px] sm:text-[10px] lg:text-[15px] xl:text-[17px] font-medium lg:font-bold text-white uppercase tracking-wider mb-0.5 lg:mb-2">{event.month}</span>
                    <span className="text-[7px] sm:text-[8px] lg:text-[10px] xl:text-[11px] font-medium lg:font-medium text-gray-400 uppercase tracking-widest">{event.day || "SATURDAY"}</span>
                  </div>
                  
                  {/* Location & Time */}
                  <div className="flex flex-col justify-center gap-2 lg:gap-6 xl:gap-8 w-full lg:min-w-[160px] xl:min-w-[180px]">
                    <div className="flex items-start gap-1.5 lg:gap-4">
                      <MapPin className="w-3 h-3 lg:w-5 lg:h-5 text-[#D4AF37] shrink-0 lg:mt-0.5" strokeWidth={1.5} />
                      <span className="text-[8.5px] sm:text-[10px] lg:text-[15px] xl:text-[16px] text-gray-300 lg:text-white leading-tight lg:leading-relaxed whitespace-pre-line text-left">{event.location}</span>
                    </div>
                    <div className="flex items-start gap-1.5 lg:gap-4">
                      <Clock className="w-3 h-3 lg:w-5 lg:h-5 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
                      <span className="text-[8.5px] sm:text-[10px] lg:text-[15px] xl:text-[16px] text-gray-300 lg:text-white text-left">{event.time}</span>
                    </div>
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
