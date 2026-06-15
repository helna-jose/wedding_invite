"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Milestone {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
  alignLeft?: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    date: "September 12, 2021",
    title: "The First Meeting",
    description: "We first met at work and soon became the best of friends. What started with simple conversations gradually turned into a meaningful connection.",
    image: "/images/pic1.jpg"
  },
  {
    id: 2,
    date: "May 24, 2024",
    title: "The Journey Together",
    description: "From shared laughter and endless talks to memorable trips and adventures, every moment brought us closer and strengthened our bond.",
    image: "/images/pic2.jpg"
  },
  {
    id: 3,
    date: "December 25, 2025",
    title: "The Promise",
    description: "Along the way, we realized we were meant for each other. With love in our hearts and dreams for the future, we chose to continue life's journey together and celebrate our engagement",
    image: "/images/pic9.jpg"
  }
];

export default function Story() {
  return (
    <section 
      id="our-story" 
      className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-paper max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 sm:mb-24">
        <motion.span 
          className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Journey
        </motion.span>
        <motion.h2 
          className="font-serif text-3xl sm:text-5xl font-light text-espresso"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          How it all began
        </motion.h2>
        <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
      </div>

      {/* Asymmetric Pinterest Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1 */}
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <div className="bg-champagne/40 border border-gold/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
            <div className="relative h-96 w-full">
              <Image 
                src={milestones[0].image || ""} 
                alt={milestones[0].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-xl font-medium text-espresso mb-3">{milestones[0].title}</h3>
              <p className="font-sans text-sm text-sage-dark leading-relaxed font-light">{milestones[0].description}</p>
            </div>
          </div>


        </motion.div>

        {/* Column 2 - Shifted slightly down on desktop */}
        <motion.div 
          className="flex flex-col gap-8 md:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="bg-champagne/40 border border-gold/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
            <div className="relative h-[28rem] w-full">
              <Image 
                src={milestones[1].image || ""} 
                alt={milestones[1].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-xl font-medium text-espresso mb-3">{milestones[1].title}</h3>
              <p className="font-sans text-sm text-sage-dark leading-relaxed font-light">{milestones[1].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="bg-champagne/40 border border-gold/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
            <div className="relative h-80 w-full">
              <Image 
                src={milestones[2].image || ""} 
                alt={milestones[2].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-xl font-medium text-espresso mb-3">{milestones[2].title}</h3>
              <p className="font-sans text-sm text-sage-dark leading-relaxed font-light">{milestones[2].description}</p>
            </div>
          </div>

          <div className="bg-blush-light/50 border border-gold/10 p-8 rounded-2xl">
            <h4 className="font-serif text-gold text-xs italic tracking-wider mb-2">Our Philosophy</h4>
            <p className="font-sans text-xs text-espresso/70 leading-relaxed uppercase tracking-[0.1em]">
              We believe in slow conversations, cozy spaces, travel to new places, and a lifelong commitment to growing together. We are so excited to celebrate our love with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
