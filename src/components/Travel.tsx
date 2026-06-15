"use client";

import { motion } from "framer-motion";
import { Hotel, Plane, Car } from "lucide-react";

interface Accommodation {
  name: string;
  address: string;
  phone: string;
  distance: string;
  description: string;
}

const accommodations: Accommodation[] = [
  {
    name: "Villa San Michele, Belmond",
    address: "Via Doccia 4, 50014 Fiesole FI, Italy",
    phone: "+39 055 567 8200",
    distance: "15 minutes from the Venue",
    description: "A former 15th-century monastery nestled in the Fiesole hills, featuring breathtaking panoramic views of Florence and beautiful Renaissance gardens."
  },
  {
    name: "Hotel Grand Hotel Cavour",
    address: "Via del Proconsolo 3, 50122 Firenze FI, Italy",
    phone: "+39 055 266 261",
    distance: "20 minutes from the Venue",
    description: "Located in the heart of historic Florence, offering elegant rooms and an exceptional rooftop terrace directly facing the Duomo."
  }
];

export default function Travel() {
  return (
    <section 
      id="travel" 
      className="py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-champagne/10 border-t border-gold/15"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3">
            Accommodations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso">
            Travel & Stay
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Travel Tips Column */}
          <motion.div 
            className="lg:col-span-1 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-serif text-2xl text-espresso italic font-light mb-4">
              Getting to Tuscany
            </h3>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-espresso mb-1">By Air</h4>
                <p className="font-sans text-sm text-sage-dark font-light leading-relaxed">
                  Fly into Florence Airport (FLR), which is just 25 minutes from the city center. Alternative options include Pisa Airport (PSA) or Bologna Airport (BLQ) with easy rail links.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-espresso mb-1">Local Transport</h4>
                <p className="font-sans text-sm text-sage-dark font-light leading-relaxed">
                  We will arrange a private guest shuttle starting from Florence center to the venue at 3:00 PM on Friday and returning from the venue at midnight.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stays List Column */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-espresso italic font-light mb-4">
              Where to Stay
            </h3>

            {accommodations.map((hotel, index) => (
              <div 
                key={index}
                className="bg-paper border border-gold/10 hover:border-gold/25 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 shadow-sm group transition-all duration-500"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-espresso mb-2 font-medium">
                      {hotel.name}
                    </h4>
                    <p className="font-sans text-xs text-gold uppercase tracking-widest font-semibold mb-3">
                      {hotel.distance}
                    </p>
                    <p className="font-sans text-sm text-sage-dark font-light leading-relaxed mb-4">
                      {hotel.description}
                    </p>
                    <div className="text-xs text-sage-dark font-light flex flex-col gap-1">
                      <p>📍 {hotel.address}</p>
                      <p>📞 {hotel.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center sm:justify-end flex-shrink-0">
                  <a 
                    href="https://booking.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-[11px] tracking-widest uppercase text-espresso border border-espresso/20 hover:bg-espresso hover:text-paper hover:border-espresso rounded-full transition-all duration-300 font-medium cursor-pointer"
                  >
                    Book Stay
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
