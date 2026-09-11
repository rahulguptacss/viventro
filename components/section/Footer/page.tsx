"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

interface QuickLink {
  label: string;
  href: string;
}

interface FooterProps {
  data: {
    logo: string;
    logoImage: string;
    description: string;
    quickLinks: QuickLink[];
    socialLinks: { platform: string; url: string; }[];
    contact: {
      phone: string;
      email: string;
      address: string;
    };
    newsletter: {
      title: string;
      description: string;
    };
    copyright: string;
    labels: {
      followUs: string;
      ourEvents: string;
      contactUs: string;
      callUs: string;
      mailUs: string;
      officeLocation: string;
      newsletterPlaceholder: string;
      subscribeBtn: string;
      newsletterDisclaimer: string;
    };
  };
}

export default function Footer({ data }: FooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(
    "events"
  );

  const toggleSection = (section: string) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-[#050505] pt-1 text-white"
    >

      {/* =========================================================
          DESKTOP FOOTER
      ========================================================= */}
      <div className="hidden lg:block">

        <div className="mx-auto max-w-[1440px] px-8 pb-14 pt-12 xl:px-10">

          <div className="grid grid-cols-[1.05fr_1fr_1fr_1.15fr]">

            {/* =================================================
                COLUMN 1
            ================================================= */}
            <div className="relative pr-10">

              {/* Logo */}
              <Link
                href="/"
                className="inline-flex items-center"
              >
                <Image
                  src={data.logoImage}
                  alt="Viventro Logo"
                  width={300}
                  height={80}
                  priority
                  className="h-[70px] w-auto object-contain"
                />
              </Link>

              {/* Description */}
              <p className="mt-6 max-w-[245px] text-[14px] leading-[1.75] text-[#bdbdbd]">
                {data.description}
              </p>

              {/* Divider */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#D4AF37]" />

                <div className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

                <div className="h-px flex-1 bg-[#D4AF37]" />
              </div>

              {/* Follow Us */}
              <h4 className="mb-5 text-[13px] font-medium">{data.labels.followUs}</h4>

              <div className="flex gap-3">
                <a
                  href={data.socialLinks.find(s => s.platform === 'facebook')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black" target="_blank" rel="noopener noreferrer"
                >
                  <FaFacebook className="h-[17px] w-[17px]" />
                </a>

                <a
                  href={data.socialLinks.find(s => s.platform === 'instagram')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black" target="_blank" rel="noopener noreferrer"
                >
                  <FaInstagram className="h-[17px] w-[17px]" />
                </a>

                <a
                  href={data.socialLinks.find(s => s.platform === 'linkedin')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black" target="_blank" rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-[17px] w-[17px]" />
                </a>

                <a
                  href={data.socialLinks.find(s => s.platform === 'youtube')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black" target="_blank" rel="noopener noreferrer"
                >
                  <FaYoutube className="h-[17px] w-[17px]" />
                </a>
              </div>

              {/* Vertical divider */}
              <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
            </div>

            {/* =================================================
                COLUMN 2 - EVENTS
            ================================================= */}
            <div className="relative px-10">

              <div className="flex items-center gap-3">
                <Calendar
                  className="h-8 w-8 text-[#D4AF37]"
                  strokeWidth={1.5}
                />

                <h4 className="text-[15px] font-semibold">{data.labels.ourEvents}</h4>
              </div>

              <div className="mt-4 h-[2px] w-12 bg-[#D4AF37]" />

              <ul className="mt-5">
                {data.quickLinks.map((link, index) => (
                  <li
                    key={index}
                    className="border-b border-white/[0.08] last:border-0"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 py-3.5 text-[13px] text-[#d1d1d1] transition-all hover:text-[#D4AF37]"
                    >
                      <ArrowRight
                        className="h-[17px] w-[17px] shrink-0 text-[#D4AF37] transition-transform group-hover:translate-x-1"
                      />

                      <span className="whitespace-nowrap">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
            </div>

            {/* =================================================
                COLUMN 3 - CONTACT
            ================================================= */}
            <div className="px-10">

              <div className="flex items-center gap-3">
                <Phone
                  className="h-8 w-8 text-[#D4AF37]"
                  strokeWidth={1.5}
                />

                <h4 className="text-[15px] font-semibold">{data.labels.contactUs}</h4>
              </div>

              <div className="mt-4 h-[2px] w-12 bg-[#D4AF37]" />

              <div className="mt-6 space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#D4AF37]/25 to-transparent">
                    <Phone className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <h5 className="text-[13px] font-medium text-white">{data.labels.callUs}</h5>

                    <a href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`} className="mt-1 block text-[13px] text-[#bdbdbd] hover:text-[#D4AF37] transition-colors">
                      {data.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#D4AF37]/25 to-transparent">
                    <Mail className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <h5 className="text-[13px] font-medium text-white">{data.labels.mailUs}</h5>

                    <a href={`mailto:${data.contact.email}`} className="mt-1 block text-[13px] text-[#bdbdbd] hover:text-[#D4AF37] transition-colors">
                      {data.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#D4AF37]/25 to-transparent">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <h5 className="text-[13px] font-medium text-white">{data.labels.officeLocation}</h5>

                    <p className="mt-1 max-w-[200px] text-[13px] leading-[1.7] text-[#bdbdbd]">
                      {data.contact.address}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* =================================================
                COLUMN 4 - NEWSLETTER
            ================================================= */}
            <div className="pl-4">

              <div className="rounded-[16px] border border-[#D4AF37] p-6 xl:p-7">

                <div className="flex items-center gap-3">
                  <Send
                    className="h-8 w-8 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />

                  <h4 className="text-[15px] font-semibold">
                    {data.newsletter.title}
                  </h4>
                </div>

                <div className="mt-4 h-[2px] w-12 bg-[#D4AF37]" />

                <p className="mt-6 text-[13px] leading-[1.75] text-[#c3c3c3]">
                  {data.newsletter.description}
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-6 space-y-4"
                >
                  <input
                    type="email"
                    placeholder={data.labels.newsletterPlaceholder}
                    required
                    className="h-[47px] w-full rounded-full border border-white/20 bg-transparent px-5 text-[13px] text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-[#D4AF37]"
                  />

                  <button
                    type="submit"
                    className="group flex h-[47px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#efbd38] to-[#d39a20] text-[14px] font-bold text-black shadow-[0_8px_25px_rgba(212,175,55,0.18)] transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    {data.labels.subscribeBtn}

                    <ArrowRight
                      className="h-4 w-4 -rotate-45 transition-transform group-hover:rotate-0"
                    />
                  </button>
                </form>

                <div className="mt-5 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#D4AF37]" />

                  <span className="text-[11px] text-[#a9a9a9]">{data.labels.newsletterDisclaimer}</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Desktop Copyright */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-8 px-8 py-5">

            <div className="h-px w-[100px] bg-gradient-to-r from-transparent to-[#D4AF37]" />

            <p className="text-center text-[13px] text-[#a5a5a5]">
              {data.copyright}
            </p>

            <div className="h-px w-[100px] bg-gradient-to-l from-transparent to-[#D4AF37]" />

          </div>
        </div>
      </div>


      {/* =========================================================
          MOBILE FOOTER
      ========================================================= */}
      <div className="block lg:hidden">

        <div className="px-3 pb-8 pt-10 sm:px-5">

          <div className="mx-auto max-w-[620px] rounded-[12px] border border-white/10 bg-[#050608] px-4 py-6 sm:px-6 sm:py-7">

            {/* ================================================
                LOGO + DESCRIPTION
            ================================================= */}
            <div>

              <Link
                href="/"
                className="inline-flex items-center"
              >
                <Image
                  src={data.logoImage}
                  alt="Viventro Logo"
                  width={300}
                  height={80}
                  className="h-[62px] w-auto object-contain sm:h-[70px]"
                />
              </Link>

              <p className="mt-5 max-w-[520px] text-[14px] leading-[1.75] text-[#c0c0c0] sm:text-[15px]">
                {data.description}
              </p>

              {/* Gold divider */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#D4AF37]" />

                <div className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

                <div className="h-px flex-1 bg-[#D4AF37]" />
              </div>

              {/* Follow */}
              <h4 className="mb-4 text-[13px] font-medium">{data.labels.followUs}</h4>

              <div className="flex gap-3">
                <a
                  href={data.socialLinks.find(s => s.platform === 'facebook')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white" target="_blank" rel="noopener noreferrer"
                >
                  <FaFacebook className="h-[17px] w-[17px]" />
                </a>

                <a
                  href={data.socialLinks.find(s => s.platform === 'instagram')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white" target="_blank" rel="noopener noreferrer"
                >
                  <FaInstagram className="h-[17px] w-[17px]" />
                </a>

                <a
                  href={data.socialLinks.find(s => s.platform === 'linkedin')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white" target="_blank" rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-[17px] w-[17px]" />
                </a>

                <a
                  href={data.socialLinks.find(s => s.platform === 'youtube')?.url || '#'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-white" target="_blank" rel="noopener noreferrer"
                >
                  <FaYoutube className="h-[17px] w-[17px]" />
                </a>
              </div>
            </div>


            {/* ================================================
                MOBILE ACCORDION - EVENTS
            ================================================= */}
            <div className="mt-7 overflow-hidden rounded-[10px] border border-[#D4AF37]/60">

              <button
                type="button"
                onClick={() => toggleSection("events")}
                className="flex w-full items-center justify-between bg-[#0a0b0d] px-4 py-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <Calendar
                    className="h-7 w-7 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />

                  <span className="text-[15px] font-medium">{data.labels.ourEvents}</span>
                </span>

                <ChevronDown className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 ${openSection === "events" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                  {openSection === "events" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3">


                  {data.quickLinks.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      className="group flex items-center gap-3 border-b border-white/[0.08] py-3 text-[13px] text-[#d0d0d0] last:border-0"
                    >
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#D4AF37] transition-transform group-hover:translate-x-1" />

                      <span className="whitespace-nowrap">{link.label}</span>
                    </Link>
                  ))}

                
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>


            {/* ================================================
                MOBILE ACCORDION - CONTACT
            ================================================= */}
            <div className="mt-3 overflow-hidden rounded-[10px] border border-[#D4AF37]/60">

              <button
                type="button"
                onClick={() => toggleSection("contact")}
                className="flex w-full items-center justify-between bg-[#0a0b0d] px-4 py-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <Phone
                    className="h-7 w-7 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />

                  <span className="text-[15px] font-medium">{data.labels.contactUs}</span>
                </span>

                <ChevronDown className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 ${openSection === "contact" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                  {openSection === "contact" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3">


                  {/* Phone */}
                  <div className="flex items-center gap-3 border-b border-white/[0.08] py-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#15120a]">
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                    </div>

                    <div>
                      <h5 className="text-[13px] font-medium">{data.labels.callUs}</h5>

                      <a href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`} className="mt-0.5 block text-[13px] text-[#aaa] hover:text-[#D4AF37] transition-colors">
                        {data.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 border-b border-white/[0.08] py-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#15120a]">
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                    </div>

                    <div>
                      <h5 className="text-[13px] font-medium">{data.labels.mailUs}</h5>

                      <a href={`mailto:${data.contact.email}`} className="mt-0.5 block break-all text-[13px] text-[#aaa] hover:text-[#D4AF37] transition-colors">
                        {data.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 py-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#15120a]">
                      <MapPin className="h-5 w-5 text-[#D4AF37]" />
                    </div>

                    <div>
                      <h5 className="text-[13px] font-medium">{data.labels.officeLocation}</h5>

                      <p className="mt-0.5 text-[13px] leading-[1.6] text-[#aaa]">
                        {data.contact.address}
                      </p>
                    </div>
                  </div>

                
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>


            {/* ================================================
                MOBILE ACCORDION - NEWSLETTER
            ================================================= */}
            <div className="mt-3 overflow-hidden rounded-[10px] border border-[#D4AF37]/60">

              <button
                type="button"
                onClick={() => toggleSection("newsletter")}
                className="flex w-full items-center justify-between bg-[#0a0b0d] px-4 py-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <Send
                    className="h-7 w-7 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />

                  <span className="text-[15px] font-medium">
                    {data.newsletter.title}
                  </span>
                </span>

                <ChevronDown className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 ${openSection === "newsletter" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                  {openSection === "newsletter" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5">


                  <p className="mt-4 text-[13px] leading-[1.75] text-[#c0c0c0]">
                    {data.newsletter.description}
                  </p>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-5 space-y-4"
                  >
                    <input
                      type="email"
                      placeholder={data.labels.newsletterPlaceholder}
                      required
                      className="h-[47px] w-full rounded-full border border-white/20 bg-transparent px-5 text-[13px] text-white outline-none placeholder:text-[#888] focus:border-[#D4AF37]"
                    />

                    <button
                      type="submit"
                      className="flex h-[47px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#efbd38] to-[#d39a20] text-[14px] font-bold text-black shadow-[0_8px_25px_rgba(212,175,55,0.15)] cursor-pointer"
                    >
                      {data.labels.subscribeBtn}

                      <ArrowRight className="h-4 w-4 -rotate-45" />
                    </button>
                  </form>

                  <div className="mt-5 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-[#D4AF37]" />

                    <span className="text-[11px] text-[#a5a5a5]">{data.labels.newsletterDisclaimer}</span>
                  </div>

                
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>


            {/* ================================================
                MOBILE COPYRIGHT
            ================================================= */}
            <div className="mt-7 border-t border-white/10 pt-5">

              <div className="flex items-center justify-center gap-3">

                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />

                <div className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />

              </div>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-[#999] sm:text-[12px]">
                {data.copyright}
              </p>

            </div>

          </div>
        </div>
      </div>

    </motion.footer>
  );
}