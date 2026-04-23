import { MessageCircle, Phone } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function ContactSection({ data }) {
  const contacts = [
    { label: "Bride's Family", phone: data.contact.brideWhatsApp, icon: '👰' },
    { label: "Groom's Family", phone: data.contact.groomWhatsApp, icon: '🤵' },
    { label: data.contact.coordinatorName || 'Coordinator', phone: data.contact.coordinatorWhatsApp, icon: '📋' },
  ];

  return (
    <section className="section-padding islamic-pattern-dense">
      <AnimatedSection>
        <h2 className="font-display text-3xl gold-text text-center mb-2">Contact</h2>
        <p className="text-ivory/40 text-center text-sm mb-10">Reach out to us anytime</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
        {contacts.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card interactive-card p-6 flex flex-col items-center gap-4 text-center h-full">
              <span className="text-4xl mb-2">{c.icon}</span>
              <div className="flex-1">
                <p className="text-ivory/80 text-base font-medium">{c.label}</p>
                <p className="text-ivory/40 text-sm mt-1">{c.phone}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href={`https://wa.me/${c.phone.replace(/\+/g, '')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center hover:bg-emerald/20 transition-all hover:scale-110 active:scale-95">
                  <MessageCircle size={18} className="text-emerald" />
                </a>
                <a href={`tel:${c.phone}`}
                  className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center hover:bg-gold/20 transition-all hover:scale-110 active:scale-95">
                  <Phone size={18} className="text-gold" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
