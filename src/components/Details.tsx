"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Compass } from "lucide-react";

export default function Details() {
  const mapUrl = "https://maps.google.com/maps?q=Nithya%20Sahaya%20Matha%20Church%20Adat%20Thrissur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section 
      id="details" 
      className="relative z-10 py-24 bg-champagne/20 border-y border-gold/10 px-6 sm:px-12 md:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Details
          </motion.span>
          <motion.h2 
            className="font-serif text-3xl sm:text-5xl font-light text-espresso"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            When & Where
          </motion.h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Details Info Columns */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-between gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Elegant Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-paper border border-gold/15 p-8 rounded-2xl flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-espresso">The Date</h3>
                <p className="font-sans text-sm text-sage-dark font-light leading-relaxed">
                  Wednesday, July 08, 2026
                  <br />
                  
                </p>
              </div>

              <div className="bg-paper border border-gold/15 p-8 rounded-2xl flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-espresso">The Time</h3>
                <p className="font-sans text-sm text-sage-dark font-light leading-relaxed">
                  Betrothal Ceremony at 11:00 AM
                  <br />
                 
                </p>
              </div>

              <div className="bg-paper border border-gold/15 p-8 rounded-2xl flex flex-col gap-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-espresso">The Venue</h3>
                <p className="font-sans text-sm text-sage-dark font-light leading-relaxed">
                  <strong>Nithya Sahaya Matha Church</strong>
                  <br />
                  Adat, Thrissur, Kerala 680551, India
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Nithya+Sahaya+Matha+Church+Adat+Thrissur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 text-xs tracking-wider text-gold hover:text-espresso font-semibold uppercase transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Dress Code Section */}
            <div className="bg-paper border border-gold/20 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute right-4 bottom-4 text-gold/10">
                <Compass className="w-24 h-24 stroke-[0.5]" />
              </div>
              <h3 className="font-serif text-xl text-espresso mb-3">Dress Code</h3>
              <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-3">
                Wedding Chic ✨
              </span>
              <p className="font-sans text-sm text-sage-dark leading-relaxed font-light relative z-10">
                Look fabulous. This is your moment to finally wear that outfit you've been saving for "something special."
              </p>
            </div>
          </motion.div>

          {/* Map & Sketch Columns */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Elegant Map Embed */}
            <div className="bg-paper border border-gold/15 p-2 rounded-2xl h-[480px] overflow-hidden relative shadow-sm group">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map location"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
