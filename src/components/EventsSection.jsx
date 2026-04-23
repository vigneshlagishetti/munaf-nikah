import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, Shirt } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function EventsSection({ data }) {
  const [nikahExpanded, setNikahExpanded] = useState(false);
  const [walimaExpanded, setWalimaExpanded] = useState(false);

  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-3xl gold-text text-center mb-2">The Two Events</h2>
        <p className="text-ivory/40 text-center text-sm mb-10">Celebrating the Sunnah</p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto px-4 justify-center">
        {/* Nikah Card */}
        <AnimatedSection delay={0.1} className="w-full md:w-1/2">
          <div className="glass-card-gold interactive-card overflow-hidden h-full flex flex-col">
            <div className="h-1 bg-gradient-to-r from-emerald-dark via-emerald to-emerald-dark" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polygon points="16,0 20,11 32,11 22,18 26,30 16,22 6,30 10,18 0,11 12,11" fill="#046307" opacity="0.8" />
                  <circle cx="16" cy="16" r="5" fill="#0A0A0A" stroke="#046307" strokeWidth="1" />
                </svg>
                <div>
                  <h3 className="font-display text-2xl text-ivory">Nikah</h3>
                  <p className="text-ivory/40 text-xs">The sacred marriage contract</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gold/50 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-ivory/80">{data.nikah.dateGregorian}</p>
                    <p className="text-gold/50 hijri-text text-xs">{data.nikah.dateHijri}</p>
                    <p className="text-ivory/60">{data.nikah.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold/50 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-ivory/80 font-medium">{data.nikah.venueName}</p>
                    <p className="text-ivory/50 text-xs">{data.nikah.venueAddress}</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setNikahExpanded(!nikahExpanded)}
                className="flex items-center gap-1 text-gold/50 text-xs mt-4 hover:text-gold transition-colors cursor-pointer">
                <span>{nikahExpanded ? 'Less details' : 'More details'}</span>
                <motion.div animate={{ rotate: nikahExpanded ? 180 : 0 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {nikahExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="pt-4 mt-4 border-t border-gold/10 space-y-3 text-sm">
                      {data.nikah.qaziName && (
                        <p className="text-ivory/60"><span className="text-gold/50">Qazi:</span> {data.nikah.qaziName}</p>
                      )}
                      <div className="flex items-start gap-3">
                        <Shirt size={16} className="text-gold/50 mt-0.5 shrink-0" />
                        <p className="text-ivory/60">{data.nikah.dressCode}</p>
                      </div>
                      <p className="text-ivory/40 text-xs italic">{data.nikah.prayerNote}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>

        {/* Walima Card */}
        <AnimatedSection delay={0.2} className="w-full md:w-1/2">
          <div className="glass-card-gold interactive-card overflow-hidden h-full flex flex-col">
            <div className="h-1 bg-gradient-to-r from-rose-gold/60 via-rose-gold to-rose-gold/60" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4C10 4 4 10 4 16s2 8 12 12c10-4 12-6 12-12S22 4 16 4z" fill="none" stroke="#B76E79" strokeWidth="1.5" opacity="0.8" />
                  <circle cx="16" cy="16" r="4" fill="#B76E79" opacity="0.3" />
                </svg>
                <div>
                  <h3 className="font-display text-2xl text-ivory">Walima</h3>
                  <p className="text-ivory/40 text-xs">The reception feast</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gold/50 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-ivory/80">{data.walima.dateGregorian}</p>
                    <p className="text-gold/50 hijri-text text-xs">{data.walima.dateHijri}</p>
                    <p className="text-ivory/60">{data.walima.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold/50 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-ivory/80 font-medium">{data.walima.venueName}</p>
                    <p className="text-ivory/50 text-xs">{data.walima.venueAddress}</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setWalimaExpanded(!walimaExpanded)}
                className="flex items-center gap-1 text-gold/50 text-xs mt-4 hover:text-gold transition-colors cursor-pointer">
                <span>{walimaExpanded ? 'Less details' : 'More details'}</span>
                <motion.div animate={{ rotate: walimaExpanded ? 180 : 0 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {walimaExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="pt-4 mt-4 border-t border-gold/10 space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Shirt size={16} className="text-gold/50 mt-0.5 shrink-0" />
                        <p className="text-ivory/60">{data.walima.dressCode}</p>
                      </div>
                      <p className="text-ivory/40 text-xs italic">{data.walima.note}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
