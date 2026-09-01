"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AboutData } from "../../types";

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-[#0a1128] font-sans sm:py-20 lg:py-8">
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-7 lg:px-5">
        {/* ================= DESKTOP ================= */}
        <div className="relative hidden h-[700px] w-full lg:block">
          {/* RIGHT / BACK IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute right-0 top-0 z-0 h-[575px] w-[35%] overflow-hidden rounded-[30px]"
          >
            <Image
              src={data.images[1]}
              alt="Wedding event"
              fill
              priority
              className="object-cover"
              sizes="35vw"
            />
          </motion.div>

          {/* TOP WHITE CONTENT PANEL */}
          <div className="absolute left-0 top-0 z-10 h-[230px] w-[73%] rounded-br-[38px] bg-white pr-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#F9F3EA] px-5 py-2.5 text-[14px] font-bold uppercase tracking-wide text-[#B88E52]"
            >
              <Users className="h-5 w-5" strokeWidth={2} />
              {data.subtitle}
            </motion.div>

            <div className="mt-5 flex items-start justify-between gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="max-w-[600px] text-[48px] font-bold leading-[1.08] tracking-[-1.2px] text-[#080d1e] xl:text-[54px]"
                style={{
                  fontFamily:
                    'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif',
                }}
              >
                Turning Moments Into{" "}
                <span className="text-[#B88E52]">Lasting Memories</span>
              </motion.h2>

              {/* DESCRIPTION + BUTTON */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.55 }}
                className="mt-1 flex w-[294px] shrink-0 flex-col items-end"
              >
                <p className="text-right text-[16px] font-medium leading-[1.9] text-[#6b7280]">
                  At Viventro, we don't just plan events,
                  <br />
                  we create unforgettable experiences
                  <br />
                  that stay with you forever.
                </p>

                <Link
                  href="#"
                  className="group mt-4 inline-flex items-center gap-3 rounded-full bg-[#D49A4D] py-1.5 pl-5 pr-1.5 text-[16px] font-semibold text-white shadow-[0_7px_18px_rgba(212,154,77,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bd853e]"
                >
                  <span>{data.buttonText}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D49A4D] shadow-sm transition-transform duration-300 group-hover:rotate-6">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* GOLD DIVIDER */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="-mt-2 flex origin-left items-center gap-3"
            >
              <span className="h-[1.5px] w-[92px] bg-[#B88E52]" />
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#B88E52">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="h-[1.5px] w-[92px] bg-[#B88E52]" />
            </motion.div>

            {/* CONCAVE CORNER */}
            <svg
              className="absolute -bottom-[38px] right-0"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M30 0H0V30C0 13.4315 13.4315 0 30 0Z"
                fill="white"
              />
            </svg>
          </div>

          {/* LEFT BOTTOM IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="absolute bottom-[82px] left-0 z-20 h-[298px] w-[33%] overflow-hidden rounded-[28px] shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
          >
            <Image
              src={data.images[0]}
              alt="Event setup"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </motion.div>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-[125px] left-[35%] z-20 w-fit pr-6"
          >
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="flex w-full min-h-[72px] items-center gap-3 border-b border-[#e6e6e6] py-3 last:border-none"
              >
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#D49A4D] shadow-sm">
                  <Check className="h-[13px] w-[13px] text-white" strokeWidth={4} />
                </span>
                <span className="text-[16px] font-bold leading-[1.35] text-[#080d1e]">
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>

          {/* PLANNER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="absolute bottom-[48px] right-[7%] z-30 flex min-w-[313px] items-center gap-4 rounded-[20px] bg-white py-3.5 pl-3.5 pr-8 shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
          >
            <div className="relative h-[90px] w-[90px] shrink-0 rounded-full border-[3px] border-[#D49A4D] p-1">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={data.planner.image}
                  alt={data.planner.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[22px] font-bold tracking-tight text-[#080d1e]">
                {data.planner.name}
              </h4>
              <p className="mt-0.5 text-[12px] font-medium text-[#D49A4D]">
                {data.planner.role}
              </p>
              <span className="mt-2.5 h-[2px] w-7 rounded-full bg-[#D49A4D]" />
            </div>
          </motion.div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex flex-col gap-5 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F9F3EA] px-5 py-2.5 text-[14px] font-bold uppercase tracking-wide text-[#B88E52]">
              <Users className="h-5 w-5" strokeWidth={2} />
              {data.subtitle}
            </div>

            <h2
              className="mt-5 text-[32px] font-bold leading-[1.08] tracking-[-1px] text-[#080d1e] sm:text-[40px]"
              style={{
                fontFamily:
                  'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif',
              }}
            >
              Turning Moments Into{" "}
              <span className="text-[#B88E52]">Lasting Memories</span>
            </h2>

            <div className="mt-2 flex items-center gap-3">
              <span className="h-[1.5px] w-16 bg-[#B88E52]" />
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#B88E52">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="h-[1.5px] w-16 bg-[#B88E52]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative h-[290px] overflow-hidden rounded-[24px] shadow-lg sm:h-[360px]"
          >
            <Image
              src={data.images[1]}
              alt="Wedding event"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="max-w-[600px] text-[14px] font-medium leading-[1.8] text-[#6b7280]">
              At Viventro, we don't just plan events, we create unforgettable
              experiences that stay with you forever.
            </p>

            <Link
              href="#"
              className="group mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-[#D49A4D] py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bd853e]"
            >
              <span>{data.buttonText}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D49A4D] shadow-sm transition-transform duration-300 group-hover:rotate-6">
                <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border-b border-[#e6e6e6] py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D49A4D]">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                </span>
                <span className="text-[14px] font-bold leading-snug text-[#080d1e]">
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative mt-2 h-[390px] overflow-visible rounded-[24px] sm:h-[470px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-xl">
              <Image
                src={data.images[1]}
                alt="Wedding event"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="absolute -bottom-5 left-4 z-30 flex min-w-[245px] items-center gap-4 rounded-[20px] bg-white py-3 pl-3 pr-6 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:left-8"
            >
              <div className="relative h-[65px] w-[65px] shrink-0 rounded-full border-[3px] border-[#D49A4D] p-1">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={data.planner.image}
                    alt={data.planner.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-[18px] font-bold tracking-tight text-[#080d1e]">
                  {data.planner.name}
                </h4>
                <p className="mt-0.5 text-[12px] font-medium text-[#D49A4D]">
                  {data.planner.role}
                </p>
                <span className="mt-2 block h-[2px] w-7 rounded-full bg-[#D49A4D]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
