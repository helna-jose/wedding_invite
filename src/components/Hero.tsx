"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToInvitation = () => {
    const element = document.getElementById("our-story");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-paper"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        {/* Watercolor image background */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero-watercolor.png")' }}
        />
        {/* Soft gradient overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase mb-4 sm:mb-6">
          Save the Date
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-espresso tracking-wide leading-tight mb-4 select-none">
          Joyal
          <span className="block font-serif text-3xl sm:text-5xl my-2 text-gold italic font-extralight">&</span>
          Hency
        </h1>

        <div className="w-16 h-[1px] bg-gold/40 my-6 sm:my-8" />

        <p className="font-serif text-lg sm:text-2xl text-sage-dark italic tracking-wide mb-2">
          July 11, 2026
        </p>
        <p className="font-sans text-xs sm:text-sm tracking-[0.2em] text-espresso uppercase mb-10 sm:mb-12">
          St. Paul's Church ·Thaikkattussery, Thrissur
        </p>

        <motion.button
          onClick={scrollToInvitation}
          className="group relative px-8 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase text-espresso border border-espresso/30 bg-transparent rounded-full hover:bg-espresso hover:text-paper hover:border-espresso transition-all duration-500 overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">View Invitation</span>
        </motion.button>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-sage font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-sage/40" />
      </motion.div>
    </div>
  );
}
