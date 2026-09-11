"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiMail, FiPhone, FiChevronDown, FiCalendar, FiUsers, FiMapPin, FiEdit3, FiArrowRight, FiShield } from "react-icons/fi";
import { TbClipboardText } from "react-icons/tb";
import { GetQuotePageData } from "../../types";

interface GetQuoteSectionProps {
  data: GetQuotePageData;
}

export default function GetQuoteSection({ data }: GetQuoteSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-8 md:py-12 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Text & Image */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1.5px] w-8 sm:w-10 bg-gradient-to-r from-transparent to-[#d87d15]" />
              <span className="text-[#d87d15] font-bold tracking-[0.15em] text-[13px] sm:text-[14px] uppercase">
                {data.smallTitle}
              </span>
              <div className="h-[1.5px] w-8 sm:w-10 bg-gradient-to-l from-transparent to-[#d87d15]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-[#0c1636] font-serif leading-[1.1] mb-6"
            >
              {data.titlePart1} <br />
              <span className="text-[#d87d15]">{data.titleHighlight}</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1.5 mb-6"
            >
              <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#d87d15]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#d87d15]"></div>
              <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#d87d15]"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#4b5563] text-[15px] sm:text-[16px] leading-[1.7] mb-10"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[24px] overflow-hidden"
            >
              <Image 
                src={data.image} 
                alt={data.titleHighlight}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#f5dbbc] shadow-[0px_10px_40px_rgba(216,125,21,0.08)] relative"
            >
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-full border border-[#f5dbbc] flex items-center justify-center mb-4 text-[#d87d15]">
                  <TbClipboardText className="w-8 h-8" />
                </div>
                <h3 className="text-[28px] sm:text-[32px] font-bold text-[#0c1636] font-serif text-center">
                  {data.formTitle}
                </h3>
                <div className="flex items-center gap-1.5 mt-4">
                  <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#d87d15]"></div>
                  <div className="w-2 h-2 rotate-45 bg-[#d87d15]"></div>
                  <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#d87d15]"></div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.fullName} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="text" placeholder={data.formPlaceholders.fullName} className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                      <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.email} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="email" placeholder={data.formPlaceholders.email} className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                      <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.phone} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="number" placeholder={data.formPlaceholders.phone} className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                      <FiPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.eventType} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select defaultValue="" className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563] appearance-none">
                        <option value="" disabled>{data.formPlaceholders.eventTypeSelect}</option>
                        {data.eventTypeOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.eventDate} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="text" placeholder={data.formPlaceholders.eventDate} className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563] date-picker-input" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")} />
                      <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                  
                  {/* Guest Count */}
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.guestCount} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="number" placeholder={data.formPlaceholders.guestCount} className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                      <FiUsers className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Event Location */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.eventLocation} <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="text" placeholder={data.formPlaceholders.eventLocation} className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                    <FiMapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.eventDetails} <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <textarea placeholder={data.formPlaceholders.eventDetails} className="w-full h-[100px] p-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563] resize-none"></textarea>
                    <FiEdit3 className="absolute right-4 bottom-4 text-gray-400 w-4 h-4" />
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels.budgetRange} {data.formLabels.budgetRangeOptionalText && <span className="text-gray-400 font-normal">{data.formLabels.budgetRangeOptionalText}</span>}</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full h-[40px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#d87d15] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563] appearance-none">
                      <option value="" disabled>{data.formPlaceholders.budgetRangeSelect}</option>
                      {data.budgetRangeOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" id="terms" className="mt-[3px] accent-[#d87d15]" />
                  <label htmlFor="terms" className="text-[13px] text-[#4b5563] leading-relaxed">
                    {data.formLabels.termsLabel} <Link href="/privacy-policy" className="text-[#d87d15] hover:underline font-semibold">{data.formLabels.termsLink1}</Link> {data.formLabels.termsAndText || "and"} <Link href="/terms-and-conditions" className="text-[#d87d15] hover:underline font-semibold">{data.formLabels.termsLink2}</Link>.
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full h-[44px] bg-[#d87d15] hover:bg-[#c67213] text-white rounded-[6px] text-[15px] font-bold transition-all flex items-center justify-center gap-3 group mt-4">
                  <span>{data.formLabels.submitBtn}</span>
                  <div className="bg-white rounded-full p-[4px] group-hover:translate-x-1 transition-transform">
                    <FiArrowRight className="text-[#d87d15] w-[14px] h-[14px] stroke-[3]" />
                  </div>
                </button>

                {/* Security Text */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <FiShield className="text-[#9ca3af] w-4 h-4" />
                  <span className="text-[13px] text-[#6b7280]">{data.formLabels.securityText}</span>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
