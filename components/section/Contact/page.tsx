"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, User, Tag, Edit3, Send, Navigation, Phone, ArrowUpRight } from "lucide-react";

import { ContactData } from "../../types";

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-[#D49A4D]" />;
      case 'Mail': return <Mail className="w-6 h-6 text-[#D49A4D]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#D49A4D]" />;
      default: return <PhoneCall className="w-6 h-6 text-[#D49A4D]" />;
    }
  };

  return (
    <section className="py-10 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {data.info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm border border-gray-100 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#F9F3EA] flex flex-col items-center justify-center shrink-0 border border-[#B88E52]/20 relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D49A4D]"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-[#080d1e]"></div>
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-[22px] font-bold text-[#080d1e] mb-2" style={{ fontFamily: 'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif' }}>{item.title}</h3>
                <div className="h-[2px] w-12 bg-[#e4a836] mb-3 rounded-full"></div>
                {item.icon === 'PhoneCall' ? (
                  <a href={`tel:${item.details.replace(/[^0-9+]/g, '')}`} className="text-[#6b7280] text-[16px] hover:text-[#D49A4D] transition-colors">{item.details}</a>
                ) : item.icon === 'Mail' ? (
                  <a href={`mailto:${item.details}`} className="text-[#6b7280] text-[16px] hover:text-[#D49A4D] transition-colors">{item.details}</a>
                ) : (
                  <p className="text-[#6b7280] text-[16px]">{item.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
          
          {/* Left: Form */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#B88E52] font-bold text-[14px] tracking-wide uppercase mb-3 block inline-flex items-center rounded-full bg-[#F9F3EA] px-5 py-2.5">
                {data.form.subtitle}
              </span>
              <h2 className="text-4xl md:text-[42px] font-bold text-[#080d1e] mb-6 leading-[1.08] tracking-[-1.2px]" style={{ fontFamily: 'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif' }}>
                {data.form.title.replace(data.form.highlightText, '')} 
                <span className="text-[#B88E52] font-light italic">
                  {data.form.highlightText}
                </span>
              </h2>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-px bg-[#D49A4D]/30 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#D49A4D]"></div>
                 </div>
              </div>

              <p className="text-[#6b7280] text-[16px] mb-8 leading-relaxed max-w-md">
                {data.form.description}
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[#9ca3af]">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:border-[#D49A4D] focus:ring-1 focus:ring-[#D49A4D] transition-all text-gray-700"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[#9ca3af]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Telephone" 
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:border-[#D49A4D] focus:ring-1 focus:ring-[#D49A4D] transition-all text-gray-700"
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[#9ca3af]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:border-[#D49A4D] focus:ring-1 focus:ring-[#D49A4D] transition-all text-gray-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[#9ca3af]">
                    <Tag className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:border-[#D49A4D] focus:ring-1 focus:ring-[#D49A4D] transition-all text-gray-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-6 left-4 text-[#9ca3af]">
                    <Edit3 className="w-5 h-5" />
                  </div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full pt-5 pl-12 pr-4 pb-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:border-[#D49A4D] focus:ring-1 focus:ring-[#D49A4D] transition-all text-gray-700 resize-none"
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="button"
                    className="inline-flex items-center gap-5 bg-[#e4a836] hover:bg-[#c9922e] text-white font-normal pl-8 pr-2 py-2 rounded-full transition-colors group cursor-pointer"
                  >
                    <span className="text-[17px]" style={{ fontFamily: '"Poppins", sans-serif' }}>
                      Send Message
                    </span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-[#e4a836] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] md:h-[500px] lg:h-auto rounded-2xl overflow-hidden relative border border-gray-100"
          >
            {/* We use an image to simulate the custom map from the design */}
            <div className="w-full h-full relative min-h-[400px] md:min-h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Map Location" 
                fill
                className="object-cover opacity-30 mix-blend-luminosity grayscale"
              />
              <div className="absolute inset-0 bg-blue-50/80 mix-blend-multiply"></div>
              
              {/* Map UI overlays to match design */}
              <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6">
                <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 flex justify-between items-start max-w-[300px]">
                  <div>
                    <h4 className="font-bold text-[14px]">123 Celebration Avenue</h4>
                    <p className="text-[12px] text-[#6b7280] mt-1">Mumbai, Maharashtra 400001</p>
                    <button className="text-[12px] text-blue-600 font-medium mt-2">View larger map</button>
                  </div>
                  <div className="w-8 h-8 rounded-full flex flex-col items-center justify-center bg-blue-50">
                    <Navigation className="w-4 h-4 text-blue-600 rotate-45" />
                  </div>
                </div>
              </div>
              
              {/* Map Pins */}
              <div className="absolute top-[40%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 bg-[#D49A4D] rounded-full flex items-center justify-center rounded-bl-none rotate-45 shadow-lg"
                >
                  <MapPin className="w-5 h-5 text-white -rotate-45" />
                </motion.div>
                <div className="bg-white mt-4 py-2 px-4 rounded-lg shadow-md text-[13px] font-bold whitespace-nowrap">
                  123 Celebration Avenue
                  <p className="text-[#6b7280] font-normal mt-0.5">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              {/* Other Map Elements */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-gray-600 hover:text-black font-bold text-xl">+</button>
                <button className="w-10 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-gray-600 hover:text-black font-bold text-xl">-</button>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
