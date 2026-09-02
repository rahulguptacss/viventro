"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Mail,
  Phone,
  Globe,
  User,
  Settings,
  Medal,
  Briefcase,
  Trophy,
  GraduationCap,
  Award,
} from "lucide-react";
import { TeamMember } from "../../types";

interface TeamDetailProps {
  data: TeamMember;
}

export default function TeamDetail({ data }: TeamDetailProps) {
  const firstName = data.name?.split(" ")[0] || "Rohit";

  return (
    <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16 bg-[#FAF9F6] text-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP PROFILE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ================= IMAGE ================= */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mt-4 ml-4 sm:mt-6 sm:ml-6 mb-12 sm:mb-16"
            >

              {/* Decorative dots */}
              <div
                className="
                  absolute
                  top-12 -left-8
                  sm:top-16 sm:-left-12
                  w-16 sm:w-20
                  h-48 sm:h-64
                  opacity-30
                  bg-[radial-gradient(#C46814_2px,transparent_2px)]
                  [background-size:12px_12px] sm:[background-size:14px_14px]
                  pointer-events-none
                "
              />

              {/* Main Image Container */}
              <div
                className="
                  relative
                  z-10
                  w-full
                  overflow-hidden
                  rounded-tl-[64px] sm:rounded-tl-[80px] 
                  rounded-tr-xl sm:rounded-tr-2xl
                  rounded-br-xl sm:rounded-br-2xl
                  rounded-bl-xl sm:rounded-bl-2xl
                  border-[3px] sm:border-[4px] border-[#C46814] 
                  bg-white
                  shadow-[0_12px_35px_rgba(11,18,33,0.15)]
                "
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Contact strip - Wider and Overlapping */}
              <div
                className="
                  absolute
                  -bottom-6 sm:-bottom-8
                  -left-[4%] sm:-left-[5%]
                  w-[108%] sm:w-[110%]
                  z-20
                  bg-[#C46814]
                  text-white
                  rounded-[16px] sm:rounded-[20px]
                  px-1 sm:px-2
                  py-4 sm:py-5
                  grid
                  grid-cols-3
                  divide-x
                  divide-white/30
                  shadow-[0_15px_40px_rgba(196,104,20,0.25)]
                "
              >

                  {/* Email */}
                  <a
                    href={`mailto:${data.email || "hello@eventora.com"}`}
                    className="
                      flex
                      items-center
                      gap-2.5 sm:gap-3
                      px-2 sm:px-4
                      min-w-0
                      justify-center
                    "
                  >
                    <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div className="min-w-0 flex flex-col justify-center">
                      <span className="block text-[13px] sm:text-[15px] font-medium">
                        Email
                      </span>

                      <span className="block text-[10px] sm:text-[12px] font-bold truncate">
                        {data.email || "hello@eventora.com"}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${data.phone || "+1 123 456 7890"}`}
                    className="
                      flex
                      items-center
                      gap-2.5 sm:gap-3
                      px-2 sm:px-4
                      min-w-0
                      justify-center
                    "
                  >
                    <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div className="min-w-0 flex flex-col justify-center">
                      <span className="block text-[13px] sm:text-[15px] font-medium">
                        Phone
                      </span>

                      <span className="block text-[10px] sm:text-[12px] font-bold truncate">
                        {data.phone || "+1 123 456 7890"}
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={data.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2.5 sm:gap-3
                      px-2 sm:px-4
                      min-w-0
                      justify-center
                    "
                  >
                    <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center font-bold text-[13px] sm:text-[16px]">
                      in
                    </div>

                    <div className="min-w-0 flex flex-col justify-center">
                      <span className="block text-[13px] sm:text-[15px] font-medium">
                        LinkedIn
                      </span>

                      <span className="block text-[10px] sm:text-[12px] font-bold truncate">
                        /{data.linkedin?.split("/").pop() || "rohitsharma"}
                      </span>
                    </div>
                  </a>

                </div>
            </motion.div>
          </div>

          {/* ================= PROFILE CONTENT ================= */}
          <div className="lg:col-span-6 lg:mt-10 xl:mt-12">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              {/* Team Member label */}
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#C46814]" />

                <span
                  className="
                    text-[12px]
                    sm:text-[13px]
                    font-bold
                    tracking-[0.12em]
                    text-[#C46814]
                    uppercase
                  "
                >
                  Team Member
                </span>
              </div>

              {/* Name */}
              <h1
                className="
                  text-[34px]
                  sm:text-[42px]
                  lg:text-[48px]
                  xl:text-[52px]
                  font-bold
                  text-[#0B1221]
                  leading-[1.08]
                  tracking-tight
                  mb-2
                "
              >
                {data.name}
              </h1>

              {/* Role */}
              <h2
                className="
                  text-[21px]
                  sm:text-[25px]
                  lg:text-[27px]
                  font-bold
                  text-[#C46814]
                  mb-5
                "
              >
                {data.role}
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-7">
                <div className="h-[2px] w-14 sm:w-20 bg-[#C46814]" />

                <div className="text-[#C46814]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
                  </svg>
                </div>

                <div className="h-[2px] w-14 sm:w-20 bg-[#C46814]" />
              </div>

              {/* Description */}
              <div
                className="
                  text-[#4b5563]
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]
                  font-medium
                  leading-[1.8]
                  space-y-4
                "
              >
                <p>
                  {data.name} is the visionary leader and driving force
                  behind Eventora. With a passion for creativity and
                  excellence, he founded Eventora with a mission to redefine
                  event experiences and create unforgettable memories.
                </p>

                <p>
                  With over 10 years of experience in event planning and
                  management, Rohit has successfully led countless projects
                  ranging from intimate gatherings to large-scale celebrations
                  and corporate events.
                </p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* ================= LOWER CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-10">

          {/* ================= LEFT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-white
              rounded-[24px]
              p-6
              sm:p-8
              lg:p-9
              shadow-[0_5px_25px_rgba(11,18,33,0.06)]
              border
              border-gray-100
            "
          >

            {/* About */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-[#C46814]">
                <User className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <h3
                className="
                  text-[20px]
                  sm:text-[22px]
                  font-bold
                  text-[#0B1221]
                "
              >
                About {firstName}
              </h3>
            </div>

            {/* Small divider */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-10 bg-[#C46814]/40" />

              <div className="text-[#C46814]">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
                </svg>
              </div>

              <div className="h-[1px] w-10 bg-[#C46814]/40" />
            </div>

            <p
              className="
                text-[#4b5563]
                text-[14px]
                sm:text-[15px]
                leading-[1.75]
                font-medium
                mb-6
              "
            >
              {data.bio}
            </p>

            {/* Core Skills */}
            {data.skills && (
              <div>

                <div className="flex items-center gap-3 mb-5">
                  <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-[#C46814]" />

                  <h3
                    className="
                      text-[20px]
                      sm:text-[22px]
                      font-bold
                      text-[#0B1221]
                    "
                  >
                    Core Skills
                  </h3>
                </div>

                <div className="space-y-6">
                  {data.skills.map((skill, idx) => (
                    <div key={idx}>

                      <div className="flex items-center justify-between gap-4 mb-2.5">
                        <span
                          className="
                            text-[15px]
                            sm:text-[16px]
                            font-medium
                            text-[#0B1221]
                          "
                        >
                          {skill.name}
                        </span>

                        <span
                          className="
                            text-[14px]
                            sm:text-[15px]
                            font-bold
                            text-[#C46814]
                            shrink-0
                          "
                        >
                          {skill.percentage}%
                        </span>
                      </div>

                      <div className="w-full h-[5px] bg-[#E5E7EB] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.percentage}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: idx * 0.08,
                          }}
                          className="
                            h-full
                            bg-[#C46814]
                            rounded-full
                          "
                        />
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>

          {/* ================= RIGHT CARD ================= */}
          {data.experience && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                bg-white
                rounded-[24px]
                p-6
                sm:p-8
                lg:p-9
                shadow-[0_5px_25px_rgba(11,18,33,0.06)]
                border
                border-gray-100
              "
            >

              {/* Heading */}
              <div className="flex items-center gap-3 mb-3">
                <Medal className="w-6 h-6 sm:w-7 sm:h-7 text-[#C46814]" />

                <h3
                  className="
                    text-[20px]
                    sm:text-[22px]
                    font-bold
                    text-[#0B1221]
                  "
                >
                  Experience & Achievements
                </h3>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-8">
                <div className="h-[1px] w-10 bg-[#C46814]/40" />

                <div className="text-[#C46814]">
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
                  </svg>
                </div>

                <div className="h-[1px] w-10 bg-[#C46814]/40" />
              </div>

              {/* Timeline */}
              <div
                className="
                  relative
                  ml-3
                  sm:ml-5
                  border-l
                  border-dashed
                  border-[#C46814]/30
                "
              >

                {data.experience.map((exp, idx) => {

                  const icons = [
                    Briefcase,
                    Trophy,
                    GraduationCap,
                    Award,
                  ];

                  const Icon = icons[idx % icons.length];

                  return (
                    <div
                      key={idx}
                      className="
                        relative
                        pl-10
                        sm:pl-12
                        pb-6
                        last:pb-1
                      "
                    >

                      {/* Timeline icon */}
                      <div
                        className="
                          absolute
                          -left-[23px]
                          top-0
                          w-11
                          h-11
                          rounded-full
                          bg-[#FFF8F0]
                          border
                          border-[#C46814]/20
                          flex
                          items-center
                          justify-center
                          text-[#C46814]
                        "
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Content */}
                      <div>

                        <div
                          className="
                            text-[#C46814]
                            text-[12px]
                            sm:text-[13px]
                            font-bold
                            mb-1
                          "
                        >
                          {exp.yearRange}
                        </div>

                        {exp.title && (
                          <h4
                            className="
                              text-[#0B1221]
                              text-[15px]
                              sm:text-[16px]
                              font-bold
                              leading-snug
                              mb-1
                            "
                          >
                            {exp.title}
                          </h4>
                        )}

                        {exp.description && (
                          <p
                            className="
                              text-[#4b5563]
                              text-[13px]
                              sm:text-[14px]
                              font-medium
                              leading-[1.7]
                            "
                          >
                            {exp.description}
                          </p>
                        )}

                        {exp.achievements && (
                          <ul className="mt-2 space-y-1.5">
                            {exp.achievements.map(
                              (achievement, i) => (
                                <li
                                  key={i}
                                  className="
                                    flex
                                    items-start
                                    gap-2
                                    text-[#4b5563]
                                    text-[13px]
                                    sm:text-[14px]
                                    font-medium
                                  "
                                >
                                  <span
                                    className="
                                      mt-[7px]
                                      w-1.5
                                      h-1.5
                                      rounded-full
                                      bg-[#C46814]
                                      shrink-0
                                    "
                                  />

                                  <span>
                                    {achievement}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}

                      </div>
                    </div>
                  );
                })}

              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}