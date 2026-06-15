"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  aspect: string; // Tailwind aspect classes
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/pic10.jpg",
    alt: "Wedding photo",
    caption: "Hency & Joyal",
    aspect: "aspect-[3/4]"
  },
  {
    src: "/images/pic8.jpg",
    alt: "Wedding celebration",
    caption: "The Celebration",
    aspect: "aspect-[4/3]"
  },
  {
    src: "/images/pic12.jpg",
    alt: "Couple photo",
    caption: "Together",
    aspect: "aspect-[3/4]"
  },
  {
    src: "/images/pic9.jpg",
    alt: "Wedding moments",
    caption: "Precious Moments",
    aspect: "aspect-[4/3]"
  },
  {
    src: "/images/pic6.jpg",
    alt: "Special memory",
    caption: "Beautiful Day",
    aspect: "aspect-[1/1]"
  },
  {
    src: "/images/cover_eng.jpg",
    alt: "Engagement photo",
    caption: "The Engagement",
    aspect: "aspect-[3/4]"
  }
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (index !== null) {
      setIndex((index - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (index !== null) {
      setIndex((index + 1) % galleryImages.length);
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-paper max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 sm:mb-20">
        <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3">
          Gallery
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso">
          Captured Moments
        </h2>
        <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
      </div>

      {/* Masonry Columns Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {galleryImages.map((image, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid relative overflow-hidden rounded-2xl border border-gold/10 bg-champagne/10 shadow-sm cursor-pointer group"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className={`relative w-full ${image.aspect}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            
            {/* Elegant Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-1">
                View Image
              </span>
              <p className="font-serif text-paper text-lg italic">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
          >
            {/* Top Bar controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 text-paper/80">
              <span className="text-xs tracking-widest uppercase font-mono">
                {index + 1} / {galleryImages.length}
              </span>
              <button 
                onClick={() => setIndex(null)}
                className="p-2 hover:text-white rounded-full bg-paper/10 hover:bg-paper/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper hover:text-white transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={index}
              className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages[index].src}
                  alt={galleryImages[index].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                <p className="font-serif text-paper text-lg italic tracking-wide">
                  {galleryImages[index].caption}
                </p>
                <p className="font-sans text-xs text-gold uppercase tracking-[0.15em] mt-1">
                  {galleryImages[index].alt}
                </p>
              </div>
            </motion.div>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper hover:text-white transition-all cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
