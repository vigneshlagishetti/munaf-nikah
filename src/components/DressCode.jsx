import AnimatedSection from './ui/AnimatedSection';

export default function DressCode({ data }) {
  const nikahColors = ['#1B4332', '#2D6A4F', '#40916C', '#52B788', '#74C69D'];
  const walimaColors = ['#6D2E46', '#A4508B', '#D4A5A5', '#F0E6EF', '#B76E79'];

  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">Dress Code</h2>
        <p className="text-white/40 text-center text-sm mb-14 leading-relaxed">Suggested attire for the celebrations</p>
      </AnimatedSection>

      <div className="flex flex-col gap-8 max-w-2xl mx-auto px-6">
        {/* Nikah */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card interactive-card p-7 md:p-8 text-center">
            <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-5">Nikah — Traditional & Modest</p>
            <div className="flex gap-3 mb-8 justify-center">
              {nikahColors.map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border border-gold/10 shadow-sm" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm text-center">
              <div>
                <p className="text-gold/50 text-xs mb-3 tracking-wide font-medium">Men</p>
                <p className="text-white/60 leading-relaxed">Sherwani, Kurta Pajama, or Pathani Suit in dark or earthy tones</p>
              </div>
              <div>
                <p className="text-gold/50 text-xs mb-3 tracking-wide font-medium">Women</p>
                <p className="text-white/60 leading-relaxed">Abaya, Hijab, Anarkali, or modest Sharara in greens and neutrals</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Walima */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card interactive-card p-7 md:p-8 text-center">
            <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-5">Walima — Festive & Formal</p>
            <div className="flex gap-3 mb-8 justify-center">
              {walimaColors.map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border border-gold/10 shadow-sm" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm text-center">
              <div>
                <p className="text-gold/50 text-xs mb-3 tracking-wide font-medium">Men</p>
                <p className="text-white/60 leading-relaxed">Three-piece suit, Sherwani, or Indo-Western in rich tones</p>
              </div>
              <div>
                <p className="text-gold/50 text-xs mb-3 tracking-wide font-medium">Women</p>
                <p className="text-white/60 leading-relaxed">Lehenga, Saree, Gown, or formal Hijab outfit in jewel tones or pastels</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-white/30 text-xs text-center italic leading-relaxed mt-2">
            We kindly request all guests to observe modest dressing in line with Islamic values. JazakAllah Khair 🤍
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
