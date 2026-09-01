"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Music, Presentation } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

interface FeaturesProps {
  data: Feature[];
}

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-8 h-8 text-blue-600" />,
  Heart: <Heart className="w-8 h-8 text-pink-600" />,
  Music: <Music className="w-8 h-8 text-purple-600" />,
  Presentation: <Presentation className="w-8 h-8 text-green-600" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We offer comprehensive event management solutions tailored to your specific needs.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
