"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun, Heart } from "lucide-react";

interface EventItem {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: React.ReactNode;
}

const events: EventItem[] = [
  {
    title: "Madhuramveppu Ceremony",
    date: "Tuesday, July 07, 2026",
    time: "7:00 PM",
    venue: "Nithya Sahayamatha Church Parish Hall, Adat",
    description: "A cherished tradition that symbolizes the sweet union of two families and the beginning of a sacred journey.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "Betrothal Ceremony",
    date: "Wednesday, July 08, 2026",
    time: "11:00 AM",
    venue: "Nithya Sahaya Matha Church, Adat",
    description: "A sacred and joyful occasion in which two hearts, united in love and guided by God's grace, publicly affirm their commitment to one another.",
    icon: <Sun className="w-5 h-5" />
  },
  {
    title: "Marriage Ceremony",
    date: "Saturday, July 11, 2026",
    time: "10:30 AM",
    venue: "ST. Paul's Church - Thaikkattussery",
    description: "The solemn Holy Mass and exchange of marriage vows at the altar. ",
    icon: <Heart className="w-5 h-5" />
  }
];

export default function Schedule() {
  const cardClasses = "bg-paper border border-gold/10 hover:border-gold/35 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between relative overflow-hidden group";

  return (
    <section 
      id="schedule" 
      className="py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-champagne/10 border-t border-gold/15"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3">
            Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso">
            The Festivities
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        {/* Responsive layout: 1 col on mobile, 2 cols on desktop with 3rd centered below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {events.slice(0, 2).map((event, index) => (
            <motion.div
              key={index}
              className={cardClasses}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent rounded-tr-2xl pointer-events-none" />

              <div>
                {/* Icon Container with Day badges removed */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {event.icon}
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-espresso mb-3 font-medium">
                  {event.title}
                </h3>
                
                <div className="flex flex-col gap-1.5 mb-6 text-xs sm:text-sm tracking-wide text-sage-dark font-light">
                  <p className="font-medium text-espresso/80">{event.date}</p>
                  <p>{event.time}</p>
                  <p className="italic text-gold">{event.venue}</p>
                </div>

                <p className="font-sans text-sm text-sage-dark leading-relaxed font-light">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Third Card Centered below the middle of the above two */}
          {events[2] && (
            <motion.div
              className={`${cardClasses} md:col-span-2 md:justify-self-center md:max-w-xl w-full`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent rounded-tr-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {events[2].icon}
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-espresso mb-3 font-medium">
                  {events[2].title}
                </h3>
                
                <div className="flex flex-col gap-1.5 mb-6 text-xs sm:text-sm tracking-wide text-sage-dark font-light">
                  <p className="font-medium text-espresso/80">{events[2].date}</p>
                  <p>{events[2].time}</p>
                  <p className="italic text-gold">{events[2].venue}</p>
                </div>

                <p className="font-sans text-sm text-sage-dark leading-relaxed font-light">
                  {events[2].description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
