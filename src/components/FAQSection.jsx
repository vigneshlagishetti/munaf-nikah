import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">FAQ</h2>
        <p className="text-gold/50 text-center text-xs tracking-[0.2em] uppercase mb-14">Common Questions</p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection delay={0.1}>
          <div className="glass-card-gold relative overflow-hidden">
            {/* Ambient Background Pattern */}
            <div className="absolute inset-0 islamic-pattern-bg opacity-[0.05] pointer-events-none" />
            
            <div className="relative z-10 px-6 py-2 md:px-10 md:py-4 divide-y divide-gold/10">
              {data.faq.map((item, i) => (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left cursor-pointer transition-all duration-300"
                  >
                    <span className="font-display text-lg md:text-xl text-white/80 pr-6 transition-colors group-hover:text-gold leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-gold/20 bg-black/40 group-hover:border-gold/50 transition-colors shrink-0"
                    >
                      <ChevronDown size={14} className="text-gold/70 group-hover:text-gold transition-colors" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pr-10 md:pr-16">
                          <p className="text-white/60 text-sm leading-relaxed font-body font-light">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
