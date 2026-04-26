import { useState } from 'react';
import AnimatedSection from './ui/AnimatedSection';

export default function FamilySection({ data }) {
  const [brideFlipped, setBrideFlipped] = useState(false);
  const [groomFlipped, setGroomFlipped] = useState(false);

  return (
    <section className="section-padding islamic-pattern-dense" style={{ paddingBottom: '1.5rem' }}>
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">Meet the Families</h2>
        <p className="text-white/70 text-center text-sm mb-14 font-body leading-relaxed max-w-md mx-auto">
          Two families united by the will of Allah ﷻ
        </p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row md:gap-10 max-w-4xl mx-auto px-6 justify-center items-center">
        {/* Groom's Family */}
        <AnimatedSection delay={0.1}>
          <div
            className="flip-card cursor-pointer w-full md:w-auto transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setGroomFlipped(!groomFlipped)}
          >
            <div className={`flip-card-inner relative w-full h-full ${groomFlipped ? 'flipped' : ''}`} style={{ minHeight: '280px' }}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 glass-card-gold p-8 ornate-corners">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-4">Groom's Family</p>
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full overflow-hidden border border-gold/25 shadow-lg">
                    <img src="/images/groom-family.png" alt="Groom Family" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">{data.groom.name}</h3>
                  <p className="text-white/80 text-sm font-body mb-5 leading-relaxed">
                    S/O Mr & Mrs {data.groom.father}
                  </p>
                  <div className="gold-shimmer-line w-16 mx-auto mb-5" />
                  <p className="font-display text-white/85 text-sm italic leading-[1.8]">
                    "{data.groom.dua}"
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back absolute inset-0 glass-card p-8">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-5">The {data.groom.family}</p>
                  <div className="space-y-3 text-sm text-white/90">
                    <p><span className="text-gold/50">Father:</span> {data.groom.father}</p>
                    <p><span className="text-gold/50">Mother:</span> {data.groom.mother}</p>
                    <p><span className="text-gold/50">Grandfather:</span> {data.groom.grandfather}</p>
                  </div>
                  <div className="gold-shimmer-line w-12 mx-auto my-6" />
                  <p className="text-white/70 text-xs leading-relaxed">
                    May Allah bless this family and increase their love and unity.
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Couple Hands Image — perfectly centered with equal spacing */}
        <div className="flex flex-col items-center justify-center -mt-8 -mb-2 relative z-10 ml-3">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
            <img
              src="/images/couple-hands.png"
              alt="Bride and Groom Hands"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-display text-gold/60 text-lg mt-1">&</p>
        </div>

        {/* Bride's Family */}
        <AnimatedSection delay={0.25}>
          <div
            className="flip-card cursor-pointer w-full md:w-auto transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setBrideFlipped(!brideFlipped)}
          >
            <div className={`flip-card-inner relative w-full h-full ${brideFlipped ? 'flipped' : ''}`} style={{ minHeight: '280px' }}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 glass-card-gold p-8 ornate-corners">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-4">Bride's Family</p>
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full overflow-hidden border border-gold/25 shadow-lg">
                    <img src="/images/bride-family.png" alt="Bride Family" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">{data.bride.name}</h3>
                  <p className="text-white/80 text-sm font-body mb-5 leading-relaxed">
                    D/O Mr & Mrs {data.bride.father}
                  </p>
                  <div className="gold-shimmer-line w-16 mx-auto mb-5" />
                  <p className="font-display text-white/85 text-sm italic leading-[1.8]">
                    "{data.bride.dua}"
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back absolute inset-0 glass-card p-8">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-5">The {data.bride.family}</p>
                  <div className="space-y-3 text-sm text-white/90">
                    <p><span className="text-gold/50">Father:</span> {data.bride.father}</p>
                    <p><span className="text-gold/50">Mother:</span> {data.bride.mother}</p>
                    <p><span className="text-gold/50">Grandfather:</span> {data.bride.grandfather}</p>
                  </div>
                  <div className="gold-shimmer-line w-12 mx-auto my-6" />
                  <p className="text-white/70 text-xs leading-relaxed">
                    May Allah unite both families in love, respect, and faith.
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
