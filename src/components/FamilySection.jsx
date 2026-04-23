import { useState } from 'react';
import AnimatedSection from './ui/AnimatedSection';

export default function FamilySection({ data }) {
  const [brideFlipped, setBrideFlipped] = useState(false);
  const [groomFlipped, setGroomFlipped] = useState(false);

  return (
    <section className="section-padding islamic-pattern-dense">
      <AnimatedSection>
        <h2 className="font-display text-3xl gold-text text-center mb-2">Meet the Families</h2>
        <p className="text-ivory/40 text-center text-sm mb-10 font-body">
          Two families united by the will of Allah ﷻ
        </p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto px-4 justify-center">
        {/* Groom's Family */}
        <AnimatedSection delay={0.1}>
          <div
            className="flip-card cursor-pointer w-full md:w-1/2 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setGroomFlipped(!groomFlipped)}
            style={{ minHeight: '280px' }}
          >
            <div className={`flip-card-inner relative w-full h-full ${groomFlipped ? 'flipped' : ''}`} style={{ minHeight: '280px' }}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 glass-card-gold p-6 ornate-corners">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-3">Groom's Family</p>
                  <h3 className="font-display text-2xl text-ivory mb-1">{data.groom.name}</h3>
                  <p className="text-ivory/50 text-sm font-body mb-4">
                    S/o {data.groom.father} & {data.groom.mother}
                  </p>
                  <div className="gold-shimmer-line w-16 mx-auto mb-4" />
                  <p className="font-display text-ivory/60 text-sm italic leading-relaxed">
                    "{data.groom.dua}"
                  </p>
                  <p className="text-gold/30 text-xs mt-4">Tap for details</p>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back absolute inset-0 glass-card p-6">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-3">The {data.groom.family}</p>
                  <div className="space-y-2 text-sm text-ivory/70">
                    <p><span className="text-gold/50">Father:</span> {data.groom.father}</p>
                    <p><span className="text-gold/50">Mother:</span> {data.groom.mother}</p>
                    <p><span className="text-gold/50">Grandfather:</span> {data.groom.grandfather}</p>
                  </div>
                  <div className="gold-shimmer-line w-12 mx-auto my-4" />
                  <p className="text-ivory/40 text-xs">
                    May Allah bless this family and increase their love and unity.
                  </p>
                  <p className="text-gold/30 text-xs mt-4">Tap to flip back</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bride's Family */}
        <AnimatedSection delay={0.2}>
          <div
            className="flip-card cursor-pointer w-full md:w-1/2 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setBrideFlipped(!brideFlipped)}
            style={{ minHeight: '280px' }}
          >
            <div className={`flip-card-inner relative w-full h-full ${brideFlipped ? 'flipped' : ''}`} style={{ minHeight: '280px' }}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 glass-card-gold p-6 ornate-corners">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-3">Bride's Family</p>
                  <h3 className="font-display text-2xl text-ivory mb-1">{data.bride.name}</h3>
                  <p className="text-ivory/50 text-sm font-body mb-4">
                    D/o {data.bride.father} & {data.bride.mother}
                  </p>
                  <div className="gold-shimmer-line w-16 mx-auto mb-4" />
                  <p className="font-display text-ivory/60 text-sm italic leading-relaxed">
                    "{data.bride.dua}"
                  </p>
                  <p className="text-gold/30 text-xs mt-4">Tap for details</p>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back absolute inset-0 glass-card p-6">
                <div className="text-center">
                  <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-3">The {data.bride.family}</p>
                  <div className="space-y-2 text-sm text-ivory/70">
                    <p><span className="text-gold/50">Father:</span> {data.bride.father}</p>
                    <p><span className="text-gold/50">Mother:</span> {data.bride.mother}</p>
                    <p><span className="text-gold/50">Grandfather:</span> {data.bride.grandfather}</p>
                  </div>
                  <div className="gold-shimmer-line w-12 mx-auto my-4" />
                  <p className="text-ivory/40 text-xs">
                    May Allah unite both families in love, respect, and faith.
                  </p>
                  <p className="text-gold/30 text-xs mt-4">Tap to flip back</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
