import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { downloadICS, openGoogleCalendar } from '../utils/calendar';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function SaveTheDate({ data }) {
  const nikahCountdown = useCountdown(data.nikah.dateGregorian);

  const handleDownloadICS = (event) => {
    const d = event === 'nikah' ? data.nikah : data.walima;
    downloadICS({
      title: `${data.groom.name} & ${data.bride.name} — ${event === 'nikah' ? 'Nikah' : 'Walima'}`,
      description: d.note, location: `${d.venueName}, ${d.venueAddress}`,
      startDate: d.dateGregorian, startTime: d.time,
    });
  };

  const handleGoogleCal = (event) => {
    const d = event === 'nikah' ? data.nikah : data.walima;
    openGoogleCalendar({
      title: `${data.groom.name} & ${data.bride.name} — ${event === 'nikah' ? 'Nikah' : 'Walima'}`,
      description: d.note, location: `${d.venueName}, ${d.venueAddress}`,
      startDate: d.dateGregorian, startTime: d.time,
    });
  };

  const CountdownUnit = ({ value, label }) => (
    <div className="countdown-digit flex flex-col items-center px-6 py-4 min-w-[80px] md:min-w-[100px] mx-1 md:mx-2">
      <motion.span key={value} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="font-display text-4xl md:text-5xl text-gold font-light drop-shadow-md">
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-ivory/40 text-[10px] tracking-[0.2em] uppercase mt-1">{label}</span>
    </div>
  );

  return (
    <section className="section-padding text-center">
      <AnimatedSection>
        <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mb-3">Save the Date</p>
        <h2 className="font-display text-3xl gold-text mb-2">{data.nikah.dateGregorian}</h2>
        <p className="hijri-text text-gold/50 text-lg mb-10">{data.nikah.dateHijri}</p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        {!nikahCountdown.isPast ? (
          <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            <CountdownUnit value={nikahCountdown.days} label="Days" />
            <CountdownUnit value={nikahCountdown.hours} label="Hours" />
            <CountdownUnit value={nikahCountdown.minutes} label="Min" />
            <CountdownUnit value={nikahCountdown.seconds} label="Sec" />
          </div>
        ) : (
          <div className="glass-card-gold px-8 py-6 mb-10 inline-block">
            <p className="font-display text-2xl text-gold">The Blessed Day Has Arrived!</p>
          </div>
        )}
      </AnimatedSection>
      <AnimatedSection delay={0.25}>
        <div className="flex flex-col gap-3 items-center max-w-xs mx-auto">
          <GoldButton onClick={() => handleGoogleCal('nikah')} variant="primary" className="w-full">
            <Calendar size={16} /> Add Nikah to Calendar
          </GoldButton>
          <GoldButton onClick={() => handleDownloadICS('nikah')} variant="outline" className="w-full">
            <Calendar size={16} /> Download .ics File
          </GoldButton>
          {data.nikah.dateGregorian !== data.walima.dateGregorian && (
            <GoldButton onClick={() => handleGoogleCal('walima')} variant="ghost" className="w-full">
              <Calendar size={16} /> Add Walima to Calendar
            </GoldButton>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}
