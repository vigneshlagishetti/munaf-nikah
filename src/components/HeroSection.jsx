import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function HeroSection({ data }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding text-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 islamic-pattern-bg pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Bismillah */}
      <AnimatedSection>
        <p className="arabic-text text-gold/70 text-3xl md:text-4xl mb-6 leading-relaxed">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </AnimatedSection>

      <div className="gold-shimmer-line w-20 mb-10" />

      {/* Quranic Verse */}
      <AnimatedSection delay={0.15}>
        <div className="max-w-2xl mx-auto mb-16 px-4">
          <p className="font-display text-ivory/80 text-lg md:text-xl leading-loose italic">
            "And among His signs is that He created for you mates from among yourselves,
            that you may dwell in tranquility with them, and He has put love and mercy
            between your hearts."
          </p>
          <p className="font-display text-gold/60 text-base mt-4 tracking-widest">
            — Surah Ar-Rum (30:21)
          </p>
        </div>
      </AnimatedSection>

      <div className="gold-shimmer-line w-12 mb-10" />

      {/* Nikah Invitation */}
      <AnimatedSection delay={0.3}>
        <p className="font-display text-gold/60 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Nikah Invitation
        </p>
      </AnimatedSection>

      {/* Couple Names */}
      <AnimatedSection delay={0.4}>
        <div className="mb-12">
          <h1 className="font-script text-7xl md:text-8xl lg:text-9xl gold-text leading-tight drop-shadow-2xl">
            {data.groom.name}
          </h1>
          <div className="flex items-center justify-center gap-6 my-6 md:my-8">
            <div className="gold-shimmer-line w-16 md:w-24" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="12,0 14.5,8.5 24,8.5 16.5,14 19,23 12,17.5 5,23 7.5,14 0,8.5 9.5,8.5"
                  fill="#D4AF37"
                  opacity="0.6"
                />
              </svg>
            </motion.div>
            <div className="gold-shimmer-line w-16 md:w-24" />
          </div>
          <h1 className="font-script text-7xl md:text-8xl lg:text-9xl gold-text leading-tight drop-shadow-2xl">
            {data.bride.name}
          </h1>
        </div>
      </AnimatedSection>

      {/* Date */}
      <AnimatedSection delay={0.5}>
        <div className="glass-card px-10 py-5 md:px-14 md:py-6 mb-8 mt-4 mx-4">
          <p className="font-display text-ivory/95 text-xl md:text-2xl tracking-widest uppercase">
            {data.nikah.dateGregorian}
          </p>
          <p className="hijri-text text-gold/70 text-lg md:text-xl mt-2 font-light">
            {data.nikah.dateHijri}
          </p>
        </div>
      </AnimatedSection>

      {/* Monogram / Decorative */}
      <AnimatedSection delay={0.6}>
        <div className="mt-6 mb-12">
          <div className="mihrab-clip bg-gradient-to-b from-gold/10 to-gold/5 border border-gold/15 w-48 h-64 mx-auto flex items-center justify-center rounded-b-2xl">
            <div className="text-center px-4">
              <p className="font-script text-4xl gold-text">{data.groom.name[0]}</p>
              <p className="text-gold/30 text-xs my-1">&</p>
              <p className="font-script text-4xl gold-text">{data.bride.name[0]}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8"
      >
        <ChevronDown size={24} className="text-gold/40" />
      </motion.div>
    </section>
  );
}
