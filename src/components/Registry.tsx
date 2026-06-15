"use client";

import { motion } from "framer-motion";
import { Gift, Compass, Flower } from "lucide-react";

interface RegistryItem {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const registries: RegistryItem[] = [
  {
    title: "Honeymoon Fund",
    description: "Help us design our dream itinerary around Japan's traditional countryside and coastlines. Contributions will support boutique stays and culinary journeys.",
    link: "https://honeyfund.com",
    icon: <Compass className="w-6 h-6" />
  },
  {
    title: "Williams Sonoma",
    description: "Curated registry list featuring hand-crafted kitchenware, fine linens, and dinner service pieces to gather around our family table for years to come.",
    link: "https://williams-sonoma.com",
    icon: <Gift className="w-6 h-6" />
  },
  {
    title: "Olive Grove Preservation",
    description: "In honor of our Tuscan wedding venue, support local agriculture and tree planting initiatives to sustain the historic surrounding groves.",
    link: "https://tree-nation.com",
    icon: <Flower className="w-6 h-6" />
  }
];

export default function Registry() {
  return (
    <section 
      id="registry" 
      className="py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-paper"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3">
            Registry
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso">
            Gift Registry
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-serif text-base sm:text-lg text-sage-dark italic leading-relaxed font-light">
            Your presence at our wedding is the greatest gift of all. If you would like to honor us with a gift, we have curated a registry focusing on our home beginnings and future travel.
          </p>
        </div>

        {/* Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registries.map((item, index) => (
            <motion.div
              key={index}
              className="bg-champagne/10 border border-gold/15 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-espresso mb-3 font-medium">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-sage-dark leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-[11px] tracking-widest uppercase text-espresso border border-espresso/25 hover:bg-espresso hover:text-paper hover:border-espresso rounded-full transition-all duration-300 font-semibold cursor-pointer"
              >
                View Registry
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
