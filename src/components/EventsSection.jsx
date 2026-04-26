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
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">The Two Events</h2>
        <p className="text-white/70 text-center text-sm mb-14 leading-relaxed">Celebrating the Sunnah</p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-4xl mx-auto px-6 justify-center">
        {/* Nikah Card */}
        <AnimatedSection delay={0.1} className="w-full md:w-1/2">
          <div className="glass-card-gold interactive-card overflow-hidden h-full flex flex-col">
            <div className="h-1 bg-gradient-to-r from-emerald-dark via-emerald to-emerald-dark" />
            <div className="p-7 md:p-8 text-center">
              {/* Header */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-4">
                <polygon points="16,0 20,11 32,11 22,18 26,30 16,22 6,30 10,18 0,11 12,11" fill="#046307" opacity="0.8" />
                <circle cx="16" cy="16" r="5" fill="#0A0A0A" stroke="#046307" strokeWidth="1" />
              </svg>
              <h3 className="font-display text-2xl text-white mb-1">Nikah</h3>
              <p className="text-white/70 text-xs mb-8">The sacred marriage contract</p>

              {/* Date & Time */}
              <div className="space-y-5 text-sm">
                <div>
                  <Clock size={16} className="text-gold/50 mx-auto mb-2" />
                  <p className="text-white leading-relaxed">{data.nikah.dateGregorian}</p>
                  <p className="text-gold/50 hijri-text text-xs mt-1">{data.nikah.dateHijri}</p>
                  <p className="text-white/85 mt-1">{data.nikah.time}</p>
                </div>
                <div className="gold-shimmer-line w-10 mx-auto" />
                <div>
                  <MapPin size={16} className="text-gold/50 mx-auto mb-2" />
                  <p className="text-white font-medium">{data.nikah.venueName}</p>
                  <p className="text-white/80 text-xs mt-1 leading-relaxed max-w-xs mx-auto">{data.nikah.venueAddress}</p>
                </div>
              </div>

              <button onClick={() => setNikahExpanded(!nikahExpanded)}
                className="inline-flex items-center gap-1.5 text-gold/50 text-xs mt-8 hover:text-gold transition-colors cursor-pointer">
                <span>{nikahExpanded ? 'Less details' : 'More details'}</span>
                <motion.div animate={{ rotate: nikahExpanded ? 180 : 0 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {nikahExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-gold/10 space-y-4 text-sm">
                      {data.nikah.qaziName && (
                        <p className="text-white/85"><span className="text-gold/70">Qazi:</span> {data.nikah.qaziName}</p>
                      )}
                      <p className="text-white/85 leading-relaxed">
                        <Shirt size={14} className="text-gold/50 inline-block mr-2 align-middle" />
                        {data.nikah.dressCode}
                      </p>
                      <p className="text-white/70 text-xs italic leading-relaxed">{data.nikah.prayerNote}</p>
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
            <div className="p-7 md:p-8 text-center">
              {/* Header */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-4">
                <path d="M16 4C10 4 4 10 4 16s2 8 12 12c10-4 12-6 12-12S22 4 16 4z" fill="none" stroke="#B76E79" strokeWidth="1.5" opacity="0.8" />
                <circle cx="16" cy="16" r="4" fill="#B76E79" opacity="0.3" />
              </svg>
              <h3 className="font-display text-2xl text-white mb-1">Walima</h3>
              <p className="text-white/70 text-xs mb-8">The reception feast</p>

              {/* Date & Time */}
              <div className="space-y-5 text-sm">
                <div>
                  <Clock size={16} className="text-gold/50 mx-auto mb-2" />
                  <p className="text-white leading-relaxed">{data.walima.dateGregorian}</p>
                  <p className="text-gold/50 hijri-text text-xs mt-1">{data.walima.dateHijri}</p>
                  <p className="text-white/85 mt-1">{data.walima.time}</p>
                </div>
                <div className="gold-shimmer-line w-10 mx-auto" />
                <div>
                  <MapPin size={16} className="text-gold/50 mx-auto mb-2" />
                  <p className="text-white font-medium">{data.walima.venueName}</p>
                  <p className="text-white/80 text-xs mt-1 leading-relaxed max-w-xs mx-auto">{data.walima.venueAddress}</p>
                </div>
              </div>

              <button onClick={() => setWalimaExpanded(!walimaExpanded)}
                className="inline-flex items-center gap-1.5 text-gold/50 text-xs mt-8 hover:text-gold transition-colors cursor-pointer">
                <span>{walimaExpanded ? 'Less details' : 'More details'}</span>
                <motion.div animate={{ rotate: walimaExpanded ? 180 : 0 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {walimaExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-gold/10 space-y-4 text-sm">
                      <p className="text-white/85 leading-relaxed">
                        <Shirt size={14} className="text-gold/50 inline-block mr-2 align-middle" />
                        {data.walima.dressCode}
                      </p>
                      <p className="text-white/70 text-xs italic leading-relaxed">{data.walima.note}</p>
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
