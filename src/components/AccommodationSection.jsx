import { Hotel, MapPin, Phone } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function AccommodationSection({ data }) {
  if (!data.hotels || data.hotels.length === 0) return null;

  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-3xl gold-text text-center mb-2">Accommodation</h2>
        <p className="text-ivory/40 text-center text-sm mb-10">For our outstation guests</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {data.hotels.map((hotel, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="glass-card interactive-card p-6 md:p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-xl text-ivory">{hotel.name}</h3>
                <Hotel size={20} className="text-gold/50 shrink-0" />
              </div>

              <div className="flex items-center gap-2 text-ivory/60 text-sm mb-6">
                <MapPin size={14} className="text-gold/60" />
                <span>{hotel.distance} from venue</span>
              </div>

              {hotel.halalDining && (
                <div className="mb-6">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] tracking-wide">
                    ✓ Halal Dining Available
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-3 mt-auto">
                <GoldButton href={hotel.bookingUrl} variant="outline" className="w-full text-xs md:text-sm">
                  Book Special Rate
                </GoldButton>
                <GoldButton href={`tel:${hotel.phone}`} variant="ghost" className="w-full text-xs md:text-sm">
                  <Phone size={14} /> {hotel.phone}
                </GoldButton>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {data.contact.coordinatorWhatsApp && (
        <div className="max-w-4xl mx-auto px-4 mt-8 flex justify-center">
          <AnimatedSection delay={0.3} className="w-full md:w-auto">
            <GoldButton
              href={`https://wa.me/${data.contact.coordinatorWhatsApp.replace(/\+/g, '')}?text=Assalamu%20Alaikum!%20I%20need%20help%20with%20accommodation%20for%20the%20wedding.`}
              variant="outline" className="w-full md:w-auto">
              <Phone size={14} /> Contact {data.contact.coordinatorName} on WhatsApp
            </GoldButton>
          </AnimatedSection>
        </div>
      )}
    </section>
  );
}
