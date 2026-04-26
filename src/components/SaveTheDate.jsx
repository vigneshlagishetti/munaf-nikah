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
    <motion.div
      className="countdown-box"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        key={value}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="countdown-box-number"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="countdown-box-label">{label}</span>
    </motion.div>
  );

  return (
    <section className="save-the-date-section islamic-pattern-dense relative overflow-hidden">
      {/* Corner diamond ornaments */}
      <div className="std-corner std-corner--tl" />
      <div className="std-corner std-corner--tr" />
      <div className="std-corner std-corner--bl" />
      <div className="std-corner std-corner--br" />

      <AnimatedSection>
        <p className="std-subtitle">Save the Date</p>
        <h2 className="std-date gold-text">{data.nikah.dateGregorian}</h2>
        <p className="std-hijri hijri-text">{data.nikah.dateHijri}</p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        {!nikahCountdown.isPast ? (
          <div className="countdown-row">
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
        <div className="flex flex-col gap-3 items-center w-full px-6" style={{ maxWidth: '340px', margin: '0 auto' }}>
          <GoldButton onClick={() => handleGoogleCal('nikah')} variant="primary" className="w-full">
            <Calendar size={16} /> Add Nikah to Calendar
          </GoldButton>
          <div className="flex gap-3 items-center w-full">
            <GoldButton onClick={() => handleDownloadICS('nikah')} variant="outline" className="flex-1">
              <Calendar size={14} /> Download .ics
            </GoldButton>
            {data.nikah.dateGregorian !== data.walima.dateGregorian && (
              <GoldButton onClick={() => handleGoogleCal('walima')} variant="outline" className="flex-1">
                <Calendar size={14} /> Walima
              </GoldButton>
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
