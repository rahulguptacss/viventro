"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, Diamond, Calendar, Clock, MapPin, Phone, Mail, 
  ArrowRight, HeartHandshake, CheckCircle2, Search, Camera, Settings, Star,
  Gem, CalendarDays
} from "lucide-react";
import siteData from "../../data/data.json";

interface EventItem {
  id: number;
  title: string;
  category?: string;
  description: string;
  image: string;
  date: string;
  month: string;
  day?: string;
  location: string;
  time: string;
}

interface EventDetailProps {
  data: EventItem;
}

export default function EventDetail({ data }: EventDetailProps) {

  const customIcons = {
    rings: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c78b30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="15" r="4" />
        <circle cx="16" cy="15" r="4" />
        <path d="M12 11c1-2 4-2 4 0 0 2-4 4-4 4s-4-2-4-4c0-2 3-2 4 0z" />
      </svg>
    ),
    arch: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c78b30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22V8c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v14" />
        <path d="M4 10h16" />
        <path d="M12 4v6" />
        <path d="M8 10l-1 6M16 10l1 6" />
        <rect x="9" y="19" width="6" height="3" />
      </svg>
    ),
    tree: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c78b30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-6" />
        <path d="M9 22h6" />
        <path d="M12 16c-4 0-6-3-6-6 0-4 4-7 6-7s6 3 6 7c0 3-2 6-6 6z" />
        <path d="M12 3v4M9 5l1.5 1.5M15 5l-1.5 1.5" />
      </svg>
    ),
    cloche: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c78b30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18" />
        <path d="M4 16h16C20 10 16.5 6 12 6S4 10 4 16z" />
        <circle cx="12" cy="4" r="2" />
        <path d="M4 20h16" />
      </svg>
    ),
    camera: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c78b30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
        <path d="M8 7V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" />
        <circle cx="12" cy="13.5" r="3.5" />
        <circle cx="17.5" cy="10.5" r="1" fill="#c78b30" />
      </svg>
    )
  };

  const features = [
    { title: "Personalized Planning", desc: "Custom plans tailored to your style, culture and preferences.", icon: customIcons.rings },
    { title: "Stunning Venues", desc: "Handpicked venues that create the perfect ambiance.", icon: customIcons.arch },
    { title: "Creative Décor", desc: "Elegant themes and décor that bring your vision to life.", icon: customIcons.tree },
    { title: "Vendor Management", desc: "Trusted vendors and seamless coordination for a stress-free day.", icon: customIcons.cloche },
    { title: "Memorable Moments", desc: "Capturing every smile, tear and moment beautifully.", icon: customIcons.camera }
  ];

  const words = data.title.split(' ');
  const splitIndex = words.length >= 4 ? 2 : 1;
  const firstPart = words.slice(0, splitIndex).join(' ');
  const secondPart = words.slice(splitIndex).join(' ');

  return (
    <section className="py-8 md:py-12 bg-[#FAFAFA] text-[#0B1221]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* MAIN CONTENT AREA */}
          <div className="w-full lg:w-[68%]">
            
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-[250px] md:h-[400px] rounded-[16px] overflow-hidden mb-5 relative shadow-sm"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#D49A4D] font-bold tracking-widest text-[14px] uppercase">{data.category || "EVENT"}</span>
                <div className="flex items-center gap-1.5">
                  <div className="h-[1px] w-16 bg-[#D49A4D]" />
                  <div className="w-1.5 h-1.5 border-[1.5px] border-[#D49A4D] rotate-45" />
                </div>
              </div>

              <div className="inline-block mb-4 text-left w-full">
                <h2 className="text-[40px] md:text-[56px] font-extrabold text-[#0B1221] leading-[1.1] tracking-tight">
                  {firstPart} <br />
                  <span className="text-[#D49A4D]">{secondPart}</span>
                </h2>

                <div className="flex items-center gap-3 justify-start">
                  <div className="h-[1px] w-12 md:w-20 bg-[#D49A4D]/50" />
                  <Heart className="w-[18px] h-[18px] text-[#D49A4D]" strokeWidth={2} />
                  <div className="h-[1px] w-12 md:w-20 bg-[#D49A4D]/50" />
                </div>
              </div>

              <p className="text-gray-600 text-[16px] leading-[1.8] font-medium max-w-3xl">
                Your wedding day is a collection of beautiful moments that you will cherish forever. We take care of every detail, from elegant decor to seamless coordination, so you can relax and celebrate your love with your family and friends.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 mb-5"
            >
              {features.map((item, idx) => (
                <div key={idx} className="bg-[#FFF8EF] rounded-[16px] px-3 pt-4 pb-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="mb-2">
                    {item.icon}
                  </div>
                  <h4 className="text-[13.5px] font-bold text-[#111c38] mb-1.5 leading-snug">{item.title}</h4>
                  <p className="text-[#59637A] text-[12px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Event Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-[24px] font-bold text-[#0B1221]">Event Location</h3>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-12 bg-[#D49A4D]" />
                  <Heart className="w-3.5 h-3.5 text-[#D49A4D]" strokeWidth={2.5} />
                  <div className="h-[1px] w-12 bg-[#D49A4D]" />
                </div>
              </div>
              
              <div className="w-full h-[250px] bg-gray-200 rounded-[16px] overflow-hidden relative shadow-inner">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(data.location.replace('\n', ' '))}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </motion.div>

          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[32%] flex flex-col gap-8">
            
            {/* Event Details Card */}
            <div className="bg-[#FFFCF8] rounded-[16px] shadow-sm border border-[#F3E6D5] relative overflow-hidden">
              <div className="h-[6px] bg-[#c78b30] w-full absolute top-0 left-0"></div>
              
              <div className="p-7 pt-9">
                <div className="flex flex-col items-center justify-center mb-8">
                  <h3 className="text-[24px] font-extrabold text-[#111c38] mb-2">Event Details</h3>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="h-[1px] w-12 bg-[#c78b30]/60" />
                    <Heart className="w-4 h-4 text-[#c78b30]" strokeWidth={2.5} />
                    <div className="h-[1px] w-12 bg-[#c78b30]/60" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c78b30] flex items-center justify-center shrink-0 shadow-sm">
                      <Gem className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111c38] mb-0.5">Event Title</h4>
                      <p className="text-[#111c38] text-[14px]">{data.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c78b30] flex items-center justify-center shrink-0 shadow-sm">
                      <CalendarDays className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111c38] mb-0.5">Event Date</h4>
                      <p className="text-[#111c38] text-[14px]">{data.date} {data.month} 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c78b30] flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111c38] mb-0.5">Time</h4>
                      <p className="text-[#111c38] text-[14px]">{data.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c78b30] flex items-center justify-center shrink-0 shadow-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111c38] mb-0.5">Location</h4>
                      <p className="text-[#111c38] text-[14px]">{data.location.replace('\n', ' ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#FCF7F1] rounded-[16px] overflow-hidden shadow-sm border border-[#F3E6D5] flex flex-col">
              <div className="h-[200px] w-full relative">
                <Image 
                  src="/event/1.webp" 
                  alt="Contact Flowers" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="text-[20px] font-bold text-[#142240] text-left mb-4 leading-[1.3]">Let's Make Your<br/>Wedding Unforgettable</h3>
                <div className="flex items-center gap-2 justify-start mb-8">
                  <div className="h-[1px] w-12 bg-[#D49A4D]/60" />
                  <Heart className="w-4 h-4 text-[#D49A4D]" strokeWidth={2.5} />
                  <div className="h-[1px] w-20 bg-[#D49A4D]/60" />
                </div>

                <div className="flex flex-col gap-5 mb-8">
                  <div className="flex items-center gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#D49A4D" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    <span className="text-[#1A2B4C] font-semibold text-[14px]">{siteData.common.Footer.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#D49A4D" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-[#1A2B4C] font-semibold text-[14px]">{siteData.common.Footer.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#D49A4D" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-[#1A2B4C] font-semibold text-[14px]">{data.location.replace('\n', ' ')}</span>
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  className="flex items-center justify-between bg-[#D49A4D] text-white rounded-full p-2 pl-8 hover:bg-[#b57a26] transition-colors group shadow-md"
                >
                  <span className="font-semibold text-[15px]">Get In Touch</span>
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-5 h-5 text-[#D49A4D]" strokeWidth={2.5} />
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
