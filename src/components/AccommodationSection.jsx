import { Hotel, MapPin, Phone } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function AccommodationSection({ data }) {
  if (!data.hotels || data.hotels.length === 0) return null;

  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">Accommodation</h2>
        <p className="text-white/40 text-center text-sm mb-14 leading-relaxed">For our outstation guests</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
        {data.hotels.map((hotel, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="glass-card interactive-card p-7 md:p-8 h-full flex flex-col text-center">
              <Hotel size={24} className="text-gold/50 mx-auto mb-4" />
              <h3 className="font-display text-xl text-white mb-3 leading-snug">{hotel.name}</h3>

              <p className="text-white/60 text-sm mb-4">
                <MapPin size={14} className="text-gold/60 inline-block mr-1.5 align-middle" />
                <span className="align-middle">{hotel.distance}</span>
              </p>

              {hotel.halalDining && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[11px] tracking-wide">
                    ✓ Halal Dining Available
                  </span>
                </div>
              )}

              {hotel.nearestMasjid && (
                <p className="text-white/50 text-sm mb-6">
                  <span className="mr-1.5">🕌</span>
                  Nearest masjid: {hotel.nearestMasjid}
                </p>
              )}

              <div className="flex flex-col gap-3 mt-auto max-w-xs mx-auto w-full">
                {hotel.bookingUrl && (
                  <GoldButton href={hotel.bookingUrl} variant="outline" className="w-full text-xs md:text-sm">
                    Book Special Rate
                  </GoldButton>
                )}
                {hotel.phone && (
                  <GoldButton href={`tel:${hotel.phone}`} variant="ghost" className="w-full text-xs md:text-sm">
                    <Phone size={14} /> {hotel.phone}
                  </GoldButton>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {data.contact?.coordinatorWhatsApp && (
        <div className="max-w-4xl mx-auto px-6 mt-10 flex justify-center">
          <AnimatedSection delay={0.3} className="w-full md:w-auto">
            <GoldButton
              href={`https://wa.me/${data.contact.coordinatorWhatsApp.replace(/\+/g, '')}?text=Assalamu%20Alaikum!%20I%20need%20help%20with%20accommodation%20for%20the%20wedding.`}
              variant="outline" className="w-full md:w-auto">
              <Phone size={14} /> Contact {data.contact.coordinatorName || 'Coordinator'} on WhatsApp
            </GoldButton>
          </AnimatedSection>
        </div>
      )}
    </section>
  );
}
