import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function RSVPForm({ data }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', guests: '1',
    nikah: 'yes', walima: 'yes', dietary: '', message: '',
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Posts to Formspree or any endpoint configured in wedding.json
      if (data.rsvpEndpoint && !data.rsvpEndpoint.includes('your-form-id')) {
        await fetch(data.rsvpEndpoint, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
    } catch { /* Silent fail — WhatsApp fallback available */ }
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Assalamu Alaikum! I would like to RSVP for the wedding of ${data.groom.name} & ${data.bride.name}.\n\nName: \nNumber of Guests: \nAttending Nikah: Yes/No\nAttending Walima: Yes/No\n\nDua for the couple: `
  );

  const inputClass = 'w-full bg-charcoal-dark/50 border border-gold/15 rounded-xl px-5 py-4 text-white text-sm placeholder-ivory/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all shadow-inner hover:border-gold/30';
  const labelClass = 'text-gold/60 text-xs font-medium tracking-wide mb-2.5 block';

  return (
    <section className="section-padding islamic-pattern-dense">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">RSVP</h2>
        <p className="text-white/70 text-center text-sm mb-14 leading-relaxed">Let us know if you can make it</p>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form key="form" onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="glass-card p-7 md:p-10 space-y-7">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" required value={form.name} onChange={update('name')} placeholder="Your name" className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+91..." className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Guests</label>
                  <input type="number" min="1" max="10" value={form.guests} onChange={update('guests')} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" value={form.email} onChange={update('email')} placeholder="email@example.com" className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Attending Nikah?</label>
                  <select value={form.nikah} onChange={update('nikah')} className={inputClass}>
                    <option value="yes">Yes, InshaAllah</option>
                    <option value="no">Unable to attend</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Attending Walima?</label>
                  <select value={form.walima} onChange={update('walima')} className={inputClass}>
                    <option value="yes">Yes, InshaAllah</option>
                    <option value="no">Unable to attend</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Dietary Preferences / Allergies</label>
                <input type="text" value={form.dietary} onChange={update('dietary')} placeholder="All food is Halal. Note any allergies." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Message / Dua for the Couple</label>
                <textarea rows={3} value={form.message} onChange={update('message')} placeholder="Your blessings and prayers..." className={`${inputClass} resize-none`} />
              </div>
              <div className="pt-2">
                <GoldButton variant="primary" className="w-full" onClick={handleSubmit}>
                  {loading ? 'Sending...' : <><Send size={14} /> Send RSVP</>}
                </GoldButton>
              </div>
            </motion.form>
          ) : (
            <motion.div key="success"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="glass-card-gold p-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                className="text-5xl mb-6">🤲</motion.div>
              <h3 className="font-display text-2xl gold-text mb-4">JazakAllah Khair!</h3>
              <p className="text-white/85 text-sm leading-relaxed">Thank you for your response. We look forward to celebrating with you.</p>
              <p className="arabic-text text-gold/50 text-lg mt-6">بَارَكَ اللَّهُ لَكُمْ</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp fallback */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mt-8">
            <p className="text-white/60 text-xs mb-4 leading-relaxed">Or RSVP directly via WhatsApp</p>
            <GoldButton href={`https://wa.me/${data.contact.groomWhatsApp.replace(/\+/g, '')}?text=${whatsappMsg}`} variant="outline">
              <MessageCircle size={14} /> RSVP via WhatsApp
            </GoldButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
