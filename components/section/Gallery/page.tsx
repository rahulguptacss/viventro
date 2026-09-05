"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RefreshCw, Play, X } from "lucide-react";
import { GalleryData } from "../../types";

interface GalleryProps {
  data: GalleryData;
}

export default function Gallery({ data }: GalleryProps) {
  const { photoGallery, videoGallery } = data;
  const [activeCategory, setActiveCategory] = useState(photoGallery.categories[0] || "All Events");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(8);
  };

  const filteredPhotos = activeCategory === photoGallery.categories[0] 
    ? photoGallery.photos 
    : photoGallery.photos.filter(p => p.category === activeCategory);
    
  const displayedPhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  return (
    <div className="bg-white pb-4">
      {/* PHOTO GALLERY SECTION */}
      <section className="pt-10 pb-2 max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8 text-center"
        >
          {/* Removed the upper heart line as per the new style, just keeping the subtitle text if needed, but the screenshot only shows the main title. I will remove the subtitle too to match the screenshot exactly, or leave it. The screenshot doesn't have it, let's just make it very clean. I'll keep the subtitle for context but remove the top line. */}
          <span className="text-[#D49A4D] font-bold text-[16px] tracking-widest uppercase mb-3">
            {photoGallery.subtitle}
          </span>
          <h2 className="text-4xl md:text-[46px] font-serif text-[#0B1736]">
            {photoGallery.titlePart1} <span className="text-[#D49A4D]">{photoGallery.titleHighlight}</span> {photoGallery.titlePart2}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5 w-full max-w-[320px]">
            <div className="h-[1px] flex-1 bg-[#D49A4D]"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D49A4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="h-[1px] flex-1 bg-[#D49A4D]"></div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6"
        >
          {photoGallery.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-[15px] transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-[#e4a836] text-white border-[#e4a836] shadow-lg shadow-[#e4a836]/20' 
                  : 'bg-white text-[#B88E52] border-[#e4a836]/30 hover:border-[#e4a836] hover:bg-orange-50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full"
        >
          <AnimatePresence mode="popLayout">
            {displayedPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                key={photo.id}
                onClick={() => setSelectedImage(photo.src)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm border border-gray-100 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 w-full flex items-center justify-center relative"
          >
            <div className="absolute left-0 right-0 h-[1px] border-t border-dashed border-[#D49A4D]/40 z-0"></div>
            <button 
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="relative z-10 bg-white inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#D49A4D] text-[#D49A4D] font-semibold hover:bg-[#D49A4D]/5 transition-colors"
            >
              {photoGallery.loadMoreText}
              <RefreshCw className="w-4 h-4 text-[#D49A4D]" strokeWidth={2.5} />
            </button>
          </motion.div>
        )}

      </section>

      {/* VIDEO GALLERY SECTION */}
      <section className="pt-8 pb-4 max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8 text-center"
        >
          <span className="text-[#D49A4D] font-bold text-[16px] tracking-widest uppercase mb-3">
            {videoGallery.subtitle}
          </span>
          <h2 className="text-4xl md:text-[46px] font-serif text-[#0B1736]">
            {videoGallery.titlePart1} <span className="text-[#D49A4D]">{videoGallery.titleHighlight}</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5 w-full max-w-[320px]">
            <div className="h-[1px] flex-1 bg-[#D49A4D]"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D49A4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="h-[1px] flex-1 bg-[#D49A4D]"></div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {videoGallery.videos.map((video, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              key={video.id}
              onClick={() => setSelectedVideo(video.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm border border-gray-100 cursor-pointer"
            >
              <Image
                src={video.thumbnail}
                alt={video.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-[2px] border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm">
                  <Play className="w-5 h-5 text-white ml-1 fill-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Selected photo"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedVideo.endsWith('.mp4') ? (
                <video
                  src={selectedVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                <iframe
                  src={selectedVideo}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
