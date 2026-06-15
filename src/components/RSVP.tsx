"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { HeartHandshake, CheckCircle } from "lucide-react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<string | null>(null);
  const [guests, setGuests] = useState("1");
  const [dietary, setDietary] = useState<string[]>([]);
  const [customDiet, setCustomDiet] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Nut Allergy", "None"];

  const handleDietaryChange = (option: string) => {
    if (option === "None") {
      setDietary(["None"]);
      return;
    }
    const updated = dietary.filter(item => item !== "None");
    if (updated.includes(option)) {
      setDietary(updated.filter(item => item !== option));
    } else {
      setDietary([...updated, option]);
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = "Please enter your name.";
    if (!attendance) tempErrors.attendance = "Please confirm your attendance.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const triggerConfetti = () => {
    // Custom confetti colors matching our palette: Gold, Sage, Blush
    const colors = ["#C5A880", "#7C8B7E", "#E8D8D0", "#D4AF37"];
    
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors
    });

    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setErrors({});
      try {
        const response = await fetch("/api/rsvp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            attendance,
            guests: attendance === "accept" ? parseInt(guests, 10) : 0,
            dietary: attendance === "accept" ? dietary : [],
            customDiet: attendance === "accept" ? customDiet : "",
            note,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to connect. Please try again.");
        }

        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          triggerConfetti();
        } else {
          setErrors({ submit: data.error || "Submission failed." });
        }
      } catch (err: any) {
        setErrors({ submit: err.message || "Network error. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section 
      id="rsvp" 
      className="py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-champagne/10 border-t border-gold/15"
    >
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-3">
            RSVP
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso">
            Will you join us?
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
          <p className="font-sans text-xs sm:text-sm text-sage-dark mt-6 tracking-wide uppercase font-semibold">
            Kindly respond by July 1, 2026
          </p>
        </div>

        <div className="bg-paper border border-gold/15 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          {/* Decorative frame overlay */}
          <div className="absolute inset-4 border border-gold/5 rounded-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="rsvp-name" className="font-sans text-xs tracking-[0.15em] text-espresso uppercase font-semibold">
                    Your Name
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-champagne/10 border border-gold/20 focus:border-gold rounded-xl px-4 py-3 text-sm text-espresso font-sans placeholder-sage-dark/40 outline-none transition-all"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-light mt-1">{errors.name}</span>
                  )}
                </div>

                {/* Attendance field */}
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs tracking-[0.15em] text-espresso uppercase font-semibold">
                    Attendance
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttendance("accept")}
                      className={`py-3.5 px-4 rounded-xl text-xs tracking-wider uppercase border font-semibold transition-all duration-300 cursor-pointer ${
                        attendance === "accept"
                          ? "bg-espresso text-paper border-espresso"
                          : "bg-transparent text-espresso border-gold/20 hover:border-gold/60"
                      }`}
                    >
                      Joyfully Accepts
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("decline")}
                      className={`py-3.5 px-4 rounded-xl text-xs tracking-wider uppercase border font-semibold transition-all duration-300 cursor-pointer ${
                        attendance === "decline"
                          ? "bg-espresso text-paper border-espresso"
                          : "bg-transparent text-espresso border-gold/20 hover:border-gold/60"
                      }`}
                    >
                      Regretfully Declines
                    </button>
                  </div>
                  {errors.attendance && (
                    <span className="text-xs text-red-500 font-light mt-0.5">{errors.attendance}</span>
                  )}
                </div>

                {attendance === "accept" && (
                  <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Number of Guests */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="rsvp-guests" className="font-sans text-xs tracking-[0.15em] text-espresso uppercase font-semibold">
                        Number of Guests
                      </label>
                      <select
                        id="rsvp-guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-champagne/10 border border-gold/20 focus:border-gold rounded-xl px-4 py-3 text-sm text-espresso font-sans outline-none transition-all"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7">7 Guests</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Optional Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="rsvp-note" className="font-sans text-xs tracking-[0.15em] text-espresso uppercase font-semibold">
                    Message to the Couple
                  </label>
                  <textarea
                    id="rsvp-note"
                    rows={4}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Send a warm wish or special note..."
                    className="w-full bg-champagne/10 border border-gold/20 focus:border-gold rounded-xl px-4 py-3 text-sm text-espresso font-sans placeholder-sage-dark/40 outline-none transition-all resize-none"
                  />
                </div>

                {errors.submit && (
                  <span className="text-xs text-red-500 font-light text-center block">{errors.submit}</span>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-espresso text-paper text-xs sm:text-sm tracking-[0.2em] uppercase py-4 rounded-xl hover:bg-gold hover:text-espresso disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Response"}</span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                className="relative z-10 text-center py-10 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso mb-4">
                  Thank You
                </h3>
                <p className="font-sans text-sm text-sage-dark font-light leading-relaxed mb-6 max-w-sm">
                  Your response has been received. We are so grateful for you and can't wait to share our special day with you.
                </p>
                
                <div className="w-8 h-[1px] bg-gold/30 mb-6" />

                <button
                  onClick={() => {
                    setName("");
                    setAttendance(null);
                    setGuests("1");
                    setDietary([]);
                    setCustomDiet("");
                    setNote("");
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className="text-xs text-gold uppercase tracking-widest font-semibold hover:text-espresso transition-colors cursor-pointer"
                >
                  Edit Response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
