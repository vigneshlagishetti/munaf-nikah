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
        <p className="text-white/70 text-center text-sm mb-14 leading-relaxed">Common questions answered</p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-5 px-6">
        {data.faq.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className="glass-card overflow-hidden transition-colors hover:border-gold/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-7 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white text-base pr-6 font-medium leading-relaxed">{item.question}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} className="text-gold/50 shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6 border-t border-gold/10 pt-5">
                      <p className="text-white/80 text-sm leading-[1.8]">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
