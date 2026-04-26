import { MessageCircle, Phone } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function ContactSection({ data }) {
  const contacts = [
    data.contact.groomWhatsApp && { label: "Groom's Family", phone: data.contact.groomWhatsApp, icon: '🤵' },
    data.contact.brideWhatsApp && { label: "Bride's Family", phone: data.contact.brideWhatsApp, icon: '👰' },
    data.contact.coordinatorWhatsApp && { label: data.contact.coordinatorName || 'Coordinator', phone: data.contact.coordinatorWhatsApp, icon: '📋' },
  ].filter(Boolean);

  if (contacts.length === 0) return null;

  return (
    <section className="section-padding islamic-pattern-dense">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">Contact</h2>
        <p className="text-white/70 text-center text-sm mb-14 leading-relaxed">Reach out to us anytime</p>
      </AnimatedSection>

      <div className={`grid gap-6 max-w-4xl mx-auto px-6 ${contacts.length === 1 ? 'grid-cols-1 max-w-sm' : contacts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {contacts.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card interactive-card p-7 flex flex-col items-center gap-5 text-center h-full">
              <span className="text-4xl mb-1">{c.icon}</span>
              <div className="flex-1">
                <p className="text-white text-base font-medium">{c.label}</p>
                <p className="text-white/70 text-sm mt-2">{c.phone}</p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href={`https://wa.me/${c.phone.replace(/\+/g, '')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center hover:bg-emerald/20 transition-all hover:scale-110 active:scale-95">
                  <MessageCircle size={18} className="text-emerald" />
                </a>
                <a href={`tel:${c.phone}`}
                  className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center hover:bg-gold/20 transition-all hover:scale-110 active:scale-95">
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
