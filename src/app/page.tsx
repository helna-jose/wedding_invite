import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Schedule from "@/components/Schedule";
import Countdown from "@/components/Countdown";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Editorial Header Logo (Floating) */}
      <div className="absolute top-8 left-8 z-30 select-none hidden sm:block">
        <span className="font-serif text-lg tracking-[0.3em] uppercase text-espresso/70">
          J · H
        </span>
      </div>

      <Hero />
      <Story />
      <Details />
      <Schedule />
      <Countdown />
      <RSVP />

      {/* Footer */}
      <footer className="py-12 bg-paper border-t border-gold/10 text-center relative z-10 px-6">
        <p className="font-serif text-2xl font-light text-espresso italic mb-3">
          Joyal & Hency
        </p>
        <p className="font-sans text-[10px] tracking-[0.2em] text-sage-dark uppercase mb-1">
          July 11, 2026 · Thrissur, Kerala
        </p>
        <p className="font-sans text-[9px] text-sage-dark/50 uppercase mt-6">
          © 2026 Joyal & Hency. All Rights Reserved.
        </p>
        <p className="font-sans text-xs sm:text-sm text-sage-dark/70 mt-3 font-bold">
          Crafted with Love ❤️ | Designed & Developed by <a href="mailto:helnatheress@gmail.com" className="text-gold hover:text-espresso transition-colors">helnatheress@gmail.com</a>
        </p>
      </footer>
    </main>
  );
}
