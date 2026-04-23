import { useState } from 'react';
import { MapPin, Navigation, Copy, ParkingCircle } from 'lucide-react';
import { copyToClipboard } from '../utils/share';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function VenueSection({ data }) {
  const [toast, setToast] = useState('');

  const handleCopy = async (address) => {
    const ok = await copyToClipboard(address);
    if (ok) {
      setToast('Address copied!');
      setTimeout(() => setToast(''), 2000);
    }
  };

  const VenueBlock = ({ label, venue, accent }) => (
    <div className="glass-card interactive-card overflow-hidden h-full flex flex-col">
      <div className={`h-1 ${accent}`} />
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-2">{label}</p>
        <h3 className="font-display text-xl text-ivory mb-1">{venue.venueName}</h3>
        <p className="text-ivory/50 text-sm mb-4">{venue.venueAddress}</p>

        {/* Map embed placeholder */}
        <div className="w-full h-40 rounded-xl mb-4 overflow-hidden bg-charcoal-mid border border-gold/10 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={24} className="text-gold/30 mx-auto mb-2" />
            <p className="text-ivory/30 text-xs">Interactive map</p>
            <a href={`https://www.google.com/maps?q=${venue.lat},${venue.lng}`}
              target="_blank" rel="noopener noreferrer" className="text-gold/50 text-xs underline">
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <GoldButton href={`https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}`}
            variant="outline" className="w-full text-xs md:text-sm">
            <Navigation size={14} /> Google Maps Directions
          </GoldButton>
          <GoldButton href={`http://maps.apple.com/?daddr=${venue.lat},${venue.lng}`}
            variant="ghost" className="w-full text-xs md:text-sm">
            <Navigation size={14} /> Apple Maps
          </GoldButton>
          <GoldButton onClick={() => handleCopy(venue.venueAddress)} variant="ghost" className="w-full text-xs md:text-sm">
            <Copy size={14} /> Copy Address
          </GoldButton>
        </div>

        {data.nearestMasjid && (
          <div className="mt-6 pt-5 border-t border-gold/10">
            <p className="text-ivory/40 text-xs md:text-sm flex items-center gap-2">
              <ParkingCircle size={14} className="text-gold/40" />
              Free parking available
            </p>
            <p className="text-ivory/40 text-xs md:text-sm mt-2">
              🕌 {data.nearestMasjid}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="section-padding islamic-pattern-dense">
      <AnimatedSection>
        <h2 className="font-display text-3xl gold-text text-center mb-2">Venue & Location</h2>
        <p className="text-ivory/40 text-center text-sm mb-10">Find your way to the celebration</p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto px-4 justify-center">
        {data.settings.sameVenue ? (
          <AnimatedSection delay={0.1} className="w-full md:w-2/3">
            <VenueBlock label="Nikah & Walima Venue" venue={data.nikah} accent="bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
          </AnimatedSection>
        ) : (
          <>
            <AnimatedSection delay={0.1} className="w-full md:w-1/2">
              <VenueBlock label="Nikah Venue" venue={data.nikah} accent="bg-gradient-to-r from-emerald-dark via-emerald to-emerald-dark" />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="w-full md:w-1/2">
              <VenueBlock label="Walima Venue" venue={data.walima} accent="bg-gradient-to-r from-rose-gold/60 via-rose-gold to-rose-gold/60" />
            </AnimatedSection>
          </>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast glass-card-gold px-4 py-2 text-gold text-sm">{toast}</div>
      )}
    </section>
  );
}
