"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-07-11T10:30:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 sm:py-24 bg-paper px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background radial soft gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-champagne-light),transparent)] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span 
          className="text-gold tracking-[0.25em] text-[10px] sm:text-xs font-semibold uppercase block mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Counting Down to July 11, 2026
        </motion.span>

        <motion.h2 
          className="font-serif text-2xl sm:text-3xl font-light text-espresso italic mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Days until we say "I do"
        </motion.h2>

        {/* Counter Display */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {timeBlocks.map((block, i) => (
            <motion.div
              key={block.label}
              className="bg-champagne/30 border border-gold/10 p-4 sm:p-6 rounded-2xl flex flex-col items-center shadow-sm min-w-[70px] sm:min-w-[110px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <span className="font-serif text-3xl sm:text-5xl font-light text-espresso mb-2">
                {mounted ? String(block.value).padStart(2, "0") : "00"}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-sage-dark font-medium">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
