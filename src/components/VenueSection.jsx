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
      <div className="p-7 md:p-8 flex-1 flex flex-col text-center">
        <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-4">{label}</p>
        <h3 className="font-display text-2xl text-white mb-2">{venue.venueName}</h3>
        <p className="text-white/80 text-sm mb-8 leading-relaxed max-w-sm mx-auto">{venue.venueAddress}</p>

        {/* Venue Image / Map */}
        <div className="w-full h-48 rounded-xl mb-8 overflow-hidden border border-gold/10">
          {data.images?.venueMosque ? (
            <a href={`https://www.google.com/maps?q=${venue.lat},${venue.lng}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img src={data.images.venueMosque} alt={venue.venueName} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </a>
          ) : (
            <div className="w-full h-full bg-charcoal-mid flex items-center justify-center">
              <div className="text-center space-y-3">
                <MapPin size={28} className="text-gold/30 mx-auto" />
                <p className="text-white/60 text-sm">Interactive Map</p>
                <a href={`https://www.google.com/maps?q=${venue.lat},${venue.lng}`}
                  target="_blank" rel="noopener noreferrer" className="text-gold/50 text-xs underline hover:text-gold transition-colors">
                  Open in Google Maps
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mt-auto max-w-xs mx-auto w-full">
          <GoldButton href={`https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}`}
            variant="outline" className="w-full text-xs md:text-sm">
            <Navigation size={14} /> Get Directions
          </GoldButton>
          <div className="flex gap-3 justify-center">
            <GoldButton href={`http://maps.apple.com/?daddr=${venue.lat},${venue.lng}`}
              variant="ghost" className="text-xs md:text-sm">
              <Navigation size={14} /> Apple Maps
            </GoldButton>
            <GoldButton onClick={() => handleCopy(venue.venueAddress)} variant="ghost" className="text-xs md:text-sm">
              <Copy size={14} /> Copy
            </GoldButton>
          </div>
        </div>

        {data.nearestMasjid && (
          <div className="mt-8 pt-6 border-t border-gold/10 space-y-4 text-center">
            <p className="text-white/70 text-sm">
              <ParkingCircle size={14} className="text-gold/40 inline-block mr-2 align-middle" />
              <span className="align-middle">Free parking available</span>
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="mr-2">🕌</span>
              {data.nearestMasjid}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="section-padding islamic-pattern-dense">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl gold-text text-center mb-4">Venue & Location</h2>
        <p className="text-white/70 text-center text-sm mb-14 leading-relaxed">Find your way to the celebration</p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-4xl mx-auto px-6 justify-center">
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
        <div className="toast glass-card-gold px-5 py-2.5 text-gold text-sm">{toast}</div>
      )}
    </section>
  );
}
