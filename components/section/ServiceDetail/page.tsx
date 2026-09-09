"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2,
  ClipboardCheck, Tent, Flower, Users, CalendarCheck, Diamond
} from "lucide-react";
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ServiceItem } from "../../types";
import appData from "../../data/data.json";

interface ServiceDetailProps {
  data: ServiceItem;
  allServices: ServiceItem[];
}

export default function ServiceDetail({ data, allServices }: ServiceDetailProps) {

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "ClipboardCheck": return <ClipboardCheck size={24} className="text-[#d49f53]" strokeWidth={2} />;
      case "Tent": return <Tent size={24} className="text-[#d49f53]" strokeWidth={2} />;
      case "Flower": return <Flower size={24} className="text-[#d49f53]" strokeWidth={2} />;
      case "Users": return <Users size={24} className="text-[#d49f53]" strokeWidth={2} />;
      case "CalendarCheck": return <CalendarCheck size={24} className="text-[#d49f53]" strokeWidth={2} />;
      case "Diamond": return <Diamond size={24} className="text-[#d49f53]" strokeWidth={2} />;
      default: return <Diamond size={24} className="text-[#d49f53]" strokeWidth={2} />;
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white text-black">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* Main Content Area */}
          <div className="w-full lg:w-[70%]">

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full rounded-[16px] overflow-hidden mb-6 shadow-md h-[220px] md:h-[300px] relative"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-[26px] sm:text-[32px] md:text-[44px] font-semibold text-[#0B1221] leading-[1.1] md:leading-[1.2]" style={{ fontFamily: '"Poppins", sans-serif' }}>
                {data.title}
              </h2>
              {data.subtitle && (
                <h3 className="text-[26px] sm:text-[32px] md:text-[44px] font-semibold text-[#d49f53] leading-[1.1] md:leading-[1.2]" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  {data.subtitle}
                </h3>
              )}

              {/* Divider */}
              <div className="flex items-center gap-2 mt-3 mb-4">
                <div className="h-[2px] w-32 md:w-40 bg-[#EACCA4]" />
                <div className="w-2 h-2 rotate-45 bg-[#EACCA4]" />
                <div className="h-[2px] w-32 md:w-40 bg-[#EACCA4]" />
              </div>

              <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-[1.8] font-medium">
                {data.detailedDescription || data.description}
              </p>
            </motion.div>

            {/* What We Offer */}
            {data.features && data.features.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                  }
                }}
                className="mb-8"
              >
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1221] mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  What We Offer
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {data.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)" }}
                      className="bg-[#FDFBF8] rounded-[16px] p-4 flex gap-3 items-start transition-all duration-300 border border-transparent hover:border-[#EADAC1]"
                    >
                      <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#EADAC1] flex items-center justify-center shrink-0 bg-transparent">
                        {getFeatureIcon(feature.icon)}
                      </div>
                      <div className="mt-1">
                        <h4 className="text-[15.5px] font-bold text-[#0F172A] mb-1 leading-snug">{feature.title}</h4>
                        <p className="text-[#64748B] font-medium text-[12px] leading-[1.6]">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Why Choose Us */}
            {data.whyChooseUs && data.whyChooseUs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center mt-0"
              >
                <div className="w-full md:w-[55%]">
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1221] mb-2" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    Why Choose Us?
                  </h3>
                  <div className="space-y-2">
                    {data.whyChooseUs.map((point, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-[#d49f53] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-[#4b5563] text-[13px] font-medium leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {data.sidebarImage && (
                  <div className="w-full md:w-[45%] rounded-[16px] overflow-hidden shadow-sm h-[180px] md:h-[220px] relative">
                    <Image
                      src={data.sidebarImage}
                      alt="Why Choose Us"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </motion.div>
            )}

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[30%] space-y-8 sticky top-32 self-start">

            {/* All Services Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B1221] rounded-[24px] p-8 shadow-xl"
            >
              <h3 className="text-white text-[22px] font-bold mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
                All Services
              </h3>
              <div className="flex flex-col gap-3">
                {allServices.map((service) => {
                  const isActive = service.id === data.id;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className={`flex items-center justify-between rounded-full py-3 px-5 transition-all duration-300 group ${isActive ? "bg-[#C46814]" : "bg-white hover:bg-gray-100"
                        }`}
                    >
                      <span className={`text-[14px] font-bold ${isActive ? "text-white" : "text-[#0B1221]"}`}>
                        {service.title}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-white" : "bg-[#EACCA4] group-hover:bg-[#C46814]"
                        }`}>
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-[#C46814]" : "text-white"}`} strokeWidth={3} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Get Started Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#FCFBF8] rounded-[24px] p-8 shadow-sm border border-[#f0e6d6]"
            >
              <h3 className="text-[#0F172A] text-[22px] font-bold" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Get Started
              </h3>
              <div className="w-10 h-[2px] bg-[#d49f53] mt-3 mb-8" />

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-[#d49f53] text-[20px]" />
                  <span className="text-[#1E293B] font-semibold text-[15.5px]">{appData.common.Footer.contact.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#d49f53] text-[20px]" />
                  <span className="text-[#1E293B] font-semibold text-[15.5px]">{appData.common.Footer.contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-[#d49f53] text-[20px]" />
                  <span className="text-[#1E293B] font-semibold text-[15.5px]">{appData.common.Footer.contact.address}</span>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center justify-between bg-[#070D19] text-white rounded-[12px] p-3 pl-5 hover:bg-[#1a2235] transition-colors group"
              >
                <span className="font-semibold text-[15.5px]">Get In Touch</span>
                <div className="w-10 h-10 rounded-full bg-[#d49f53] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-5 h-5 text-white -rotate-45" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>

            {/* Follow Us Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm flex flex-col items-start"
            >
              <h3 className="text-[#0B1221] text-[20px] font-bold mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Follow Us:
              </h3>
              <div className="flex items-center gap-3">
                <Link href={appData.common.Footer.socialLinks.find(s => s.platform === "facebook")?.url || "#"} className="w-10 h-10 rounded-full bg-[#0B1221] text-white flex items-center justify-center hover:bg-[#C46814] transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href={appData.common.Footer.socialLinks.find(s => s.platform === "instagram")?.url || "#"} className="w-10 h-10 rounded-full bg-[#0B1221] text-white flex items-center justify-center hover:bg-[#C46814] transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href={appData.common.Footer.socialLinks.find(s => s.platform === "linkedin")?.url || "#"} className="w-10 h-10 rounded-full bg-[#0B1221] text-white flex items-center justify-center hover:bg-[#C46814] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href={appData.common.Footer.socialLinks.find(s => s.platform === "youtube")?.url || "#"} className="w-10 h-10 rounded-full bg-[#0B1221] text-white flex items-center justify-center hover:bg-[#C46814] transition-colors">
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
