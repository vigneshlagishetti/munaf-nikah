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
    <div className="countdown-digit flex flex-col items-center px-4 py-4 min-w-[72px] md:min-w-[90px]">
      <motion.span key={value} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="font-display text-3xl md:text-5xl text-gold font-light drop-shadow-md">
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-2">{label}</span>
    </div>
  );

  return (
    <section className="section-padding text-center">
      <AnimatedSection>
        <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mb-4">Save the Date</p>
        <h2 className="font-display text-3xl md:text-4xl gold-text mb-3">{data.nikah.dateGregorian}</h2>
        <p className="hijri-text text-gold/50 text-lg mb-14">{data.nikah.dateHijri}</p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        {!nikahCountdown.isPast ? (
          <div className="flex justify-center gap-2 md:gap-4 mb-14">
            <CountdownUnit value={nikahCountdown.days} label="Days" />
            <CountdownUnit value={nikahCountdown.hours} label="Hours" />
            <CountdownUnit value={nikahCountdown.minutes} label="Min" />
            <CountdownUnit value={nikahCountdown.seconds} label="Sec" />
          </div>
        ) : (
          <div className="glass-card-gold px-8 py-6 mb-14 inline-block">
            <p className="font-display text-2xl text-gold">The Blessed Day Has Arrived!</p>
          </div>
        )}
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="flex flex-col gap-4 items-center">
          <GoldButton onClick={() => handleGoogleCal('nikah')} variant="primary">
            <Calendar size={16} /> Add Nikah to Calendar
          </GoldButton>
          <div className="flex gap-3 items-center">
            <GoldButton onClick={() => handleDownloadICS('nikah')} variant="outline">
              <Calendar size={16} /> Download .ics
            </GoldButton>
            {data.nikah.dateGregorian !== data.walima.dateGregorian && (
              <GoldButton onClick={() => handleGoogleCal('walima')} variant="ghost">
                <Calendar size={16} /> Walima
              </GoldButton>
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
