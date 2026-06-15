"use client";

import { motion } from "framer-motion";

export default function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Top Left Leaf */}
      <motion.div
        className="absolute top-[8%] -left-12 w-64 h-64 text-sage/10 md:text-sage/8 hidden sm:block"
        initial={{ rotate: -10, y: 0 }}
        animate={{ 
          rotate: [-10, 5, -10],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M 0 50 C 30 20, 70 30, 100 10 C 80 40, 60 70, 0 50 Z" />
          <path d="M 0 50 C 40 45, 60 30, 100 10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Middle Right Eucalyptus Leaf */}
      <motion.div
        className="absolute top-[35%] -right-16 w-80 h-80 text-blush-dark/15 md:text-blush-dark/10"
        initial={{ rotate: 15, x: 0 }}
        animate={{ 
          rotate: [15, -5, 15],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
          {/* A simple eucalyptus branch illustration */}
          <path d="M 10 110 Q 60 60 110 10" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="45" cy="80" r="16" />
          <circle cx="65" cy="55" r="18" />
          <circle cx="90" cy="30" r="14" />
        </svg>
      </motion.div>

      {/* Bottom Left Olive Branch */}
      <motion.div
        className="absolute top-[68%] -left-20 w-72 h-72 text-sage/12 md:text-sage/8"
        initial={{ rotate: -5, y: 0 }}
        animate={{ 
          rotate: [-5, 8, -5],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          {/* Olive branch line sketch */}
          <path d="M 10 90 Q 50 50 90 10" />
          {/* Leaves */}
          <path d="M 30 70 Q 15 55 30 45 Q 45 55 30 70 Z" fill="currentColor" opacity="0.6" />
          <path d="M 50 50 Q 35 35 50 25 Q 65 35 50 50 Z" fill="currentColor" opacity="0.6" />
          <path d="M 70 30 Q 55 15 70 5 Q 85 15 70 30 Z" fill="currentColor" opacity="0.6" />
          <path d="M 32 68 Q 48 68 50 50" />
          <path d="M 52 48 Q 68 48 70 30" />
        </svg>
      </motion.div>

      {/* Elegant floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/30"
            style={{
              top: `${20 + i * 13}%`,
              left: `${15 + (i % 2 === 0 ? 65 : 10)}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
