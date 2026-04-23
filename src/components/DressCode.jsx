import AnimatedSection from './ui/AnimatedSection';

export default function DressCode({ data }) {
  const nikahColors = ['#1B4332', '#2D6A4F', '#40916C', '#52B788', '#74C69D'];
  const walimaColors = ['#6D2E46', '#A4508B', '#D4A5A5', '#F0E6EF', '#B76E79'];

  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-3xl gold-text text-center mb-2">Dress Code</h2>
        <p className="text-ivory/40 text-center text-sm mb-10">Suggested attire for the celebrations</p>
      </AnimatedSection>

      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {/* Nikah */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card interactive-card p-6">
            <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-3">Nikah — Traditional & Modest</p>
            <div className="flex gap-2 mb-4">
              {nikahColors.map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-gold/10" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gold/50 text-xs mb-1">Men</p>
                <p className="text-ivory/60">Sherwani, Kurta Pajama, or Pathani Suit in dark or earthy tones</p>
              </div>
              <div>
                <p className="text-gold/50 text-xs mb-1">Women</p>
                <p className="text-ivory/60">Abaya, Hijab, Anarkali, or modest Sharara in greens and neutrals</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Walima */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card interactive-card p-6">
            <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-3">Walima — Festive & Formal</p>
            <div className="flex gap-2 mb-4">
              {walimaColors.map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-gold/10" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gold/50 text-xs mb-1">Men</p>
                <p className="text-ivory/60">Three-piece suit, Sherwani, or Indo-Western in rich tones</p>
              </div>
              <div>
                <p className="text-gold/50 text-xs mb-1">Women</p>
                <p className="text-ivory/60">Lehenga, Saree, Gown, or formal Hijab outfit in jewel tones or pastels</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-ivory/30 text-xs text-center italic">
            We kindly request all guests to observe modest dressing in line with Islamic values. JazakAllah Khair 🤍
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
