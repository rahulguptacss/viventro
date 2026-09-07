"use client";

import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { PrivacyPolicyPageData } from "../../types";

interface PrivacyPolicySectionProps {
  data: PrivacyPolicyPageData;
}

/* ── Shared easing curve (cubic-bezier as const tuple) ─────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Reusable animation variants ──────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6,  ease: EASE } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6,  ease: EASE } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1,    transition: { duration: 0.5, ease: EASE } },
};

const staggerContainer = (stagger = 0.08, delayStart = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delayStart },
  },
});

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: EASE } },
};

/* ── Diamond divider ──────────────────────────────────────────── */
function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d87d15]" />
      <div className="w-2 h-2 rotate-45 bg-[#d87d15]" />
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d87d15]" />
    </div>
  );
}

/* ── Contact icon components ─────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════ */
export default function PrivacyPolicySection({ data }: PrivacyPolicySectionProps) {
  const policyRef = useRef(null);
  const policyInView = useInView(policyRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ─── Hero Area ──────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-center"
          >
            {/* Left: text */}
            <div className="w-full lg:w-[45%]">
              {/* Small title badge — centered with dashes */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d87d15]" />
                <span className="text-[#d87d15] font-bold tracking-[0.18em] text-[12px] uppercase whitespace-nowrap">
                  {data.hero.smallTitle}
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d87d15]" />
              </motion.div>

              {/* Main heading — two separate block lines like screenshot */}
              <motion.h2
                variants={fadeUp}
                className="font-bold font-serif leading-[1.05] mb-5"
              >
                <span className="block text-[42px] sm:text-[56px] lg:text-[64px] text-[#0c1636]">
                  {data.hero.titlePart1}
                </span>
                <span className="block text-[42px] sm:text-[56px] lg:text-[64px] text-[#d87d15]">
                  {data.hero.titleHighlight}
                </span>
              </motion.h2>

              <motion.div variants={scaleIn}>
                <DiamondDivider className="justify-start mb-6" />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-[#4b5563] text-[15px] sm:text-[16px] leading-[1.85] max-w-lg"
              >
                {data.hero.description}
              </motion.p>

              {/* Floating badge */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="mt-8 inline-flex items-center gap-2.5 bg-[#fdf7ef] border border-[#f5dbbc] rounded-full px-5 py-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#d87d15] animate-pulse" />
                <span className="text-[13px] font-semibold text-[#0c1636]">
                  {data.hero.heroBadgeText}
                </span>
              </motion.div>
            </div>

            {/* Right: image with overlay decorations */}
            <motion.div
              variants={fadeRight}
              className="w-full lg:w-[55%] relative"
            >
              {/* Decorative background blob */}
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-[#d87d15]/8 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#0c1636]/5 blur-3xl pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-[260px] sm:h-[350px] lg:h-[420px] rounded-[24px] overflow-hidden shadow-xl"
              >
                <Image
                  src={data.hero.image}
                  alt="Privacy Policy"
                  fill
                  className="object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1636]/20 via-transparent to-transparent" />

                {/* Floating shield badge on image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-[14px] px-4 py-3 flex items-center gap-3 shadow-lg"
                >
                  <div className="w-9 h-9 rounded-full bg-[#fdf7ef] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#d87d15]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0c1636]">{data.hero.imageBadgeTitle}</p>
                    <p className="text-[10px] text-[#6b7280]">{data.hero.imageBadgeSubtext}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Animated Divider ─────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 origin-left"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-[#e5e7eb] to-[#d87d15]/30" />
          <div className="w-2 h-2 rotate-45 bg-[#d87d15]" />
          <div className="flex-1 h-px bg-gradient-to-l from-[#e5e7eb] to-[#d87d15]/30" />
        </motion.div>
      </div>

      {/* ─── Policy Items + Sidebar ──────────────────────────────── */}
      <section className="pt-10 md:pt-16 pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">

            {/* Left: policy list */}
            <motion.div
              ref={policyRef}
              variants={staggerContainer(0.07, 0.1)}
              initial="hidden"
              animate={policyInView ? "show" : "hidden"}
              className="w-full lg:w-[65%] flex flex-col gap-4"
            >
              {data.policies.map((policy) => (
                <motion.div
                  key={policy.id}
                  variants={cardVariant}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 8px 30px rgba(216,125,21,0.12)",
                    borderColor: "#d87d15",
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-stretch gap-0 border border-[#e8ddd0] rounded-[14px] bg-white shadow-sm overflow-hidden cursor-default"
                >
                  {/* Number column */}
                  <div className="flex items-center justify-center shrink-0 w-[72px] sm:w-[96px] py-5 bg-[#fdf9f4]">
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-[26px] sm:text-[32px] font-bold text-[#d87d15] font-serif leading-none"
                    >
                      {policy.id}
                    </motion.span>
                  </div>

                  {/* Vertical divider */}
                  <div className="w-px self-stretch bg-[#e8ddd0]" />

                  {/* Content */}
                  <div className="flex-1 px-5 sm:px-6 py-5">
                    <h3 className="text-[15px] sm:text-[17px] font-bold text-[#0c1636] mb-1.5 leading-snug">
                      {policy.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[#6b7280] leading-[1.75]">
                      {policy.description}
                    </p>
                  </div>

                  {/* Right accent bar — visible on hover via group */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    className="w-1 shrink-0 bg-gradient-to-b from-[#d87d15] to-[#f5a623] origin-top rounded-r-[14px]"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right: sidebar */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="w-full lg:w-[35%]"
            >
              <div className="sticky top-28 bg-[#fdf7ef] border border-[#f5dbbc] rounded-[20px] p-7 sm:p-8 text-center relative overflow-hidden min-h-[500px] flex flex-col">

                {/* Animated diamond top */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <DiamondDivider className="mb-6" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-[26px] sm:text-[30px] font-bold text-[#0c1636] font-serif leading-[1.2] mb-4"
                >
                  {data.sidebar.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <DiamondDivider className="mb-6" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 }}
                  className="text-[14px] sm:text-[15px] text-[#4b5563] leading-[1.85] relative z-10"
                >
                  {data.sidebar.description}
                </motion.p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Animated leaf/plant SVG */}
                <motion.svg
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.18, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] text-[#d87d15]"
                  viewBox="0 0 300 300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M150 280 C150 280 148 200 150 120" />
                  <path d="M150 220 C130 210 100 195 80 175" />
                  <path d="M80 175 C60 155 65 130 80 125 C95 120 110 135 110 155 C110 170 95 178 80 175Z" />
                  <path d="M80 175 L95 140" />
                  <path d="M88 162 C82 155 80 145 82 138" />
                  <path d="M150 200 C168 188 195 175 215 155" />
                  <path d="M215 155 C235 135 232 110 217 106 C202 102 188 118 190 138 C192 153 204 159 215 155Z" />
                  <path d="M215 155 L202 120" />
                  <path d="M208 143 C214 135 216 125 214 117" />
                  <path d="M150 165 C128 155 105 138 90 115" />
                  <path d="M90 115 C72 92 78 68 93 65 C108 62 120 78 118 100 C116 116 103 120 90 115Z" />
                  <path d="M90 115 L107 78" />
                  <path d="M96 103 C90 93 90 82 94 74" />
                  <path d="M150 145 C170 133 192 116 205 92" />
                  <path d="M205 92 C222 68 218 44 203 42 C188 40 175 56 178 78 C180 95 193 98 205 92Z" />
                  <path d="M205 92 L190 56" />
                  <path d="M200 80 C206 70 207 59 204 51" />
                  <path d="M150 120 C138 100 140 78 150 72 C160 66 170 80 168 100 C166 115 157 122 150 120Z" />
                  <path d="M150 120 L155 82" />
                  <path d="M150 245 C133 238 115 228 102 215" />
                  <path d="M102 215 C88 200 90 182 100 178 C110 174 122 184 122 198 C122 208 113 214 102 215Z" />
                  <path d="M150 250 C165 242 180 230 190 215" />
                  <path d="M190 215 C202 200 200 182 190 178 C180 174 168 184 168 198 C168 208 178 214 190 215Z" />
                </motion.svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Help / Contact Section ─────────────────────────────── */}
      <section className="bg-white pt-12 md:pt-14 pb-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="border border-[#e8d9c5] rounded-[20px] bg-[#fdf8f2] flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#e8d9c5] overflow-hidden shadow-sm"
          >
            {/* Left: heading */}
            <motion.div variants={fadeLeft} className="p-7 sm:p-8 lg:w-[28%]">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0c1636] font-serif leading-[1.25] mb-1">
                {data.helpSection.titlePart1}
              </h3>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#d87d15] font-serif leading-[1.25] mb-4">
                {data.helpSection.titleHighlight}
              </h3>
              <DiamondDivider className="justify-start mb-4" />
              <p className="text-[13px] sm:text-[14px] text-[#6b7280] leading-[1.75]">
                {data.helpSection.description}
              </p>
            </motion.div>

            {/* Call Us */}
            <motion.div
              variants={cardVariant}
              whileHover={{ backgroundColor: "#fdf7ef" }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col items-center justify-center p-7 sm:p-8 text-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full bg-[#fdf7ef] border border-[#f5dbbc] flex items-center justify-center text-[#d87d15] mb-1"
              >
                <PhoneIcon />
              </motion.div>
              <span className="text-[14px] font-bold text-[#0c1636]">
                {data.helpSection.contactInfo.call.label}
              </span>
              <div className="w-8 h-[2px] bg-[#d87d15] rounded-full" />
              <p className="text-[18px] sm:text-[20px] font-bold text-[#0c1636]">
                {data.helpSection.contactInfo.call.number}
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#6b7280]">
                {data.helpSection.contactInfo.call.timing}
              </p>
            </motion.div>

            {/* Email Us */}
            <motion.div
              variants={cardVariant}
              whileHover={{ backgroundColor: "#fdf7ef" }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col items-center justify-center p-7 sm:p-8 text-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full bg-[#fdf7ef] border border-[#f5dbbc] flex items-center justify-center text-[#d87d15] mb-1"
              >
                <EmailIcon />
              </motion.div>
              <span className="text-[14px] font-bold text-[#0c1636]">
                {data.helpSection.contactInfo.email.label}
              </span>
              <div className="w-8 h-[2px] bg-[#d87d15] rounded-full" />
              <p className="text-[16px] sm:text-[18px] font-bold text-[#d87d15] break-all">
                {data.helpSection.contactInfo.email.address}
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#6b7280]">
                {data.helpSection.contactInfo.email.response}
              </p>
            </motion.div>

            {/* Visit Us */}
            <motion.div
              variants={cardVariant}
              whileHover={{ backgroundColor: "#fdf7ef" }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col items-center justify-center p-7 sm:p-8 text-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full bg-[#fdf7ef] border border-[#f5dbbc] flex items-center justify-center text-[#d87d15] mb-1"
              >
                <LocationIcon />
              </motion.div>
              <span className="text-[14px] font-bold text-[#0c1636]">
                {data.helpSection.contactInfo.visit.label}
              </span>
              <div className="w-8 h-[2px] bg-[#d87d15] rounded-full" />
              <p className="text-[13px] sm:text-[14px] text-[#0c1636] leading-[1.7]">
                {data.helpSection.contactInfo.visit.address}
              </p>
            </motion.div>
          </motion.div>

          {/* Footer disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 flex items-start gap-3"
          >
            <motion.svg
              whileHover={{ scale: 1.2 }}
              className="w-5 h-5 text-[#d87d15] shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </motion.svg>
            <p className="text-[13px] text-[#6b7280] leading-[1.75]">
              {data.helpSection.footerText}
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
