import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function HeroSection({ data }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-32 text-center overflow-hidden">
      {/* Background image — visible and warm */}
      {data.images?.heroBg && (
        <div className="absolute inset-0 pointer-events-none">
          <img src={data.images.heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(5,6,5,0.4) 0%, rgba(5,6,5,0.3) 50%, rgba(5,6,5,0.6) 100%)'
          }} />
        </div>
      )}

      {/* Background pattern */}
      <div className="absolute inset-0 islamic-pattern-bg pointer-events-none" />

      {/* Ambient glow — brighter */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Bismillah */}
      <AnimatedSection>
        <p className="arabic-text text-gold text-2xl md:text-3xl mb-12 leading-relaxed px-6">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </AnimatedSection>

      <div className="gold-shimmer-line w-16 mb-14" />

      {/* Quranic Verse */}
      <AnimatedSection delay={0.15}>
        <div className="max-w-md mx-auto mb-16 px-8">
          <p className="font-display text-white text-base md:text-lg leading-[2] italic">
            "And among His signs is that He created for you mates from among yourselves,
            that you may dwell in tranquility with them, and He has put love and mercy
            between your hearts."
          </p>
          <p className="font-display text-gold text-sm mt-6 tracking-widest">
            — Surah Ar-Rum (30:21)
          </p>
        </div>
      </AnimatedSection>

      <div className="gold-shimmer-line w-10 mb-14" />

      {/* Nikah Invitation */}
      <AnimatedSection delay={0.3}>
        <p className="font-display text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-12">
          Nikah Invitation
        </p>
      </AnimatedSection>

      {/* Couple Names */}
      <AnimatedSection delay={0.4}>
        <div className="mb-20 px-8">
          <h1 className="font-script text-4xl md:text-5xl gold-text leading-tight drop-shadow-2xl">
            Munaaf
          </h1>
          <div className="flex items-center justify-center gap-5 my-8">
            <div className="gold-shimmer-line w-12 md:w-20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="12,0 14.5,8.5 24,8.5 16.5,14 19,23 12,17.5 5,23 7.5,14 0,8.5 9.5,8.5"
                  fill="#D4AF37"
                  opacity="0.8"
                />
              </svg>
            </motion.div>
            <div className="gold-shimmer-line w-12 md:w-20" />
          </div>
          <h1 className="font-script text-4xl md:text-5xl gold-text leading-tight drop-shadow-2xl">
            Roohiya
          </h1>
          <p className="font-display text-white/80 text-xs mt-6 tracking-[0.2em] uppercase">
            S. Abdul Munaaf  &  M. Roohiya Muffasareen
          </p>
        </div>
      </AnimatedSection>

      {/* Date Card */}
      <AnimatedSection delay={0.5}>
        <div className="glass-card px-8 py-5 md:px-12 md:py-7 mb-14 mx-6">
          <p className="font-display text-white text-lg md:text-xl tracking-widest uppercase">
            {data.nikah.dateGregorian}
          </p>
          <p className="hijri-text text-gold text-base md:text-lg mt-2 font-light">
            {data.nikah.dateHijri}
          </p>
        </div>
      </AnimatedSection>

      {/* Wedding Decor Image */}
      {data.images?.weddingDecor && (
        <AnimatedSection delay={0.55}>
          <div className="w-56 h-36 mx-auto mb-14 rounded-xl overflow-hidden border border-gold/20 shadow-xl">
            <img src={data.images.weddingDecor} alt="Wedding Decoration" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      )}

      {/* Monogram */}
      <AnimatedSection delay={0.6}>
        <div className="mb-10">
          <div className="mihrab-clip bg-gradient-to-b from-gold/10 to-gold/5 border border-gold/20 w-40 h-52 mx-auto flex items-center justify-center rounded-b-2xl">
            <div className="text-center px-4">
              <p className="font-script text-3xl gold-text">M</p>
              <p className="text-gold/50 text-xs my-1.5">&</p>
              <p className="font-script text-3xl gold-text">R</p>
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
        <ChevronDown size={24} className="text-gold/50" />
      </motion.div>
    </section>
  );
}
