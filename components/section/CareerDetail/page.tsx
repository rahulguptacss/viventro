"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiUploadCloud, FiUser, FiCheckCircle, FiMail, FiPhone, FiChevronDown, FiMapPin, FiShield, FiArrowRight } from "react-icons/fi";
import { FaCheckCircle, FaMoneyBillWave, FaUsers, FaCalendarAlt, FaUserTie, FaMapMarkerAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { CareerDetailData } from "../../types";

interface CareerDetailProps {
  data: CareerDetailData;
}

export default function CareerDetail({ data }: CareerDetailProps) {
  const getOfferIcon = (iconName: string) => {
    switch (iconName) {
      case "user":
        return <FaUserTie className="w-10 h-10 text-[#d38c2a]" />;
      case "salary":
        return <FaMoneyBillWave className="w-10 h-10 text-[#d38c2a]" />;
      case "team":
        return <FaUsers className="w-10 h-10 text-[#d38c2a]" />;
      case "balance":
        return <FaCalendarAlt className="w-10 h-10 text-[#d38c2a]" />;
      default:
        return <FaCheckCircle className="w-10 h-10 text-[#d38c2a]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-8 md:py-12 bg-white text-black">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Title & Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          {/* Left: Info */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[1.5px] w-8 sm:w-10 bg-gradient-to-r from-transparent to-[#e18e26]" />
              <span className="text-[#e18e26] font-bold tracking-[0.15em] text-[13px] sm:text-[14px] uppercase">
                {data.smallTitle}
              </span>
              <div className="h-[1.5px] w-8 sm:w-10 bg-gradient-to-l from-transparent to-[#e18e26]" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-[#0c1636] font-serif leading-[1.1] mb-6"
            >
              {data.title}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 mb-5 md:mb-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#e18e26] w-[18px] h-[18px]" />
                  <span className="text-[#0c1636] font-semibold text-[15px]">{data.location}</span>
                </div>
                
                <div className="h-4 w-[1.5px] bg-[#e18e26]/30"></div>
                
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-[#e18e26] w-[18px] h-[18px]" />
                  <span className="text-[#0c1636] font-semibold text-[15px]">{data.type}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#e18e26] w-[18px] h-[18px]" />
                <span className="text-[#0c1636] font-semibold text-[15px]">{data.experience}</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1.5 mb-5 md:mb-8"
            >
              <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#e18e26]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#e18e26]"></div>
              <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#e18e26]"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[#4b5563] text-[15px] leading-[1.7]"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-[24px] overflow-hidden shadow-xl"
            >
              <Image 
                src={data.image} 
                alt={data.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: Details & Form */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          
          {/* Left Column: Details */}
          <div className="w-full lg:w-[62%] flex flex-col gap-6">
            
            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#0c1636] font-serif mb-3">{data.jobDescriptionTitle || 'Job Description'}</h3>
              <div className="flex items-center gap-1.5 mb-5">
                <div className="h-[1.5px] w-10 bg-[#e18e26]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#e18e26]"></div>
                <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#e18e26] to-transparent"></div>
              </div>
              <p className="text-[#3a4468] leading-relaxed text-[16px]">
                {data.jobDescription}
              </p>
            </motion.div>

            {/* Key Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#0c1636] font-serif mb-3">{data.responsibilitiesTitle || 'Key Responsibilities'}</h3>
              <div className="flex items-center gap-1.5 mb-5">
                <div className="h-[1.5px] w-10 bg-[#e18e26]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#e18e26]"></div>
                <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#e18e26] to-transparent"></div>
              </div>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4"
              >
                {data.responsibilities.map((item, idx) => (
                  <motion.li variants={itemVariants} key={idx} className="flex items-start gap-3">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#d38c2a] mt-2.5 shrink-0" />
                    <span className="text-[#4b5563] text-[15px] leading-[1.7]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#0c1636] font-serif mb-3">{data.requirementsTitle || 'Requirements'}</h3>
              <div className="flex items-center gap-1.5 mb-5">
                <div className="h-[1.5px] w-10 bg-[#e18e26]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#e18e26]"></div>
                <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#e18e26] to-transparent"></div>
              </div>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4"
              >
                {data.requirements.map((item, idx) => (
                  <motion.li variants={itemVariants} key={idx} className="flex items-start gap-3">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#d38c2a] mt-2.5 shrink-0" />
                    <span className="text-[#4b5563] text-[15px] leading-[1.7]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#0c1636] font-serif mb-3">{data.offerTitle || 'What We Offer'}</h3>
              <div className="flex items-center gap-1.5 mb-8">
                <div className="h-[1.5px] w-10 bg-[#e18e26]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#e18e26]"></div>
                <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#e18e26] to-transparent"></div>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {data.offer.map((item, idx) => (
                  <motion.div variants={itemVariants} key={idx} className="flex flex-col items-center text-center py-6 px-4 rounded-[12px] border border-[#fcefdc] bg-[#fffbf5] shadow-[0px_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0px_10px_20px_rgba(211,140,42,0.1)] hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-4">
                      {getOfferIcon(item.icon)}
                    </div>
                    <h4 className="text-[15px] font-bold text-[#0d1430] font-serif mb-2 leading-tight">{item.title}</h4>
                    <p className="text-[#6b7280] text-[12px] leading-[1.5]">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Application Form & Why Us */}
          <div className="w-full lg:w-[38%] flex flex-col gap-4">
            
            {/* Apply Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#fffcf8] rounded-2xl p-6 lg:p-8 border border-[#fbebd4]"
            >
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#0c1636] font-serif mb-3 leading-tight">
                {data.formTitle || 'Apply For This Position'}
              </h3>
              
              <div className="flex items-center gap-1.5 mb-5">
                <div className="h-[1.5px] w-10 bg-[#e18e26]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#e18e26]"></div>
                <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#e18e26] to-transparent"></div>
              </div>
              
              <form className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.fullName || 'Full Name'} <span className="text-red-500">*</span></label>
                  <input type="text" placeholder={data.formPlaceholders?.fullName || "Enter your full name"} className="w-full h-[38px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#e18e26] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.email || 'Email Address'} <span className="text-red-500">*</span></label>
                    <input type="email" placeholder={data.formPlaceholders?.email || "Enter your email"} className="w-full h-[38px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#e18e26] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.phone || 'Phone Number'} <span className="text-red-500">*</span></label>
                    <input type="tel" placeholder={data.formPlaceholders?.phone || "Enter your phone number"} className="w-full h-[38px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#e18e26] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.experience || 'Experience (Years)'} <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select defaultValue="" className="w-full h-[38px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#e18e26] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563] appearance-none">
                        <option value="" disabled>{data.formPlaceholders?.experienceSelect || "Select your experience"}</option>
                        {data.formExperienceOptions?.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.location || 'Current Location'} <span className="text-red-500">*</span></label>
                    <input type="text" placeholder={data.formPlaceholders?.location || "Enter your current location"} className="w-full h-[38px] px-4 rounded-[6px] border border-[#e5e7eb] focus:border-[#e18e26] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.resume || 'Resume / CV'} <span className="text-red-500">*</span></label>
                  <div className="border border-dashed border-[#e18e26]/40 bg-[#fffbf5] rounded-[6px] p-3 text-center cursor-pointer hover:bg-[#fff9f0] transition-colors flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                      <FiUploadCloud className="text-[#e18e26] w-[18px] h-[18px]" />
                      <div className="flex flex-col items-start text-left">
                        <span className="text-[13px] font-semibold text-[#e18e26]">{data.formLabels?.resumeDropText || 'Click to upload or drag and drop'}</span>
                        <span className="text-[11px] text-[#8b92a5]">{data.formLabels?.resumeHelpText || 'PDF, DOC, DOCX (Max. 5MB)'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#0c1636]">{data.formLabels?.coverLetter || 'Cover Letter'} <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea placeholder={data.formPlaceholders?.coverLetter || "Write a few lines about yourself..."} className="w-full h-[60px] p-3 rounded-[6px] border border-[#e5e7eb] focus:border-[#e18e26] focus:outline-none transition-colors text-[14px] bg-white text-[#4b5563] resize-none"></textarea>
                </div>
                
                <div className="flex items-start gap-2 pt-1">
                  <input type="checkbox" id="terms" className="mt-[3px] accent-[#e18e26]" />
                  <label htmlFor="terms" className="text-[12.5px] text-[#4b5563] leading-tight">
                    {data.formLabels?.termsLabel || 'I agree to the privacy policy and'} <a href="#" className="text-[#d87d15] hover:underline">{data.formLabels?.termsLink || 'terms of service'}</a>.
                  </label>
                </div>

                <button type="submit" className="w-full h-[38px] bg-[#d87d15] hover:bg-[#c67213] text-white rounded-[6px] text-[14px] font-bold transition-all flex items-center justify-center gap-2 group mt-2">
                  <span>{data.formLabels?.submitBtn || 'Submit Application'}</span>
                  <div className="bg-white rounded-full p-[3px] group-hover:translate-x-1 transition-transform">
                    <FiArrowRight className="text-[#d87d15] w-[12px] h-[12px] stroke-[3]" />
                  </div>
                </button>
                
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <FiShield className="text-[#22c55e] w-[13px] h-[13px]" />
                  <span className="text-[12px] text-[#6b7280] font-medium">{data.formLabels?.securityText || 'Your information is safe with us.'}</span>
                </div>
              </form>
            </motion.div>

            {/* Why Us Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#fffcf8] rounded-2xl p-6 lg:p-8 border border-[#fbebd4] relative overflow-hidden"
            >
              {data.whyUsTitle ? (
                <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#0c1636] font-serif mb-3 leading-tight" dangerouslySetInnerHTML={{ __html: data.whyUsTitle.replace('className', 'class') }} />
              ) : (
                <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#0c1636] font-serif mb-3 leading-tight">
                  Why Build Your Career <br className="hidden sm:block" /> With Viventro?
                </h3>
              )}
              
              <div className="flex items-center gap-1.5 mb-5">
                <div className="h-[1.5px] w-10 bg-[#e18e26]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#e18e26]"></div>
                <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#e18e26] to-transparent"></div>
              </div>
              
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2 relative z-10"
              >
                {data.whyUs.map((item, idx) => (
                  <motion.li variants={itemVariants} key={idx} className="flex items-start gap-4">
                    <FiCheckCircle className="text-[#e18e26] w-[22px] h-[22px] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#3a4468] leading-relaxed text-[15px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
